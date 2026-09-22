# syntax=docker/dockerfile:1

# ---------- Стадия 1: зависимости ----------
# Только установка зависимостей с кэшированием npm.
# Отдельная стадия, чтобы изменение исходников не перекачивало пакеты заново.
FROM node:22-alpine AS deps
WORKDIR /usr/src/app

# npm 10 (из node:22-alpine) падает с EBADPLATFORM на биндингах @oxc-parser,
# которые тянет nuxt. Поднимаем npm до 11 — он корректно пропускает чужие
# платформы и соответствует локальной среде (Node 24 → npm 11).
RUN npm install -g npm@11

COPY package.json package-lock.json ./

# Кэш npm монтируется между сборками => повторные сборки быстрее
RUN --mount=type=cache,target=/root/.npm npm ci

# ---------- Стадия 2: сборка ----------
# Берём зависимости из deps и собираем продакшн-вывод в .output
FROM deps AS build

# Переменные окружения, запекаемые в сборку (meta-теги/скрипты в head)
ARG GOOGLE_VERIFICATION
ARG YANDEX_VERIFICATION
ARG MAP_URL
ARG METRIKA_STRING

ENV NODE_ENV=production
ENV MAP_URL=$MAP_URL
ENV GOOGLE_VERIFICATION=$GOOGLE_VERIFICATION
ENV YANDEX_VERIFICATION=$YANDEX_VERIFICATION
ENV METRIKA_STRING=$METRIKA_STRING

COPY . .

RUN npm run build

# ---------- Стадия 3: рантайм ----------
# Лёгкий образ: только .output + runtime-переменные, без тулчейна и исходников
FROM node:22-alpine AS runtime

ENV NODE_ENV=production
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

WORKDIR /usr/src/app

# Nitro-вывод самодостаточен: включает свои node_modules и произвольные ассеты
COPY --from=build /usr/src/app/.output ./.output

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:3000/ || exit 1

# Запускаемся от непривилегированного пользователя (есть в node:alpine)
USER node

CMD ["node", ".output/server/index.mjs"]

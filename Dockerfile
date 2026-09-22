# syntax=docker/dockerfile:1

FROM node:24-alpine AS deps
WORKDIR /usr/src/app

COPY package.json package-lock.json ./

# Кэш npm монтируется между сборками => повторные сборки быстрее
RUN --mount=type=cache,target=/root/.npm npm ci

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

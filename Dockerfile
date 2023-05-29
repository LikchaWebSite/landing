# syntax=docker/dockerfile:1

FROM node:18-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 3000

ENV NITRO_HOST=0.0.0.0

ENV NITRO_PORT=3000

CMD node .output/server/index.mjs

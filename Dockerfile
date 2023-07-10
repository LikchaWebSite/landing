# syntax=docker/dockerfile:1

FROM node:18-alpine

WORKDIR /app

ARG MAP_URL

ENV NODE_ENV=development
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000
ENV MAP_URL=$MAP_URL

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]
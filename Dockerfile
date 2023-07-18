# syntax=docker/dockerfile:1

FROM node:18-alpine

WORKDIR /usr/src/app

ARG MAP_URL
ARG NITRO_PORT=3000

ENV NODE_ENV=development
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=$NITRO_PORT
ENV MAP_URL=$MAP_URL

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

ENTRYPOINT [ "npm", "run", "start" ]


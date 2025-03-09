# syntax=docker/dockerfile:1

FROM node:18-alpine

WORKDIR /usr/src/app

ARG GOOGLE_VERIFICATION
ARG YANDEX_VERIFICATION
ARG MAP_URL
ARG METRIKA_STRING
ARG NITRO_PORT=3000
ARG NITRO_HOST=0.0.0.0

ENV NODE_ENV=development
ENV NITRO_HOST=$NITRO_HOST
ENV NITRO_PORT=$NITRO_PORT
ENV MAP_URL=$MAP_URL
ENV GOOGLE_VERIFICATION=$GOOGLE_VERIFICATION
ENV YANDEX_VERIFICATION=$YANDEX_VERIFICATION
ENV METRIKA_STRING=$METRIKA_STRING

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


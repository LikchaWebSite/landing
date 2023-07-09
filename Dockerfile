# syntax=docker/dockerfile:1

FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV=development
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build
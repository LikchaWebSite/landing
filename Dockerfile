# syntax=docker/dockerfile:1

FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV=development

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]
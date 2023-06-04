# syntax=docker/dockerfile:1

ENV NODE_ENV=production
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

COPY package*.json ./

RUN npm ci && npm cache clean --force

COPY . .

RUN npm run build
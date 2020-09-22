FROM node:lts-slim

LABEL zerro "zerrozhao@gmail.com"

RUN apt-get update -y \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app/tradingdata2

COPY package.json ./
COPY package-lock.json ./
RUN npm i -dd

COPY ./ ./

CMD ["node", "./bin/start.js"]
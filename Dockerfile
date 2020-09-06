FROM node:12

COPY ./package*.json /app/tradingdata2/

RUN cd /app/tradingdata2 \
    && npm i -d

COPY . /app/tradingdata2

WORKDIR /app/tradingdata2

CMD ["node", "./bin/bitmex.js"]
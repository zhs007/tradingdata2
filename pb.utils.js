const {Candle, Candles} = require('./pb/tradingdb2_pb');

/**
 * newCandle - new pb.Candle
 * @param {object} candle - candle {ts, open, close, high, low, volume, openInterest}
 * @return {object} pbCandle - pb.Candle
 */
function newCandle(candle) {
  const pbCandle = new Candle();

  if (candle.ts) {
    pbCandle.setTs(candle.ts);
  }

  if (candle.open) {
    pbCandle.setOpen(candle.open);
  }

  if (candle.close) {
    pbCandle.setClose(candle.close);
  }

  if (candle.high) {
    pbCandle.setHigh(candle.high);
  }

  if (candle.low) {
    pbCandle.setLow(candle.low);
  }

  if (candle.volume) {
    pbCandle.setVolume(candle.volume);
  }

  if (candle.openInterest) {
    pbCandle.setOpeninterest(candle.openInterest);
  }

  if (candle.trades) {
    pbCandle.setTrades(candle.trades);
  }

  if (candle.vwap) {
    pbCandle.setVwap(candle.vwap);
  }

  if (candle.lastSize) {
    pbCandle.setLastsize(candle.lastSize);
  }

  if (candle.turnover) {
    pbCandle.setTurnover(candle.turnover);
  }

  if (candle.homeNotional) {
    pbCandle.setHomenotional(candle.homeNotional);
  }

  if (candle.foreignNotional) {
    pbCandle.setForeignnotional(candle.foreignNotional);
  }

  return pbCandle;
}

/**
 * newCandles - new pb.Candles
 * @param {string} market - market
 * @param {string} symbol - symbol
 * @param {string} tag - tag
 * @param {array} candles - candles [{ts, open, close, high, low, volume, openInterest}]
 * @return {object} pbCandles - pb.Candles
 */
function newCandles(market, symbol, tag, candles) {
  const pbCandles = new Candles();

  pbCandles.setMarket(market);
  pbCandles.setSymbol(symbol);
  pbCandles.setTag(tag);

  for (let i = 0; i < candles.length; ++i) {
    const cc = newCandle(candles[i]);

    pbCandles.addCandles(cc, i);
  }

  return pbCandles;
}

/**
 * batchCandles - batch pb.Candles
 * @param {array} candles - candles [{ts, open, close, high, low, volume, openInterest}]
 * @param {int} batchNums - batchNums
 * @param {function} onBatch - async onBatch(pb.Candles)
 */
async function batchCandles(candles, batchNums, onBatch) {
  let curlen = batchNums;
  for (let i = 0; i < candles.length; i += curlen) {
    if (batchNums + i > candles.length) {
      curlen = candles.length - i;
    }

    const pbCandles = new Candles();

    // pbCandles.setMarket(market);
    // pbCandles.setSymbol(symbol);
    // pbCandles.setTag(tag);

    for (let j = 0; j < curlen; ++j) {
      const cc = newCandle(candles[i + j]);
      pbCandles.addCandles(cc, j);
    }

    await onBatch(pbCandles);
  }
}

/**
 * callSend - call.send(msg, callback) => await callSend()
 * @param {object} call - ClientWritableStream
 * @param {object} msg - pb.Message
 * @return {Promise} ret - Promise
 */
async function callSend(call, msg) {
  return new Promise((resolve, reject) => {
    call.write(msg, () => {
      resolve();
    });
  });
}

/**
 * pbCandle2Cancle - pb.Candle -> candle
 * @param {object} pbCandle - pb.Candle
 * @return {object} pbCandle - candle {ts, open, close, high, low, volume, openInterest}
 */
function pbCandle2Cancle(pbCandle) {
  return {
    ts: pbCandle.getTs(),
    open: pbCandle.getOpen(),
    close: pbCandle.getClose(),
    high: pbCandle.getHigh(),
    low: pbCandle.getLow(),
    volume: pbCandle.getVolume(),
    openInterest: pbCandle.getOpeninterest(),
  };
}

exports.newCandle = newCandle;
exports.newCandles = newCandles;
exports.batchCandles = batchCandles;
exports.callSend = callSend;
exports.pbCandle2Cancle = pbCandle2Cancle;

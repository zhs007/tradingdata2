const { Candle, Candles } = require('./pb/tradingdb2_pb');

/**
 * newCandle - new pb.Candle
 * @param {object} candle - candle {ts, open, close, high, low, volume, openInterest}
 * @return {object} pbCandle - pb.Candle
 */
function newCandle(candle) {
  const pbCandle = new Candle();

  if (caldle.ts) {
    cc.setTs(caldle.ts);
  }

  if (caldle.open) {
    cc.setOpen(caldle.open);
  }

  if (caldle.close) {
    cc.setClose(caldle.close);
  }

  if (caldle.high) {
    cc.setHigh(caldle.high);
  }

  if (caldle.low) {
    cc.setLow(caldle.low);
  }

  if (caldle.volume) {
    cc.setVolume(caldle.volume);
  }

  if (caldle.openInterest) {
    cc.setOpeninterest(caldle.openInterest);
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
 * @param {function} onBatch - onBatch(pb.Candles) error
 * @return {error} err - error
 */
function batchCandles(candles, batchNums, onBatch) {
  let curlen = batchNums;
  for (let i = 0; i < candles.length; i += curlen) {
    if (batchNums + i > candles.length) {
      curlen = candles.length - i;
    }

    const pbCandles = new Candles();

    pbCandles.setMarket(market);
    pbCandles.setSymbol(symbol);
    pbCandles.setTag(tag);

    for (let j = 0; j < curlen; ++j) {
      const cc = newCandle(candles[i + j]);
      pbCandles.addCandles(cc, j);
    }

    const err = onBatch(pbCandles);
    if (err) {
      return err;
    }
  }

  return undefined;
}

exports.newCandle = newCandle;
exports.newCandles = newCandles;
exports.batchCandles = batchCandles;

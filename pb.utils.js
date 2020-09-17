const {Candle, Candles} = require('./pb/tradingdb2_pb');

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

  pbCandles.setMarket(marker);
  pbCandles.setSymbol(symbol);
  pbCandles.setTag(tag);

  for (let i = 0; i < candles.length; ++i) {
    const cc = newCandle(candles[i]);

    pbCandles.addCandles(cc, i);
  }

  return pbCandles;
}

exports.newCandle = newCandle;
exports.newCandles = newCandles;

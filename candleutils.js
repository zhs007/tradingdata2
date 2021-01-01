const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

/**
 * chgCandles -
 * @param {Array} candles - candles
 * @param {function} ismerge - bool ismerge(first, cur)
 * @return {Array} newCandles - newCandles
 */
function chgCandles(candles, ismerge) {
  let first = candles[0];
  let newCur = {
    ts: first.ts,
    open: first.open,
    close: first.close,
    high: first.high,
    low: first.low,
    volume: first.volume,
  };
  const newCandles = [];

  for (let i = 1; i < candles.length; ++i) {
    const cur = candles[i];
    if (!ismerge(first, cur)) {
      newCandles.push(newCur);

      first = cur;

      newCur = {
        ts: first.ts,
        open: first.open,
        close: first.close,
        high: first.high,
        low: first.low,
        volume: first.volume,
      };
    } else {
      newCur.close = cur.close;
      newCur.volume += cur.volume;

      if (newCur.high < cur.high) {
        newCur.high = cur.high;
      }

      if (newCur.low > cur.low) {
        newCur.low = cur.low;
      }
    }
  }

  newCandles.push(newCur);

  return newCandles;
}

/**
 * chgCandles12H -
 * @param {Array} candles - candles
 * @return {Array} newCandles - newCandles
 */
function chgCandles12H(candles) {
  return chgCandles(candles, (first, cur) => {
    if (first == undefined) {
      return false;
    }

    const ft = dayjs.utc().unix(first.ts);
    const ct = dayjs.utc().unix(cur.ts);

    if (ft.year() == ct.year() && ft.month() == ct.month() && ft.date() == ct.date()) {
      if (ft.hour() < 12) {
        return ct.hour() < 12;
      }

      return ct.hour() >= 12;
    }

    return false;
  });
}

exports.chgCandles = chgCandles;
exports.chgCandles12H = chgCandles12H;

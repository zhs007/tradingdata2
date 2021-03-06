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

    const ft = dayjs.unix(first.ts);
    const ct = dayjs.unix(cur.ts);

    if (ft.year() == ct.year() && ft.month() == ct.month() && ft.date() == ct.date()) {
      if (ft.hour() < 12) {
        return ct.hour() < 12;
      }

      return ct.hour() >= 12;
    }

    return false;
  });
}

/**
 * chgCandles8H -
 * @param {Array} candles - candles
 * @return {Array} newCandles - newCandles
 */
function chgCandles8H(candles) {
  return chgCandles(candles, (first, cur) => {
    if (first == undefined) {
      return false;
    }

    const ft = dayjs.unix(first.ts);
    const ct = dayjs.unix(cur.ts);

    if (ft.year() == ct.year() && ft.month() == ct.month() && ft.date() == ct.date()) {
      if (ft.hour() < 8) {
        return ct.hour() < 8;
      } else if (ft.hour() < 16) {
        return ct.hour() >= 8 && ct.hour() < 16;
      } else {
        return ct.hour() >= 16;
      }
    }

    return false;
  });
}

/**
 * chgCandles4H -
 * @param {Array} candles - candles
 * @return {Array} newCandles - newCandles
 */
function chgCandles4H(candles) {
  return chgCandles(candles, (first, cur) => {
    if (first == undefined) {
      return false;
    }

    const ft = dayjs.unix(first.ts);
    const ct = dayjs.unix(cur.ts);

    if (ft.year() == ct.year() && ft.month() == ct.month() && ft.date() == ct.date()) {
      if (ft.hour() < 4) {
        return ct.hour() < 4;
      } else if (ft.hour() < 8) {
        return ct.hour() >= 4 && ct.hour() < 8;
      } else if (ft.hour() < 12) {
        return ct.hour() >= 8 && ct.hour() < 12;
      } else if (ft.hour() < 16) {
        return ct.hour() >= 12 && ct.hour() < 16;
      } else if (ft.hour() < 20) {
        return ct.hour() >= 16 && ct.hour() < 20;
      } else {
        return ct.hour() >= 20;
      }
    }

    return false;
  });
}

exports.chgCandles = chgCandles;
exports.chgCandles12H = chgCandles12H;
exports.chgCandles8H = chgCandles8H;
exports.chgCandles4H = chgCandles4H;

const {chgCandles12H, chgCandles8H, chgCandles4H} = require('../../candlesutils');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);


/**
 * bitmex12h - 1h to 12h
 * @param {Object} client - TradingDB2Client
 * @param {Object} cfg - configuation
 * @param {Object} task - task
 * @param {string} curtag - curtag
 * @return {Array} newcandles - newcandles
 */
async function bitmex12h(client, cfg, task, curtag) {
  const tsStart = dayjs.utc(curtag, 'YYYYMM').unix();
  let tsEnd = -1;
  let strday = dayjs.utc(curtag, 'YYYYMM').format('YYYYMMDD');

  while (true) {
    const curday = dayjs.utc(strday, 'YYYYMMDD').add(1, 'day');
    if (curday.format('YYYYMM') != curtag) {
      tsEnd = curday.unix();

      break;
    }

    strday = curday.format('YYYYMMDD');
  }

  const ret = await client.getCandles(task.market, task.symbol + '|1h', '', tsStart, tsEnd);
  if (Array.isArray(ret) && ret[0] == undefined && Array.isArray(ret[1])) {
    const candles = [];
    for (let i = 0; i < ret[1].length; ++i) {
      if (ret[1][i].ts >= tsStart && ret[1][i].ts < tsEnd) {
        candles.push(ret[1][i]);
      }
    }

    return chgCandles12H(candles);
  }

  return undefined;
}

/**
 * bitmex8h - 1h to 8h
 * @param {Object} client - TradingDB2Client
 * @param {Object} cfg - configuation
 * @param {Object} task - task
 * @param {string} curtag - curtag
 * @return {Array} newcandles - newcandles
 */
async function bitmex8h(client, cfg, task, curtag) {
  const tsStart = dayjs.utc(curtag, 'YYYYMM').unix();
  let tsEnd = -1;
  let strday = dayjs.utc(curtag, 'YYYYMM').format('YYYYMMDD');

  while (true) {
    const curday = dayjs.utc(strday, 'YYYYMMDD').add(1, 'day');
    if (curday.format('YYYYMM') != curtag) {
      tsEnd = curday.unix();

      break;
    }

    strday = curday.format('YYYYMMDD');
  }

  const ret = await client.getCandles(task.market, task.symbol + '|1h', '', tsStart, tsEnd);
  if (Array.isArray(ret) && ret[0] == undefined && Array.isArray(ret[1])) {
    const candles = [];
    for (let i = 0; i < ret[1].length; ++i) {
      if (ret[1][i].ts >= tsStart && ret[1][i].ts < tsEnd) {
        candles.push(ret[1][i]);
      }
    }

    return chgCandles8H(candles);
  }

  return undefined;
}

/**
 * bitmex4h - 1h to 4h
 * @param {Object} client - TradingDB2Client
 * @param {Object} cfg - configuation
 * @param {Object} task - task
 * @param {string} curtag - curtag
 * @return {Array} newcandles - newcandles
 */
async function bitmex4h(client, cfg, task, curtag) {
  const tsStart = dayjs.utc(curtag, 'YYYYMM').unix();
  let tsEnd = -1;
  let strday = dayjs.utc(curtag, 'YYYYMM').format('YYYYMMDD');

  while (true) {
    const curday = dayjs.utc(strday, 'YYYYMMDD').add(1, 'day');
    if (curday.format('YYYYMM') != curtag) {
      tsEnd = curday.unix();

      break;
    }

    strday = curday.format('YYYYMMDD');
  }

  const ret = await client.getCandles(task.market, task.symbol + '|1h', '', tsStart, tsEnd);
  if (Array.isArray(ret) && ret[0] == undefined && Array.isArray(ret[1])) {
    const candles = [];
    for (let i = 0; i < ret[1].length; ++i) {
      if (ret[1][i].ts >= tsStart && ret[1][i].ts < tsEnd) {
        candles.push(ret[1][i]);
      }
    }

    return chgCandles4H(candles);
  }

  return undefined;
}

exports.bitmex12h = bitmex12h;
exports.bitmex8h = bitmex8h;
exports.bitmex4h = bitmex4h;

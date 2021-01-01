const {chgCandles12H, chgCandles8H} = require('../../candlesutils');

/**
 * bitmex12h - 1h to 12h
 * @param {Object} client - TradingDB2Client
 * @param {Object} cfg - configuation
 * @param {Object} task - task
 * @return {Array} newcandles - newcandles
 */
async function bitmex12h(client, cfg, task) {
  const ret = await client.getCandles(task.market, symbol + '|1h', '');
  if (Array.isArray(ret) && ret[0] != undefined && Array.isArray(ret[1])) {
    return chgCandles12H(ret[1]);
  }

  return undefined;
}

/**
 * bitmex8h - 1h to 8h
 * @param {Object} client - TradingDB2Client
 * @param {Object} cfg - configuation
 * @param {Object} task - task
 * @return {Array} newcandles - newcandles
 */
async function bitmex8h(client, cfg, task) {
  const ret = await client.getCandles(task.market, symbol + '|1h', '');
  if (Array.isArray(ret) && ret[0] != undefined && Array.isArray(ret[1])) {
    return chgCandles8H(ret[1]);
  }

  return undefined;
}

exports.bitmex12h = bitmex12h;
exports.bitmex8h = bitmex8h;

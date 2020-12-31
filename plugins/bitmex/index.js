const {getBucketedTradesMonth, getBucketedTradesYear} = require('./utils');
// const {TradingDB2Client} = require('../../tradingdb2.client');
const {string2timestamp} = require('../../utils');

// XBTH20 09-03
// XBTM20 12-06
// XBTU20 03-09
// XBTZ20 06-12

/**
 * start - start bitmex
 * @param {Object} client - TradingDB2Client
 * @param {Object} cfg - configuation
 * @param {Object} task - task
 * @return {Promise} Promise - then(response) catch(err)
 */
function start(client, cfg, task) {
  return new Promise(async (resolve, reject) => {
    try {
      // const client = new TradingDB2Client(
      //     cfg.tradingdb2servaddr,
      //     cfg.tradingdb2token,
      // );

      for (let ii = 0; ii < task.tags.length; ++ii) {
        const curtag = task.tags[ii];
        const lst = [];

        if (task.timetype == '1d') {
          const candles = await getBucketedTradesYear(
              task.symbol,
              curtag,
          );

          console.log('getBucketedTradesYear ok.', candles.length);

          // timestamp: '2020-01-01T01:39:00.000Z',
          // symbol: 'XBTUSD',
          // open: 7188.5,
          // high: 7193,
          // low: 7188,
          // close: 7192.5,
          // trades: 436,
          // volume: 576388,
          // vwap: 7190.6234,
          // lastSize: 35158,
          // turnover: 8015949792,
          // homeNotional: 80.15949791999999,
          // foreignNotional: 576388,

          // int64 ts = 1;
          // int64 open = 2;
          // int64 close = 3;
          // int64 high = 4;
          // int64 low = 5;
          // int64 volume = 6;
          // int64 openInterest = 7;
          // int64 trades = 8;
          // double vwap = 9;
          // int64 lastSize = 10;
          // int64 turnover = 11;
          // double homeNotional = 12;
          // double foreignNotional = 13;

          for (let j = 0; j < candles.length; ++j) {
            lst.push({
              ts: string2timestamp(candles[j].timestamp),
              open: Math.floor(candles[j].open * 100),
              close: Math.floor(candles[j].close * 100),
              high: Math.floor(candles[j].high * 100),
              low: Math.floor(candles[j].low * 100),
              trades: Math.floor(candles[j].trades),
              volume: Math.floor(candles[j].volume),
              vwap: candles[j].vwap,
              lastSize: Math.floor(candles[j].lastSize),
              turnover: Math.floor(candles[j].turnover),
              homeNotional: candles[j].homeNotional,
              foreignNotional: candles[j].foreignNotional,
            });
          }

          console.log('candles ok.', lst.length);
        } else {
          const candles = await getBucketedTradesMonth(
              task.symbol,
              curtag,
              task.timetype,
          );

          console.log('getBucketedTradesMonth ok.', candles.length);

          // timestamp: '2020-01-01T01:39:00.000Z',
          // symbol: 'XBTUSD',
          // open: 7188.5,
          // high: 7193,
          // low: 7188,
          // close: 7192.5,
          // trades: 436,
          // volume: 576388,
          // vwap: 7190.6234,
          // lastSize: 35158,
          // turnover: 8015949792,
          // homeNotional: 80.15949791999999,
          // foreignNotional: 576388,

          // int64 ts = 1;
          // int64 open = 2;
          // int64 close = 3;
          // int64 high = 4;
          // int64 low = 5;
          // int64 volume = 6;
          // int64 openInterest = 7;
          // int64 trades = 8;
          // double vwap = 9;
          // int64 lastSize = 10;
          // int64 turnover = 11;
          // double homeNotional = 12;
          // double foreignNotional = 13;

          for (let j = 0; j < candles.length; ++j) {
            lst.push({
              ts: string2timestamp(candles[j].timestamp),
              open: Math.floor(candles[j].open * 100),
              close: Math.floor(candles[j].close * 100),
              high: Math.floor(candles[j].high * 100),
              low: Math.floor(candles[j].low * 100),
              trades: Math.floor(candles[j].trades),
              volume: Math.floor(candles[j].volume),
              vwap: candles[j].vwap,
              lastSize: Math.floor(candles[j].lastSize),
              turnover: Math.floor(candles[j].turnover),
              homeNotional: candles[j].homeNotional,
              foreignNotional: candles[j].foreignNotional,
            });
          }

          console.log('candles ok.', lst.length);
        }

        const [err, res] = await client.updCandles(
            task.market,
            task.symbol + '|' + task.timetype,
            curtag,
            lst,
            4096,
        );

        if (err) {
          reject(err);

          return;
        }

        console.log(
            'updCandles',
            task.market,
            task.symbol,
            curtag,
            candles.length,
            res.getLengthok(),
        );
      }

      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

exports.start = start;

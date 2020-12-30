const {getBucketedTradesMonth} = require('./utils');
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

      for (let i = 0; i < task.tags.length; ++i) {
        const candles = await getBucketedTradesMonth(
            task.symbol,
            task.tags[i],
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

        const lst = [];
        for (let i = 0; i < candles.length; ++i) {
          lst.push({
            ts: string2timestamp(candles[i].timestamp),
            open: Math.floor(candles[i].open * 100),
            close: Math.floor(candles[i].close * 100),
            high: Math.floor(candles[i].high * 100),
            low: Math.floor(candles[i].low * 100),
            trades: Math.floor(candles[i].trades),
            volume: Math.floor(candles[i].volume),
            vwap: candles[i].vwap,
            lastSize: Math.floor(candles[i].lastSize),
            turnover: Math.floor(candles[i].turnover),
            homeNotional: candles[i].homeNotional,
            foreignNotional: candles[i].foreignNotional,
          });
        }

        console.log('candles ok.', lst.length);

        const curtag = task.tags[i];
        // if (task.timetype != '1m') {
        //   curtag = task.tags[i] + '_' + task.timetype;
        // }

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

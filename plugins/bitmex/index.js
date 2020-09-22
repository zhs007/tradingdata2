const {getBucketedTradesMonth} = require('./utils');
const {TradingDB2Client} = require('../../tradingdb2.client');

/**
 * start - start bitmex
 * @param {Object} cfg - config
 * @return {Promise} Promise - then(response) catch(err)
 */
function start(cfg) {
  return new Promise(async (resolve, reject) => {
    try {
      const client = new TradingDB2Client(
          cfg.tradingdb2servaddr,
          cfg.tradingdb2token,
      );

      for (let i = 0; i < cfg.tags.length; ++i) {
        const candles = await getBucketedTradesMonth(cfg.symbol, cfg.tags[i]);
        const [err, res] = client.updCandles(
            cfg.market,
            cfg.symbol,
            cfg.tags[i],
            candles,
            4096,
        );

        if (err) {
          reject(err);

          return;
        }

        console.log(
            'updCandles',
            cfg.market,
            cfg.symbol,
            cfg.tags[i],
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

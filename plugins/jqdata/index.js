const {login, getAllSecurities, getQueryCount, getPricePeriod} = require('./utils');

/**
 * start - start bitmex
 * @param {Object} client - TradingDB2Client
 * @param {Object} task - task
 * @return {Promise} Promise - then(response) catch(err)
 */
function start(client, task) {
  return new Promise(async (resolve, reject) => {
    try {
      const retLogin = await login(cfg);
      if (typeof retLogin != 'string') {
        reject(retLogin);

        return;
      }

      for (let i = 0; i < task.tags.length; ++i) {
        const candles = await getPricePeriod(
            retLogin,
            task.symbol, // It's like 000300.XSHG
            task.timetype, // It's like 1m, 1d
            task.tags[i].toString() + '-01-01', // It's like 2010
            task.tags[i].toString() + '-12-31', // It's like 2010
        );

        console.log('getPricePeriod ok.', candles.length);

        // "date":"2020-12-22",
        // "open":"5034.9800",
        // "close":"4964.7700",
        // "high":"5055.1300",
        // "low":"4960.9500",
        // "volume":"16234497000",
        // "money":"326758817663.3000",
        // "paused":"0",
        // "high_limit":"5551.5200",
        // "low_limit":"4542.1600",
        // "avg":"5018.1900",
        // "pre_close":"5046.8400",

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
            task.symbol + ':' + task.timetype,
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

exports.login = login;
exports.getAllSecurities = getAllSecurities;
exports.getQueryCount = getQueryCount;
exports.getPricePeriod = getPricePeriod;

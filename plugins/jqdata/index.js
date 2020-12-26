const {login, getAllSecurities, getQueryCount, getPricePeriod, parseDate} = require('./utils');
const {logger} = require('../../logger');

/**
 * parseSymbol - parse symbol
 * @param {string} str - str
 * @return {string} symbol - symbol for trdb2
 */
function parseSymbol(str) {
  return str.replace('.', '_');
}

/**
 * isValidSymbol - symbol >= startsymbol && symbol <= endsymbol
 * @param {string} symbol - symbol
 * @param {object} task - task
 * @return {boolean} isvalid - is a valid symbol
 */
function isValidSymbol(symbol, task) {
  try {
    const arr = symbol.split('.');
    if (arr.length > 0) {
      const code = parseInt(arr[0]);
      return code >= task.startsymbol && code <= task.endsymbol;
    }
  } catch (err) {
    logger.error('isValidSymbol ', err);
  }

  return false;
}

/**
 * startCandles - start candles
 * @param {Object} client - TradingDB2Client
 * @param {Object} cfg - configuation
 * @param {string} token - token
 * @param {string} jqsymbol - jqdata symbol
 * @param {Object} task - task
 * @return {error} ret - error
 */
async function startCandles(client, cfg, token, jqsymbol, task) {
  for (let i = 0; i < task.tags.length; ++i) {
    const candles = await getPricePeriod(
        token,
        jqsymbol, // It's like 000300.XSHG
        task.timetype, // It's like 1m, 1d
        task.tags[i].toString() + '-01-01', // It's like 2010
        task.tags[i].toString() + '-12-31', // It's like 2010
    );

    if (candles) {
      // console.log('getPricePeriod ok.', candles.length);

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

      // int64 ts = 1;                   // UTC时间戳
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
      // int64 totalMoney = 14;          // 总金额
      // bool paused = 15;               // 是否停盘
      // int64 highLimit = 16;           // 上涨限制
      // int64 lowLimit = 17;            // 下跌限制
      // int64 avg = 18;                 // 平均价格
      // int64 preClose = 19;            // 前一天的close价格

      const lst = [];
      for (let i = 0; i < candles.length; ++i) {
        lst.push({
          ts: parseDate(candles[i]['date']),
          open: Math.floor(parseFloat(candles[i]['open']) * 10000),
          close: Math.floor(parseFloat(candles[i]['close']) * 10000),
          high: Math.floor(parseFloat(candles[i]['high']) * 10000),
          low: Math.floor(parseFloat(candles[i]['low']) * 10000),
          volume: parseInt(candles[i]['volume']),
          totalMoney: Math.floor(parseFloat(candles[i]['money']) * 10000),
          paused: candles[i]['money'] != '0',
          highLimit: Math.floor(parseFloat(candles[i]['high_limit']) * 10000),
          lowLimit: Math.floor(parseFloat(candles[i]['low_limit']) * 10000),
          avg: Math.floor(parseFloat(candles[i]['avg']) * 10000),
          preClose: Math.floor(parseFloat(candles[i]['pre_close']) * 10000),
        });
      }

      console.log('candles ok.', lst.length);

      const curtag = task.tags[i];

      const symbol = parseSymbol(jqsymbol);

      const [err, res] = await client.updCandles(
          task.market,
          symbol + ':' + task.timetype,
          curtag,
          lst,
          4096,
      );

      if (err) {
        return err;
      }

      console.log(
          'updCandles',
          task.market,
          symbol,
          curtag,
          candles.length,
          res.getLengthok(),
      );
    } else {
      console.log('getPricePeriod nodata.', {tag: task.tags[i]});
    }
  }

  return undefined;
}

/**
 * start - start jqdata
 * @param {Object} client - TradingDB2Client
 * @param {Object} cfg - configuation
 * @param {Object} task - task
 * @return {Promise} Promise - then(response) catch(err)
 */
function start(client, cfg, task) {
  return new Promise(async (resolve, reject) => {
    try {
      const retLogin = await login(cfg);
      if (typeof retLogin != 'string') {
        reject(retLogin);

        return;
      }

      if (task.symbol == 'index') {
        const lst = await getAllSecurities(retLogin, 'index');
        for (let i = 0; i < lst.length; ++i) {
          if (isValidSymbol(lst[i]['code'], task)) {
            const err = await startCandles(client, cfg, retLogin, lst[i]['code'], task);
            if (err) {
              reject(err);

              return;
            }
          }
        }
      } else {
        const err = await startCandles(client, cfg, retLogin, task.symbol, task);
        if (err) {
          reject(err);

          return;
        }
      }

      // for (let i = 0; i < task.tags.length; ++i) {
      //   const candles = await getPricePeriod(
      //       retLogin,
      //       task.symbol, // It's like 000300.XSHG
      //       task.timetype, // It's like 1m, 1d
      //       task.tags[i].toString() + '-01-01', // It's like 2010
      //       task.tags[i].toString() + '-12-31', // It's like 2010
      //   );

      //   console.log('getPricePeriod ok.', candles.length);

      //   // "date":"2020-12-22",
      //   // "open":"5034.9800",
      //   // "close":"4964.7700",
      //   // "high":"5055.1300",
      //   // "low":"4960.9500",
      //   // "volume":"16234497000",
      //   // "money":"326758817663.3000",
      //   // "paused":"0",
      //   // "high_limit":"5551.5200",
      //   // "low_limit":"4542.1600",
      //   // "avg":"5018.1900",
      //   // "pre_close":"5046.8400",

      //   // int64 ts = 1;                   // UTC时间戳
      //   // int64 open = 2;
      //   // int64 close = 3;
      //   // int64 high = 4;
      //   // int64 low = 5;
      //   // int64 volume = 6;
      //   // int64 openInterest = 7;
      //   // int64 trades = 8;
      //   // double vwap = 9;
      //   // int64 lastSize = 10;
      //   // int64 turnover = 11;
      //   // double homeNotional = 12;
      //   // double foreignNotional = 13;
      //   // int64 totalMoney = 14;          // 总金额
      //   // bool paused = 15;               // 是否停盘
      //   // int64 highLimit = 16;           // 上涨限制
      //   // int64 lowLimit = 17;            // 下跌限制
      //   // int64 avg = 18;                 // 平均价格
      //   // int64 preClose = 19;            // 前一天的close价格

      //   const lst = [];
      //   for (let i = 0; i < candles.length; ++i) {
      //     lst.push({
      //       ts: parseDate(candles[i]['date']),
      //       open: Math.floor(parseFloat(candles[i]['open']) * 10000),
      //       close: Math.floor(parseFloat(candles[i]['close']) * 10000),
      //       high: Math.floor(parseFloat(candles[i]['high']) * 10000),
      //       low: Math.floor(parseFloat(candles[i]['low']) * 10000),
      //       volume: parseInt(candles[i]['volume']),
      //       totalMoney: Math.floor(parseFloat(candles[i]['money']) * 10000),
      //       paused: candles[i]['money'] != '0',
      //       highLimit: Math.floor(parseFloat(candles[i]['high_limit']) * 10000),
      //       lowLimit: Math.floor(parseFloat(candles[i]['low_limit']) * 10000),
      //       avg: Math.floor(parseFloat(candles[i]['avg']) * 10000),
      //       preClose: Math.floor(parseFloat(candles[i]['pre_close']) * 10000),
      //     });
      //   }

      //   console.log('candles ok.', lst.length);

      //   const curtag = task.tags[i];
      //   // if (task.timetype != '1m') {
      //   //   curtag = task.tags[i] + '_' + task.timetype;
      //   // }

      //   const symbol = parseSymbol(task.symbol);

      //   const [err, res] = await client.updCandles(
      //       task.market,
      //       symbol + ':' + task.timetype,
      //       curtag,
      //       lst,
      //       4096,
      //   );

      //   if (err) {
      //     reject(err);

      //     return;
      //   }

      //   console.log(
      //       'updCandles',
      //       task.market,
      //       symbol,
      //       curtag,
      //       candles.length,
      //       res.getLengthok(),
      //   );
      // }

      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * checkCandle - check candle
 * @param {Object} candles - candles
 * @param {Object} candle - candle
 * @return {boolean} ret - is valid
 */
function checkCandle(candles, candle) {
  for (let i = 0; i < candles.length; ++i) {
    if (candles[i].ts == candle.ts) {
      if (candles[i].open != candle.open) {
        return false;
      }

      if (candles[i].close != candle.close) {
        return false;
      }

      if (candles[i].high != candle.high) {
        return false;
      }

      if (candles[i].low != candle.low) {
        return false;
      }

      if (candles[i].volume != candle.volume) {
        return false;
      }

      if (candles[i].totalMoney != candle.totalMoney) {
        return false;
      }

      if (candles[i].paused != candle.paused) {
        return false;
      }

      if (candles[i].highLimit != candle.highLimit) {
        return false;
      }

      if (candles[i].lowLimit != candle.lowLimit) {
        return false;
      }

      if (candles[i].avg != candle.avg) {
        return false;
      }

      if (candles[i].preClose != candle.preClose) {
        return false;
      }

      return true;
    }
  }

  return false;
}

/**
 * checkTask - check task
 * @param {Object} client - TradingDB2Client
 * @param {Object} cfg - configuation
 * @param {Object} task - task
 * @return {Promise} Promise - then(response) catch(err)
 */
async function checkTask(client, cfg, task) {
  const symbol = parseSymbol(task.symbol);

  const ret = await client.getCandles(task.market, symbol, '');
  if (Array.isArray(ret) && ret[0] != undefined && Array.isArray(ret[1])) {
    let nums = 0;

    for (let i = 0; i < task.tags.length; ++i) {
      const candles = await getPricePeriod(
          retLogin,
          task.symbol, // It's like 000300.XSHG
          task.timetype, // It's like 1m, 1d
          task.tags[i].toString() + '-01-01', // It's like 2010
          task.tags[i].toString() + '-12-31', // It's like 2010
      );

      for (let j = 0; j < candles.length; ++j) {
        const cc = {
          ts: parseDate(candles[j]['date']),
          open: Math.floor(parseFloat(candles[j]['open']) * 10000),
          close: Math.floor(parseFloat(candles[j]['close']) * 10000),
          high: Math.floor(parseFloat(candles[j]['high']) * 10000),
          low: Math.floor(parseFloat(candles[j]['low']) * 10000),
          volume: parseInt(candles[j]['volume']),
          totalMoney: Math.floor(parseFloat(candles[j]['money']) * 10000),
          paused: candles[j]['money'] != '0',
          highLimit: Math.floor(parseFloat(candles[j]['high_limit']) * 10000),
          lowLimit: Math.floor(parseFloat(candles[j]['low_limit']) * 10000),
          avg: Math.floor(parseFloat(candles[j]['avg']) * 10000),
          preClose: Math.floor(parseFloat(candles[j]['pre_close']) * 10000),
        };

        if (!checkCandle(ret[1], cc)) {
          logger.error('jqdata.checkTask false', cc);

          return false;
        }

        nums++;
      }
    }

    if (nums != ret[1].length) {
      logger.error('jqdata.checkTask nums fail', {nums: nums, candles: ret[1].lenmgth});

      return false;
    }
  }

  return true;
}

exports.start = start;
exports.checkTask = checkTask;

exports.login = login;
exports.getAllSecurities = getAllSecurities;
exports.getQueryCount = getQueryCount;
exports.getPricePeriod = getPricePeriod;

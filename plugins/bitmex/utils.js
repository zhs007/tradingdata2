const {request} = require('../../request');
const dayjs = require('dayjs');
const {sleep} = require('../../utils');

// https://www.bitmex.com/api/explorer/

const API_URL = 'https://www.bitmex.com/api/v1';

/**
 * getBucketedTrades - Get previous trades in time buckets
 * @param {Object} params - {}
 * @return {Promise} Promise - then(response) catch(err)
 */
function getBucketedTrades(params) {
  return request(
      API_URL + '/trade/bucketed',
      {Accept: 'application/json'},
      params,
  );
}

/**
 * getBucketedTradesDay - Get previous trades in time buckets
 * @param {string} symbol - symbol
 * @param {string} day - day, it likes 20200101
 * @param {string} timetype - timetype, it likes 1m, 5m
 * @return {Promise} Promise - then(trades) catch(err)
 */
function getBucketedTradesDay(symbol, day, timetype) {
  return new Promise(async (resolve, reject) => {
    try {
      const stt = dayjs(day, 'YYYYMMDD').format('YYYY-MM-DD');
      const ent = dayjs(day, 'YYYYMMDD').add(1, 'day').format('YYYY-MM-DD');

      const candles = [];
      while (true) {
        const res = await getBucketedTrades({
          binSize: timetype,
          partial: false,
          symbol: symbol,
          count: 1000,
          start: candles.length,
          reverse: false,
          startTime: stt,
          endTime: ent,
        });

        if (res && res.data && Array.isArray(res.data)) {
          for (let i = 0; i < res.data.length; ++i) {
            candles.push(res.data[i]);
          }
        }

        await sleep(1500);

        if (res.data.length == 0) {
          break;
        }
      }

      const lst = [];
      for (let i = 0; i < candles.length; ++i) {
        if (dayjs(candles[i].timestamp).format('YYYYMMDD') == day) {
          lst.push(candles[i]);
        }
      }

      resolve(lst);
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * getBucketedTradesMonth - Get previous trades in time buckets
 * @param {string} symbol - symbol
 * @param {string} month - month, it likes 202001
 * @param {string} timetype - timetype, it likes 1m, 5m
 * @return {Promise} Promise - then(trades) catch(err)
 */
function getBucketedTradesMonth(symbol, month, timetype) {
  return new Promise(async (resolve, reject) => {
    try {
      let strday = dayjs(month, 'YYYYMM').format('YYYYMMDD');

      const candles = [];
      while (true) {
        const lst = await getBucketedTradesDay(symbol, strday, timetype);
        for (let i = 0; i < lst.length; ++i) {
          candles.push(lst[i]);
        }

        const curday = dayjs(strday, 'YYYYMMDD').add(1, 'day');
        if (curday.format('YYYYMM') != month) {
          break;
        }

        strday = curday.format('YYYYMMDD');
      }

      resolve(candles);
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * getBucketedTradesYear - Get previous trades in time buckets
 * @param {string} symbol - symbol
 * @param {string} year - year, it likes 2020
 * @return {Promise} Promise - then(trades) catch(err)
 */
function getBucketedTradesYear(symbol, year) {
  return new Promise(async (resolve, reject) => {
    try {
      const stt = year + '-01-01';
      const ent = year + '-12-31';

      const candles = [];
      while (true) {
        const res = await getBucketedTrades({
          binSize: '1d',
          partial: false,
          symbol: symbol,
          count: 1000,
          start: candles.length,
          reverse: false,
          startTime: stt,
          endTime: ent,
        });

        if (res && res.data && Array.isArray(res.data)) {
          for (let i = 0; i < res.data.length; ++i) {
            candles.push(res.data[i]);
          }
        }

        await sleep(1500);

        if (res.data.length == 0) {
          break;
        }
      }

      const lst = [];
      for (let i = 0; i < candles.length; ++i) {
        if (dayjs(candles[i].timestamp).format('YYYY') == year) {
          lst.push(candles[i]);
        }
      }

      resolve(lst);
    } catch (err) {
      reject(err);
    }
  });
}

exports.getBucketedTrades = getBucketedTrades;
exports.getBucketedTradesDay = getBucketedTradesDay;
exports.getBucketedTradesMonth = getBucketedTradesMonth;
exports.getBucketedTradesYear = getBucketedTradesYear;

const {requestEx} = require('../../request');
const {logger} = require('../../logger');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);

// dayjs.extend(utc);
// dayjs.extend(timezone);
// const {sleep} = require('../../utils');

// https://dataapi.joinquant.com/docs

const API_URL = 'https://dataapi.joinquant.com/apis';
const TIMEZONE = 'Asia/Shanghai';

/**
 * login - login jqdata
 * @param {Object} cfg - config
 * @return {string | error} ret - token or error
 */
async function login(cfg) {
  try {
    const data = {
      'method': 'get_current_token',
      'mob': cfg.jqdata.username.toString(),
      'pwd': cfg.jqdata.password.toString(),
    };

    const ret = await requestEx(
        API_URL,
        'post',
        undefined,
        undefined,
        data,
        'text',
    );

    logger.info('jqdata.login ok!', {token: ret.data});

    return ret.data;
  } catch (err) {
    logger.error('jqdata.login', err);

    return err;
  }
}

/**
 * getAllSecurities - get_all_securities
 * @param {string} token - token
 * @param {string} code - code
 * @return {Array | error} ret - ret or error
 */
async function getAllSecurities(token, code) {
  try {
    const data = {
      'method': 'get_all_securities',
      'token': token,
      'code': code,
    };

    const ret = await requestEx(
        API_URL,
        'post',
        undefined,
        undefined,
        data,
        'text',
    );

    logger.info('jqdata.getAllSecurities ok!', {ret: ret.data});

    return parseData(ret.data);
  } catch (err) {
    logger.error('jqdata.getAllSecurities', err);

    return err;
  }
}

/**
 * getQueryCount - get_query_count
 * @param {string} token - token
 * @return {string | error} ret - ret or error
 */
async function getQueryCount(token) {
  try {
    const data = {
      'method': 'get_query_count',
      'token': token,
    };

    const ret = await requestEx(
        API_URL,
        'post',
        undefined,
        undefined,
        data,
        'text',
    );

    logger.info('jqdata.getQueryCount ok!', {ret: ret.data});

    return ret.data;
  } catch (err) {
    logger.error('jqdata.getQueryCount', err);

    return err;
  }
}

/**
 * getPricePeriod - get_price_period
 * @param {string} token - token
 * @param {string} code - code
 * @param {string} unit - 1m, 5m,1d
 * @param {string} startDate - 2018-07-03
 * @param {string} endDate - 2018-07-03
 * @return {Array | error} ret - ret or error
 */
async function getPricePeriod(token, code, unit, startDate, endDate) {
  try {
    const data = {
      'method': 'get_price_period',
      'token': token,
      'code': code,
      'unit': unit,
      'date': startDate,
      'end_date': endDate,
    };

    const ret = await requestEx(
        API_URL,
        'post',
        undefined,
        undefined,
        data,
        'text',
    );

    logger.info('jqdata.getPricePeriod ok!', {ret: ret.data});

    return parseData(ret.data);
  } catch (err) {
    logger.error('jqdata.getPricePeriod', err);

    return err;
  }
}

/**
 * parseData - parse data
 * @param {string} str - str
 * @return {Array} lst - list of object
 */
function parseData(str) {
  const arr = str.split('\n');
  if (arr.length <= 1) {
    return undefined;
  }

  const harr = arr[0].split(',');
  const lst = [];

  for (let i = 1; i < arr.length; ++i) {
    const co = {};

    const carr = arr[i].split(',');
    for (let j = 0; j < harr.length && j < carr.length; ++j) {
      co[harr[j]] = carr[j];
    }

    lst.push(co);
  }

  return lst;
}

/**
 * parseDate - parse date
 * @param {string} str - str
 * @return {int} ts - timestamp
 */
function parseDate(str) {
  return dayjs.tz(str, TIMEZONE).unix() - 8 * 60 * 60;
}

exports.login = login;
exports.getAllSecurities = getAllSecurities;
exports.getQueryCount = getQueryCount;
exports.getPricePeriod = getPricePeriod;
exports.parseDate = parseDate;

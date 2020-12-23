const {requestEx} = require('../../request');
const {logger} = require('../../logger');
// const dayjs = require('dayjs');
// const {sleep} = require('../../utils');

const API_URL = 'https://dataapi.joinquant.com/apis';

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

exports.login = login;
exports.getAllSecurities = getAllSecurities;

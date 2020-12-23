const {requestPost} = require('../../request');
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
      'mob': cfg.jqdata.username,
      'pwd': cfg.jqdata.password,
    };

    const ret = await requestPost(
        API_URL,
        {Accept: 'application/json'},
        data,
    );

    logger.info('jqdata.login ok!', {token: ret});

    return ret;
  } catch (err) {
    logger.error('jqdata.login', err);

    return err;
  }
}

/**
 * getAllSecurities - get_all_securities
 * @param {string} token - token
 * @param {string} code - code
 * @return {Promise} Promise - then(response) catch(err)
 */
async function getAllSecurities(token, code) {
  try {
    const data = {
      'method': 'get_all_securities',
      'token': token,
      'code': code,
    };

    const ret = await requestPost(
        API_URL,
        {Accept: 'application/json'},
        data,
    );

    logger.info('jqdata.getAllSecurities ok!', {ret: ret});

    return ret;
  } catch (err) {
    logger.error('jqdata.getAllSecurities', err);

    return err;
  }
}

exports.login = login;
exports.getAllSecurities = getAllSecurities;

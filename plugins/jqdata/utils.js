const {request} = require('../../request');
const dayjs = require('dayjs');
const {sleep} = require('../../utils');

const API_URL = 'https://dataapi.joinquant.com/apis';

/**
 * login - login jqdata
 * @param {Object} cfg - config
 * @return {Promise} Promise - then(response) catch(err)
 */
function login(cfg) {
  return request(
      API_URL + '/trade/bucketed',
      {Accept: 'application/json'},
      params,
  );
}

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

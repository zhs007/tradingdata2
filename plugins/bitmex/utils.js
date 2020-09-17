const {request} = require('../../request');
// const {awaitWrap} = require('../../utils');

const API_URL = 'https://www.bitmex.com/api/v1';

/**
 * getBucketedTrades - Get previous trades in time buckets
 * @param {Object} params - {}
 * @return {Promise} Promise - then(trades) catch(err)
 */
function getBucketedTrades(params) {
  return request(
      API_URL + '/trade/bucketed',
      {Accept: 'application/json'},
      params,
  );
}

exports.getBucketedTrades = getBucketedTrades;

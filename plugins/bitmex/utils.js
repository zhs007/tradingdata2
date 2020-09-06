const { request } = require("../../request");
const { awaitWrap, buildQueryString } = require("../../utils");

const API_URL = "https://www.bitmex.com/api/v1";

/**
 * getBucketedTrades - Get previous trades in time buckets
 * @param {Object} params - {}
 * @return {Array} {Array} ret - [err, trades]
 */
async function getBucketedTrades(params) {
  const url = buildQueryString(API_URL + "/trade/bucketed", params);
  const [err, ret] = await awaitWrap(
    request(url, { Accept: "application/json" })
  );

  if (err) {
    return [err];
  }

  return [undefined, ret];
}

exports.getBucketedTrades = getBucketedTrades;

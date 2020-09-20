const dayjs = require('dayjs');

/**
 * awaitWrap - this is a wrap for await
 * @param {Promise} promise - Promise
 * @return {Array} ret - [err, data]
 */
async function awaitWrap(promise) {
  return promise
      .then((data) => [undefined, data])
      .catch((err) => [err, undefined]);
}

/**
 * parseJSON -
 * @param {string} str - json string
 * @return {Array | Object} ret - [] | {}
 */
function parseJSON(str) {
  try {
    const jobj = JSON.parse(str);

    return jobj;
  } catch (e) {
    return undefined;
  }
}

/**
 * buildQueryString -
 * @param {string} url - url
 * @param {Object} params - key-value object
 * @return {string} newurl - new url string
 */
function buildQueryString(url, params) {
  let str = '';
  for (const key of Object.keys(params)) {
    if (str.length > 0) {
      str += '&';
    }

    str += key;
    str += '=';
    str += params[key];
  }

  return encodeURI(url + '?' + str);
}

/**
 * string2timestamp -
 * @param {string} str - string
 * @return {int} ts - timestamp
 */
function string2timestamp(str) {
  return dayjs(str).unix();
}

/**
 * sleep -
 * @param {int} ms - microsecond
 * @return {Promise} ret -
 */
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

exports.awaitWrap = awaitWrap;
exports.parseJSON = parseJSON;
exports.buildQueryString = buildQueryString;
exports.string2timestamp = string2timestamp;
exports.sleep = sleep;

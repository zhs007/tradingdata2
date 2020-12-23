const {login, getAllSecurities, getQueryCount, getPricePeriod} = require('../plugins/jqdata');
const {loadConfig, checkConfig} = require('../config');
const {logger} = require('../logger');

const cfg = loadConfig('./cfg/config.yaml');

const err = checkConfig(cfg);
if (err) {
  logger.error('config error', err);

  process.exit();
}

/**
 * start - start
 * @param {Object} cfg - config
 */
async function start(cfg) {
  const token = await login(cfg);

  // const lst = await getAllSecurities(token, 'index');
  // logger.info('getAllSecurities ', lst);

  // const count = await getQueryCount(token);
  // logger.info('getQueryCount ', count);

  const lst = await getPricePeriod(token, '000300.XSHG', '1d', '2020-01-01', '2020-12-31');
  logger.info('getPricePeriod ', lst);
}

start(cfg);

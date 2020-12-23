const {login, getAllSecurities} = require('../plugins/jqdata');
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

  const lst = await getAllSecurities(token, 'index');

  logger.info('start ', lst);
}

start(cfg);

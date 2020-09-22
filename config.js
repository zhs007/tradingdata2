const yaml = require('yaml-js');
const fs = require('fs');

/**
 * load config
 * @param {string} cfgfile - cfgfile
 * @return {object} cfg - config
 */
function loadConfig(cfgfile) {
  const fd = fs.readFileSync(cfgfile);
  if (fd) {
    const cfg = yaml.load(fd);

    return cfg;
  }

  return undefined;
}

/**
 * check config
 * @param {object} cfg - config
 * @return {Error} err - error
 */
function checkConfig(cfg) {
  if (!cfg) {
    return new Error('config undefined');
  }

  if (!cfg.tradingdb2servaddr) {
    return new Error('no config.tradingdb2servaddr');
  }

  if (!cfg.tradingdb2token) {
    return new Error('no config.tradingdb2token');
  }

  if (!cfg.market) {
    return new Error('no config.market');
  }

  if (!cfg.symbol) {
    return new Error('no config.symbol');
  }

  if (!cfg.tags) {
    return new Error('no config.tags');
  }

  if (!Array.isArray(cfg.tags)) {
    return new Error('config.tags is not array');
  }

  return undefined;
}

exports.loadConfig = loadConfig;
exports.checkConfig = checkConfig;

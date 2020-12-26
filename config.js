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

  if (cfg.jqdata) {
    if (!cfg.jqdata.username) {
      return new Error('no config.jqdata.username');
    }

    if (!cfg.jqdata.password) {
      return new Error('no config.jqdata.password');
    }
  }

  if (!cfg.tasks) {
    return new Error('no config.tasks');
  }

  if (!Array.isArray(cfg.tasks)) {
    return new Error('config.tasks is not array');
  }

  for (let i = 0; i < cfg.tasks.length; ++i) {
    const curtask = cfg.tasks[i];

    if (!curtask.market) {
      return new Error('no curtask.market');
    }

    if (!curtask.symbol) {
      return new Error('no curtask.symbol');
    }

    if (!curtask.tags) {
      return new Error('no curtask.tags');
    }

    if (!Array.isArray(curtask.tags)) {
      return new Error('curtask.tags is not array');
    }

    if (!curtask.timetype) {
      return new Error('no curtask.timetype');
    }
  }

  return undefined;
}

exports.loadConfig = loadConfig;
exports.checkConfig = checkConfig;

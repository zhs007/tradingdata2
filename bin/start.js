const {loadConfig, checkConfig} = require('../config');
const {start} = require('../plugins/index');
const {logger} = require('../logger');

const cfg = loadConfig('./cfg/config.yaml');

const err = checkConfig(cfg);
if (err) {
  logger.error('config error', err);

  process.exit();
}

start(cfg)
    .then(() => {
      logger.info('task is ok!');

      process.exit();
    })
    .catch((err) => {
      logger.error('start error', err);

      process.exit();
    });

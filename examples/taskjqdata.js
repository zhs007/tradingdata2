const {loadConfig, checkConfig} = require('../config');
const {start, checkTask} = require('../plugins/index');
const {logger} = require('../logger');

const cfg = loadConfig('./cfg/jqdata.yaml');

const err = checkConfig(cfg);
if (err) {
  logger.error('config error', err);

  process.exit();
}

start(cfg)
    .then(async () => {
      logger.info('task is ok!');

      const isvalid = await checkTask(cfg);
      if (isvalid) {
        logger.info('checkTask is ok!');
      }

      process.exit();
    })
    .catch((err) => {
      logger.error('start error', err);

      process.exit();
    });

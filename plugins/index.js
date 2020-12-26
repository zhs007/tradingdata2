const bitmex = require('./bitmex/index');
const jqdata = require('./jqdata/index');
const {TradingDB2Client} = require('../tradingdb2.client');
const {logger} = require('../logger');

/**
 * start - start
 * @param {Object} cfg - config
 * @return {Promise} Promise - then(response) catch(err)
 */
function start(cfg) {
  return new Promise(async (resolve, reject) => {
    try {
      const client = new TradingDB2Client(
          cfg.tradingdb2servaddr,
          cfg.tradingdb2token,
      );

      for (let i = 0; i < cfg.tasks.length; ++i) {
        const curtask = cfg.tasks[i];
        if (curtask.market == 'bitmex') {
          await bitmex.start(client, cfg, curtask);
        } else if (curtask.market == 'jqdata') {
          await jqdata.start(client, cfg, curtask);
        }
      }

      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * checkTask - checkTask
 * @param {Object} cfg - config
 * @param {Object} task - task
 * @return {boolean} isvalid - isvalid
 */
async function checkTask(cfg, task) {
  const client = new TradingDB2Client(
      cfg.tradingdb2servaddr,
      cfg.tradingdb2token,
  );

  for (let i = 0; i < cfg.tasks.length; ++i) {
    const curtask = cfg.tasks[i];
    if (curtask.market == 'jqdata') {
      const isok = await jqdata.checkTask(client, cfg, curtask);
      if (!isok) {
        logger.error('checkTask', curtask);

        return false;
      }
    }
  }

  return true;
}

exports.start = start;
exports.checkTask = checkTask;

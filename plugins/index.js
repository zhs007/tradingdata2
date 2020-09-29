const bitmex = require('./bitmex/index');
const {TradingDB2Client} = require('../tradingdb2.client');

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
          await bitmex.start(client, curtask);
        }
      }

      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

exports.start = start;

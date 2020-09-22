const {loadConfig, checkConfig} = require('../config');
const {start} = require('../plugins/bitmex/index');

const cfg = loadConfig('./cfg/config.yaml');

const err = checkConfig(cfg);
if (err) {
  console.log('config error', err.message);

  process.exit();
}

start(cfg)
    .then(() => {
      console.log('task is ok!');

      process.exit();
    })
    .catch((err) => {
      console.log('start error', err.message);

      process.exit();
    });

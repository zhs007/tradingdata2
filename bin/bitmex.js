const {getBucketedTrades} = require('../plugins/bitmex/utils');

getBucketedTrades({
  binSize: '1m',
  partial: false,
  symbol: 'XBT',
  count: 3,
  start: 0,
  reverse: false,
  startTime: '2020-01-01T00:00:00.000Z',
  endTime: '2020-01-02T00:00:00.000Z',
})
    .then((trades) => {
      console.log(trades);
      process.exit();
    })
    .catch((err) => {
      console.log(err);
      process.exit();
    });

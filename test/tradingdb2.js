const {TradingDB2Client} = require('../tradingdb2.client');

const client = new TradingDB2Client(
    '0.0.0.0:5002',
    'wzDkh9h2fhfUVuS9jZ8uVbhV3vC5AWX3',
);

client
    .updCandles(
        'bitmex',
        'btx',
        '20200101',
        [
          {ts: 1, open: 101},
          {ts: 2, open: 102},
          {ts: 10, open: 110},
          {ts: 11, open: 111},
        ],
        2,
    )
    .then(([err, req]) => {
      console.log('lengthok ' + req.getLengthok());

      client.getCandles('bitmex', 'btx', '20200101').then(([err, candles]) => {
        console.log('candles ' + candles);
      });
    });

const {
  // getBucketedTrades,
  // getBucketedTradesDay,
  getBucketedTradesMonth,
} = require('../plugins/bitmex/utils');
const {string2timestamp} = require('../utils');
// const {TradingDB2Client} = require('../tradingdb2.client');

// const client = new TradingDB2Client(
//     '0.0.0.0:5002',
//     'wzDkh9h2fhfUVuS9jZ8uVbhV3vC5AWX3',
// );

// client
//     .updCandles(
//         'bitmex',
//         'btx',
//         '20200101',
//         [
//           {ts: 1, open: 101},
//           {ts: 2, open: 102},
//           {ts: 10, open: 110},
//           {ts: 11, open: 111},
//         ],
//         2,
//     )
//     .then(([err, req]) => {
//       console.log('lengthok ' + req.getLengthok());

//       client.getCandles('bitmex', 'btx', '20200101').then(([err, candles]) => {
//         console.log('candles ' + candles);
//       });
//     });

// getBucketedTrades({
//   binSize: '1m',
//   partial: false,
//   symbol: 'XBT',
//   count: 128,
//   start: 0,
//   reverse: false,
//   startTime: '2020-01-01T00:00:00.000Z',
//   endTime: '2020-01-02T00:00:00.000Z',
// })
//     .then((trades) => {
//     // console.log(trades);
//       for (let i = 0; i < trades.data.length; ++i) {
//         trades.data[i].ts = string2timestamp(trades.data[i].timestamp);
//       }

//       console.log(trades.data);

//       // if (trades.data.length < 4096) {
//       console.log('current length is ' + trades.data.length);
//       // }

//       process.exit();
//     })
//     .catch((err) => {
//       console.log(err);
//       process.exit();
//     });

// getBucketedTradesDay('XBTUSD', '20200101')
//     .then((candles) => {
//       for (let i = 0; i < candles.length; ++i) {
//         candles[i].ts = string2timestamp(candles[i].timestamp);
//       }

//       console.log(candles);

//       console.log('current length is ' + candles.length);

//       process.exit();
//     })
//     .catch((err) => {
//       console.log(err);
//       process.exit();
//     });

getBucketedTradesMonth('XBTUSD', '202001')
    .then((candles) => {
      for (let i = 0; i < candles.length; ++i) {
        candles[i].ts = string2timestamp(candles[i].timestamp);
      }

      console.log(candles);

      console.log('current length is ' + candles.length);

      process.exit();
    })
    .catch((err) => {
      console.log(err);
      process.exit();
    });

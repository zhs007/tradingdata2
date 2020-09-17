const axios = require('axios');
const {getBucketedTrades} = require('./utils');
const {awaitWrap} = require('../../utils');

axios;

jest.mock('axios', () => ({
  get: jest.fn().mockImplementation((url, options) => {
    expect(typeof url).toEqual('string');
    expect(typeof options).toEqual('object');

    return new Promise((resolve, reject) => {
      resolve({
        data: [
          {
            timestamp: '2020-01-01T00:00:00.000Z',
            symbol: 'XBTUSD',
            open: 7163,
            high: 7163,
            low: 7162.5,
            close: 7163,
            trades: 24,
            volume: 96868,
            vwap: 7162.8107,
            lastSize: 1500,
            turnover: 1352444161,
            homeNotional: 13.52444161,
            foreignNotional: 96868,
          },
          {
            timestamp: '2020-01-01T00:01:00.000Z',
            symbol: 'XBTUSD',
            open: 7163,
            high: 7163,
            low: 7156,
            close: 7156,
            trades: 2418,
            volume: 2237930,
            vwap: 7159.7337,
            lastSize: 5,
            turnover: 31258718411,
            homeNotional: 312.58718410999995,
            foreignNotional: 2237930,
          },
          {
            timestamp: '2020-01-01T00:02:00.000Z',
            symbol: 'XBTUSD',
            open: 7156,
            high: 7156.5,
            low: 7156,
            close: 7156.5,
            trades: 183,
            volume: 1477103,
            vwap: 7156.6593,
            lastSize: 100000,
            turnover: 20640313412,
            homeNotional: 206.40313412000006,
            foreignNotional: 1477103,
          },
        ],
        status: 200,
      });
    });
  }),
}));

const trades = [
  {
    timestamp: '2020-01-01T00:00:00.000Z',
    symbol: 'XBTUSD',
    open: 7163,
    high: 7163,
    low: 7162.5,
    close: 7163,
    trades: 24,
    volume: 96868,
    vwap: 7162.8107,
    lastSize: 1500,
    turnover: 1352444161,
    homeNotional: 13.52444161,
    foreignNotional: 96868,
  },
  {
    timestamp: '2020-01-01T00:01:00.000Z',
    symbol: 'XBTUSD',
    open: 7163,
    high: 7163,
    low: 7156,
    close: 7156,
    trades: 2418,
    volume: 2237930,
    vwap: 7159.7337,
    lastSize: 5,
    turnover: 31258718411,
    homeNotional: 312.58718410999995,
    foreignNotional: 2237930,
  },
  {
    timestamp: '2020-01-01T00:02:00.000Z',
    symbol: 'XBTUSD',
    open: 7156,
    high: 7156.5,
    low: 7156,
    close: 7156.5,
    trades: 183,
    volume: 1477103,
    vwap: 7156.6593,
    lastSize: 100000,
    turnover: 20640313412,
    homeNotional: 206.40313412000006,
    foreignNotional: 1477103,
  },
];

test('getBucketedTrades', async () => {
  const [err, ret] = await awaitWrap(
      getBucketedTrades({
        binSize: '1m',
        partial: false,
        symbol: 'XBT',
        count: 3,
        start: 0,
        reverse: false,
        startTime: '2020-01-01T00:00:00.000Z',
        endTime: '2020-01-02T00:00:00.000Z',
      }),
  );
  expect(err).toEqual(undefined);
  expect(ret.status).toEqual(200);
  expect(ret.data.length).toEqual(3);

  for (let i = 0; i < trades.length; ++i) {
    expect(ret.data[i].timestamp).toEqual(trades[i].timestamp);
    expect(ret.data[i].symbol).toEqual(trades[i].symbol);
    expect(ret.data[i].open).toEqual(trades[i].open);
    expect(ret.data[i].high).toEqual(trades[i].high);
    expect(ret.data[i].low).toEqual(trades[i].low);
    expect(ret.data[i].close).toEqual(trades[i].close);
    expect(ret.data[i].trades).toEqual(trades[i].trades);
    expect(ret.data[i].volume).toEqual(trades[i].volume);
    expect(ret.data[i].vwap).toEqual(trades[i].vwap);
    expect(ret.data[i].lastSize).toEqual(trades[i].lastSize);
    expect(ret.data[i].turnover).toEqual(trades[i].turnover);
    expect(ret.data[i].homeNotional).toEqual(trades[i].homeNotional);
    expect(ret.data[i].foreignNotional).toEqual(trades[i].foreignNotional);
  }
});

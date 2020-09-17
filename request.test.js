const http = require('http');
const https = require('https');
const axios = require('axios');
const {request} = require('./request');

https;
axios;

jest.mock('http', () => ({
  get: jest.fn().mockImplementation((url, options, callback) => {
    let ondata = undefined;
    let onend = undefined;

    callback({
      statusCode: 200,
      on: (event, cb) => {
        if (event == 'data') {
          ondata = cb;
        }

        if (event == 'end') {
          onend = cb;
        }
      },
    });

    ondata('[123]');
    onend();

    return {on: () => {}};
  }),
  request: jest.fn().mockImplementation((options, callback) => {
    let ondata = undefined;
    let onend = undefined;

    callback({
      statusCode: 200,
      on: (event, cb) => {
        if (event == 'data') {
          ondata = cb;
        }

        if (event == 'end') {
          onend = cb;
        }
      },
    });

    ondata('[123]');
    onend();

    return {on: () => {}};
  }),
}));

jest.mock('https', () => ({
  get: jest.fn().mockImplementation((url, options, callback) => {
    let ondata = undefined;
    let onend = undefined;

    callback({
      statusCode: 200,
      on: (event, cb) => {
        if (event == 'data') {
          ondata = cb;
        }

        if (event == 'end') {
          onend = cb;
        }
      },
    });

    ondata('[123]');
    onend();

    return {on: () => {}};
  }),
  request: jest.fn().mockImplementation((options, callback) => {
    let ondata = undefined;
    let onend = undefined;

    callback({
      statusCode: 200,
      on: (event, cb) => {
        if (event == 'data') {
          ondata = cb;
        }

        if (event == 'end') {
          onend = cb;
        }
      },
    });

    ondata('[123]');
    onend();

    return {on: () => {}};
  }),
}));

jest.mock('axios', () => ({
  get: jest.fn().mockImplementation((url, options) => {
    expect(typeof url).toEqual('string');
    expect(typeof options).toEqual('object');

    return new Promise((resolve, reject) => {
      resolve({data: [123], status: 200});
    });
  }),
}));

test('http.get', async () => {
  http.get('', undefined, (res) => {
    expect(res.statusCode).toEqual(200);

    res.on('data', (data) => {
      expect(data).toEqual('[123]');
    });

    res.on('end', () => {});
  });
});

test('request', async () => {
  const ret = await request('http://127.0.0.1:8080');
  expect(ret.data[0]).toEqual(123);
});

test('request https', async () => {
  const ret = await request('https://127.0.0.1:8080');
  expect(ret.data[0]).toEqual(123);
});

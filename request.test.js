const http = require('http');
const {request} = require('./request');

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

    return {on: () => { }};
  }),
}));

test('http.get', async () => {
  http.get('', undefined, (res) => {
    expect(res.statusCode).toEqual(200);

    res.on('data', (data) => {
      expect(data).toEqual('[123]');
    });

    res.on('end', () => { });
  });
});

test('request', async () => {
  const ret = await request('http://127.0.0.1:8080');
  expect(ret[0]).toEqual(123);
});

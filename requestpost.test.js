// const http = require('http');
const {requestPost} = require('./request');

jest.mock('http', () => ({
  request: jest.fn().mockImplementation((options, callback) => {
    expect(options.hostname).toEqual('127.0.0.1');
    expect(options.port).toEqual('2004');
    expect(options.path).toEqual('/v2/games/936207324/validate');

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

test('requestPost', async () => {
  const ret = await requestPost('http://127.0.0.1:2004/v2/games/936207324/validate', undefined, {command: 'SPIN'});
  expect(ret[0]).toEqual(123);
});

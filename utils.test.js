const {parseJSON, awaitWrap, buildQueryString} = require('./utils');

// 测试常规解析，看是否符合预期
test('parseJSON', async () => {
  const jobj = parseJSON('{"a":1, "b":"2", "c": true, "d":["a",123]}');
  expect(jobj.a).toEqual(1);
  expect(jobj.b).toEqual('2');
  expect(jobj.c).toEqual(true);
  expect(Array.isArray(jobj.d)).toEqual(true);
  expect(jobj.d.length).toEqual(2);
  expect(jobj.d[0]).toEqual('a');
  expect(jobj.d[1]).toEqual(123);
});

// 测试json标准语法
test('parseJSON err', async () => {
  const jobj = parseJSON('{a:1}');
  expect(jobj).toEqual(undefined);
});

// 测试不完整的json异常是否如预期
test('parseJSON err2', async () => {
  const jobj = parseJSON('{"a":1');
  expect(jobj).toEqual(undefined);
});

// 测试参数不传或类型错误，是否符合预期
test('parseJSON err3', async () => {
  let jobj = parseJSON();
  expect(jobj).toEqual(undefined);

  // 传入数字为何是对的？
  // 怀疑js进行了默认的字符串转换
  jobj = parseJSON(123);
  expect(jobj).toEqual(123);

  // 传入对象是错误的
  jobj = parseJSON({a: 123});
  expect(jobj).toEqual(undefined);

  // 这里测试了传入对象，且对象实现了 toString 接口，发现果然如前面所料
  const obj = {
    a: 123,
    toString: () => {
      return '{"a":123}';
    },
  };

  jobj = parseJSON(obj);
  expect(jobj.a).toEqual(123);
});

test('awaitWrap', async () => {
  const [err, data] = await awaitWrap(
      new Promise((resolve, reject) => {
        resolve(1);
      }),
  );

  expect(err).toEqual(undefined);
  expect(data).toEqual(1);
});

test('awaitWrap error', async () => {
  const [err, data] = await awaitWrap(
      new Promise((resolve, reject) => {
        reject(new Error('1'));
      }),
  );

  expect(err.message).toEqual('1');
  expect(data).toEqual(undefined);
});

test('buildQueryString', () => {
  const str = buildQueryString('http://127.0.0.1/', {a: 1, b: 'abc', c: 1.23});
  expect(str).toEqual('http://127.0.0.1/?a=1&b=abc&c=1.23');
});

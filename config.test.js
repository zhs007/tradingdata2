const {loadConfig, checkConfig} = require('./config');

test('config', async () => {
  const cfg = loadConfig('./cfg/config.yaml.sample');
  expect(cfg).not.toEqual(undefined);

  const err = checkConfig(cfg);
  expect(err).toEqual(undefined);

  expect(cfg.tasks.length).toEqual(3);
});

test('config1', async () => {
  const cfg = loadConfig('./unittestdata/config1.yaml');
  expect(cfg).not.toEqual(undefined);

  const err = checkConfig(cfg);
  expect(err).toEqual(undefined);

  expect(cfg.tasks.length).toEqual(1);
});

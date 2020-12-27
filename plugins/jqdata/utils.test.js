const {parseDate} = require('./utils');

test('parseDate', async () => {
  const ts = parseDate('2005-01-01');
  expect(ts).toEqual(1104537600);
});

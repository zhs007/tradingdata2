const { getBucketedTrades } = require("../plugins/bitmex/utils");
const { request } = require("../request");

// request("https://www.baidu.com").then(() => {
//   process.exit();
// });

request("https://www.bitmex.com/api/v1/trade/bucketed?binSize=1m&partial=false&symbol=XBT&count=100&start=0&reverse=false&startTime=2020-01-01T00%3A00%3A00.000Z&endTime=2020-01-02T00%3A00%3A00.000Z").then(() => {
  process.exit();
});

// getBucketedTrades({
//   binSize: "1m",
//   partial: false,
//   symbol: "XBT",
//   count: 100,
//   start: 0,
//   reverse: false,
//   startTime: "2020-01-01T00:00:00.000Z",
//   endTime: "2020-01-02T00:00:00.000Z",
// }).then(([err, trades]) => {
//   process.exit();
// });

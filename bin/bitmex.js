const { getBucketedTrades } = require("../plugins/bitmex/utils");
const { request } = require("../request");
const axios = require("axios");

// request("http://www.baidu.com")
//   .then(() => {
//     process.exit();
//   })
//   .catch((err) => {
//     process.exit();
//   });

// request(
//   "http://www.bitmex.com/api/v1/trade/bucketed?binSize=1m&partial=false&symbol=XBT&count=100&start=0&reverse=false&startTime=2020-01-01T00%3A00%3A00.000Z&endTime=2020-01-02T00%3A00%3A00.000Z",
//   {
//     Accept: "application/json",
//   }
// )
//   .then(() => {
//     process.exit();
//   })
//   .catch((err) => {
//     console.log(err);
//     process.exit();
//   });

// Make a request for a user with a given ID
axios
  .get(
    "http://www.bitmex.com/api/v1/trade/bucketed?binSize=1m&partial=false&symbol=XBT&count=100&start=0&reverse=false&startTime=2020-01-01T00%3A00%3A00.000Z&endTime=2020-01-02T00%3A00%3A00.000Z"
  )
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
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

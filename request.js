const http = require("http");
const https = require("https");
const url = require("url");
const { parseJSON } = require("./utils");

/**
 * request
 * @param {string} servurl - servurl
 * @param {object} header - {k1:v1, k2:v2}
 * @return {Promise} promise -
 */
function request(servurl, header) {
  return new Promise((resolve, reject) => {
    const urldata = url.parse(servurl);
    if (!header) {
      header = {};
    }

    header["Content-Type"] = "application/json";
    // header["Content-Length"] = 0;
    // header["User-Agent"] =
    //   "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36";

    // urldata.rejectUnauthorized = false;
    urldata.headers = header;
    urldata.method = "GET";
    urldata.port = 443;

    let funcCallback = (res) => {
      const { statusCode } = res;

      if (statusCode !== 200) {
        reject(new Error("Request Failed. The Status Code: " + statusCode));

        return;
      }

      let data = "";
      res.on("data", (_data) => (data += _data));
      res.on("end", () => {
        const ret = parseJSON(data);
        if (ret == undefined) {
          reject(new Error("parseJSON error."));

          return;
        }

        resolve(ret);
      });
    };

    if (urldata.protocol == "https:") {
      const req = https
        .request(
          {
            hostname: urldata.hostname,
            port: 443,
            path: urldata.path,
            method: "GET",
          },
          funcCallback
        )
        .on("error", (err) => {
          reject(err);
        });

      // req.write("");
      req.end();
    } else {
      const req = http
        .request(
          {
            hostname: urldata.hostname,
            port: 80,
            path: urldata.path,
            method: "GET",
          },
          funcCallback
        )
        .on("error", (err) => {
          reject(err);
        });

      // req.write("");
      req.end();
    }
  });

  // if (urldata.protocol == "https:") {
  //   return new Promise((resolve, reject) => {
  //     https
  //       .get(
  //         url,
  //         { headers: header, rejectUnauthorized: false },
  //         (response) => {
  //           const { statusCode } = response;

  //           if (statusCode !== 200) {
  //             reject(
  //               new Error("Request Failed. The Status Code: " + statusCode)
  //             );

  //             return;
  //           }

  //           let data = "";
  //           response.on("data", (_data) => (data += _data));
  //           response.on("end", () => {
  //             const ret = parseJSON(data);
  //             if (ret == undefined) {
  //               reject(new Error("parseJSON error."));

  //               return;
  //             }

  //             resolve(ret);
  //           });
  //         }
  //       )
  //       .on("error", (err) => {
  //         reject(err);
  //       });
  //   });
  // }

  // return new Promise((resolve, reject) => {
  //   http
  //     .get(url, { headers: header }, (response) => {
  //       const { statusCode } = response;

  //       if (statusCode !== 200) {
  //         reject(new Error("Request Failed. The Status Code: " + statusCode));

  //         return;
  //       }

  //       let data = "";
  //       response.on("data", (_data) => (data += _data));
  //       response.on("end", () => {
  //         const ret = parseJSON(data);
  //         if (ret == undefined) {
  //           reject(new Error("parseJSON error."));

  //           return;
  //         }

  //         resolve(ret);
  //       });
  //     })
  //     .on("error", (err) => {
  //       reject(err);
  //     });
  // });
}

/**
 * requestPost
 * @param {string} servURL - servURL
 * @param {object} header - {k1:v1, k2:v2}
 * @param {object} params - json object
 * @return {Promise} promise -
 */
function requestPost(servURL, header, params) {
  return new Promise((resolve, reject) => {
    const urldata = url.parse(servURL);

    let reqdata = "";
    if (params) {
      reqdata = JSON.stringify(params);
    }

    if (!header) {
      header = {};
    }

    header["Content-Type"] = "application/json";
    header["Content-Length"] = Buffer.byteLength(reqdata);

    const req = http
      .request(
        {
          hostname: urldata.hostname,
          port: urldata.port,
          path: urldata.path,
          method: "POST",
          headers: header,
        },
        (res) => {
          const { statusCode } = res;

          console.log("POST " + servURL + " statusCode: " + statusCode);

          if (statusCode !== 200) {
            // reject(new Error('Request Failed. The Status Code: ' + statusCode));
            // return;
          }

          let data = "";
          res.on("data", (_data) => (data += _data));
          res.on("end", () => {
            console.log("POST " + servURL + " data: " + data);

            const ret = parseJSON(data);
            if (ret == undefined) {
              reject(new Error("parseJSON error."));

              return;
            }

            resolve(ret);
          });
        }
      )
      .on("error", (err) => {
        reject(err);
      });

    req.write(reqdata);
    req.end();
  });
}

exports.request = request;
exports.requestPost = requestPost;

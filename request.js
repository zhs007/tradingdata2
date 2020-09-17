const http = require('http');
// const https = require('https');
const url = require('url');
const {parseJSON} = require('./utils');
const axios = require('axios');

/**
 * request
 * @param {string} servurl - servurl
 * @param {object} headers - {k1:v1, k2:v2}
 * @param {object} params - {k1:v1, k2:v2}
 * @return {Promise} promise - then(string), catch(err)
 */
function request(servurl, headers, params) {
  return new Promise((resolve, reject) => {
    axios
        .get(servurl, {headers: headers, params: params})
        .then((response) => {
        // handle success
        // console.log(response);
          resolve(response);
        })
        .catch((err) => {
        // handle error
        // console.log(error);
          reject(err);
        });
  });
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

    let reqdata = '';
    if (params) {
      reqdata = JSON.stringify(params);
    }

    if (!header) {
      header = {};
    }

    header['Content-Type'] = 'application/json';
    header['Content-Length'] = Buffer.byteLength(reqdata);

    const req = http
        .request(
            {
              hostname: urldata.hostname,
              port: urldata.port,
              path: urldata.path,
              method: 'POST',
              headers: header,
            },
            (res) => {
              const {statusCode} = res;

              console.log('POST ' + servURL + ' statusCode: ' + statusCode);

              if (statusCode !== 200) {
                // reject(new Error('Request Failed. The Status Code: ' + statusCode));
                // return;
              }

              let data = '';
              res.on('data', (_data) => (data += _data));
              res.on('end', () => {
                console.log('POST ' + servURL + ' data: ' + data);

                const ret = parseJSON(data);
                if (ret == undefined) {
                  reject(new Error('parseJSON error.'));

                  return;
                }

                resolve(ret);
              });
            },
        )
        .on('error', (err) => {
          reject(err);
        });

    req.write(reqdata);
    req.end();
  });
}

exports.request = request;
// exports.requestEx = requestEx;
exports.requestPost = requestPost;

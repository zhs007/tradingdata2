const http = require("http");
const https = require("https");
const axios = require("axios");
const { request, requestEx } = require("./request");

jest.mock("http", () => ({
  get: jest.fn().mockImplementation((url, options, callback) => {
    let ondata = undefined;
    let onend = undefined;

    callback({
      statusCode: 200,
      on: (event, cb) => {
        if (event == "data") {
          ondata = cb;
        }

        if (event == "end") {
          onend = cb;
        }
      },
    });

    ondata("[123]");
    onend();

    return { on: () => {} };
  }),
  request: jest.fn().mockImplementation((options, callback) => {
    let ondata = undefined;
    let onend = undefined;

    callback({
      statusCode: 200,
      on: (event, cb) => {
        if (event == "data") {
          ondata = cb;
        }

        if (event == "end") {
          onend = cb;
        }
      },
    });

    ondata("[123]");
    onend();

    return { on: () => {} };
  }),
}));

jest.mock("https", () => ({
  get: jest.fn().mockImplementation((url, options, callback) => {
    let ondata = undefined;
    let onend = undefined;

    callback({
      statusCode: 200,
      on: (event, cb) => {
        if (event == "data") {
          ondata = cb;
        }

        if (event == "end") {
          onend = cb;
        }
      },
    });

    ondata("[123]");
    onend();

    return { on: () => {} };
  }),
  request: jest.fn().mockImplementation((options, callback) => {
    let ondata = undefined;
    let onend = undefined;

    callback({
      statusCode: 200,
      on: (event, cb) => {
        if (event == "data") {
          ondata = cb;
        }

        if (event == "end") {
          onend = cb;
        }
      },
    });

    ondata("[123]");
    onend();

    return { on: () => {} };
  }),
}));

jest.mock("axios", () => ({
  get: jest.fn().mockImplementation((url, options) => {
    return new Promise((resolve, reject) => {
      resolve("[123]");
    });
  }),
}));

test("http.get", async () => {
  http.get("", undefined, (res) => {
    expect(res.statusCode).toEqual(200);

    res.on("data", (data) => {
      expect(data).toEqual("[123]");
    });

    res.on("end", () => {});
  });
});

test("request", async () => {
  const ret = await request("http://127.0.0.1:8080");
  expect(ret).toEqual("[123]");
});

test("request https", async () => {
  const ret = await request("https://127.0.0.1:8080");
  expect(ret).toEqual("[123]");
});

test("requestEx", async () => {
  const ret = await requestEx("http://127.0.0.1:8080");
  expect(ret[0]).toEqual(123);
});

test("requestEx https", async () => {
  const ret = await requestEx("https://127.0.0.1:8080");
  expect(ret[0]).toEqual(123);
});

const {BasicRequestData} = require('./pb/trading2_pb');
const {RequestUpdCandles, RequestGetCandles, RequestUpdSymbol, SymbolInfo} = require('./pb/tradingdb2_pb');
const trdb2 = require('./pb/tradingdb2_grpc_pb');
const {batchCandles, callSend, pbCandle2Cancle} = require('./pb.utils');

const grpc = require('grpc');

/**
 * TradingDB2Client - tradingdb2 client
 */
class TradingDB2Client {
  /**
   * constructor - new TradingDB2Client("127.0.0.1:5002")
   * @constructor
   * @param {string} servaddr - server addr, it's like "127.0.0.1:5002"
   * @param {string} token - token
   */
  constructor(servaddr, token) {
    this.client = new trdb2.TradingDB2Client(
        servaddr,
        grpc.credentials.createInsecure(),
    );

    this.token = token;
  }

  /**
   * updCandles - updCandles
   * @param {string} market - market
   * @param {string} symbol - symbol
   * @param {string} tag - tag
   * @param {Array} candles - candles
   * @param {int} batchNums - batchNums
   * @return {Array} ret - [error, pb.ReplyUpdCandles]
   */
  async updCandles(market, symbol, tag, candles, batchNums) {
    return new Promise(async (resolve, reject) => {
      try {
        const call = this.client.updCandles((err, res) => {
          resolve([err, res]);
        });

        await batchCandles(candles, batchNums, async (pbCandles) => {
          const bq = new BasicRequestData();
          bq.setToken(this.token);

          const req = new RequestUpdCandles();

          pbCandles.setMarket(market);
          pbCandles.setSymbol(symbol);
          pbCandles.setTag(tag);

          // req.setToken(this.token);
          req.setCandles(pbCandles);
          req.setBasicrequest(bq);

          await callSend(call, req);
        });

        call.end();
      } catch (err) {
        resolve([err, undefined]);
      }
    });
  }

  /**
   * getCandles - getCandles
   * @param {string} market - market
   * @param {string} symbol - symbol
   * @param {string} tag - tag
   * @param {int} tsStart - tsStart
   * @param {int} tsEnd - tsEnd
   * @return {Array} ret - [error, candles]
   */
  getCandles(market, symbol, tag, tsStart, tsEnd) {
    return new Promise((resolve, reject) => {
      try {
        if (tsStart == undefined) {
          tsStart = 0;
        }

        if (tsEnd == undefined) {
          tsEnd = -1;
        }

        const bq = new BasicRequestData();
        bq.setToken(this.token);

        const req = new RequestGetCandles();

        // req.setToken(this.token);
        req.setMarket(market);
        req.setSymbol(symbol);
        req.setTag(tag);
        req.setTsstart(tsStart);
        req.setTsend(tsEnd);

        req.setBasicrequest(bq);

        const candles = [];

        const call = this.client.getCandles(req);
        call.on('data', (req) => {
          const lst = req.getCandles().getCandlesList();

          for (let i = 0; i < lst.length; ++i) {
            candles.push(pbCandle2Cancle(lst[i]));
          }
        });
        call.on('end', () => {
          resolve([undefined, candles]);
        });
      } catch (err) {
        resolve([err, undefined]);
      }
    });
  }

  /**
   * updSymbol - updSymbol
   * @param {string} market - market
   * @param {string} symbol - symbol
   * @param {string} name - name
   * @param {string} fullname - fullname
   * @param {string} type - type
   * @return {Array} ret - [error, pb.ReplyUpdSymbol]
   */
  async updSymbol(market, symbol, name, fullname, type) {
    return new Promise(async (resolve, reject) => {
      try {
        const bq = new BasicRequestData();
        bq.setToken(this.token);

        const req = new RequestUpdSymbol();
        const si = new SymbolInfo();

        si.setMarket(market);
        si.setSymbol(symbol);
        si.setName(name);
        si.setFullname(fullname);
        si.setType(type);

        req.setSymbol(si);
        req.setBasicrequest(bq);

        this.client.updSymbol(req, (err, reply) => {
          resolve([err, reply]);
        });
      } catch (err) {
        resolve([err, undefined]);
      }
    });
  }
}

exports.TradingDB2Client = TradingDB2Client;

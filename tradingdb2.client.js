const { RequestUpdCandles, RequestGetCandles } = require('./pb/tradingdb2_pb');
const { TradingDB2ServiceClient } = require('./pb/tradingdb2_grpc_pb');
const { newCandles, batchCandles } = require('./pb.utils');

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
    this.client = new TradingDB2ServiceClient(
      servaddr,
      grpc.credentials.createInsecure()
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
   * @param {function} callback - callback(err, res)
   * @return {error} err - error
   */
  updCandles(market, symbol, tag, candles, batchNums, callback) {
    let call = this.client.updCandles(callback);

    let err = batchCandles(candles, batchNums, (pbCandles) => {
      return call.write(pbCandles);
    });
    if (err) {
      return err;
    }

    return call.end();
  }

  /**
   * getCandles - getCandles
   * @param {string} market - market
   * @param {string} symbol - symbol
   * @param {string} tag - tag
   * @param {function} callback - callback(err, res)
   */
  getCandles(market, symbol, tag, callback) {
    const req = new RequestGetCandles();

    req.setToken(this.token);
    req.setMarket(marker);
    req.setSymbol(symbol);
    req.setTag(tag);

    this.client.getCandles(req, callback);
  }
}

exports.TradingDB2Client = TradingDB2Client;

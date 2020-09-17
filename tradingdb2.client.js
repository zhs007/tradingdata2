const {RequestUpdCandles, Candles} = require('./pb/tradingdb2_pb');
const {TradingDB2ServiceClient} = require('./pb/tradingdb2_grpc_pb');

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
        grpc.credentials.createInsecure(),
    );

    this.token = token;
  }

  /**
   * updCandles - updCandles
   * @param {string} market - market
   * @param {string} symbol - symbol
   * @param {string} tag - tag
   * @param {Array} caldles - caldles
   * @param {function} callback - callback(err, res)
   */
  updCandles(market, symbol, tag, caldles, callback) {
    const req = new RequestUpdCandles();
    const pbCandles = new Candles();

    req.setToken(this.token);
    req.setCandles(pbCandles);

    this.client.updCandles(req, callback);
  }
}

exports.TradingDB2Client = TradingDB2Client;

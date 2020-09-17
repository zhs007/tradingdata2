// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var tradingdb2_pb = require('./tradingdb2_pb.js');

function serialize_tradingdb2pb_ReplyUpdCandles(arg) {
  if (!(arg instanceof tradingdb2_pb.ReplyUpdCandles)) {
    throw new Error('Expected argument of type tradingdb2pb.ReplyUpdCandles');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingdb2pb_ReplyUpdCandles(buffer_arg) {
  return tradingdb2_pb.ReplyUpdCandles.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tradingdb2pb_RequestUpdCandles(arg) {
  if (!(arg instanceof tradingdb2_pb.RequestUpdCandles)) {
    throw new Error('Expected argument of type tradingdb2pb.RequestUpdCandles');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingdb2pb_RequestUpdCandles(buffer_arg) {
  return tradingdb2_pb.RequestUpdCandles.deserializeBinary(new Uint8Array(buffer_arg));
}


// TradingDB2Service - TradingDB2 service
var TradingDB2ServiceService = exports.TradingDB2ServiceService = {
  // updCandles - update candles
updCandles: {
    path: '/tradingdb2pb.TradingDB2Service/updCandles',
    requestStream: false,
    responseStream: false,
    requestType: tradingdb2_pb.RequestUpdCandles,
    responseType: tradingdb2_pb.ReplyUpdCandles,
    requestSerialize: serialize_tradingdb2pb_RequestUpdCandles,
    requestDeserialize: deserialize_tradingdb2pb_RequestUpdCandles,
    responseSerialize: serialize_tradingdb2pb_ReplyUpdCandles,
    responseDeserialize: deserialize_tradingdb2pb_ReplyUpdCandles,
  },
};

exports.TradingDB2ServiceClient = grpc.makeGenericClientConstructor(TradingDB2ServiceService);

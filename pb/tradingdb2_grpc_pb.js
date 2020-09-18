// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var tradingdb2_pb = require('./tradingdb2_pb.js');

function serialize_tradingdb2pb_ReplyGetCandles(arg) {
  if (!(arg instanceof tradingdb2_pb.ReplyGetCandles)) {
    throw new Error('Expected argument of type tradingdb2pb.ReplyGetCandles');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingdb2pb_ReplyGetCandles(buffer_arg) {
  return tradingdb2_pb.ReplyGetCandles.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tradingdb2pb_ReplyUpdCandles(arg) {
  if (!(arg instanceof tradingdb2_pb.ReplyUpdCandles)) {
    throw new Error('Expected argument of type tradingdb2pb.ReplyUpdCandles');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingdb2pb_ReplyUpdCandles(buffer_arg) {
  return tradingdb2_pb.ReplyUpdCandles.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tradingdb2pb_RequestGetCandles(arg) {
  if (!(arg instanceof tradingdb2_pb.RequestGetCandles)) {
    throw new Error('Expected argument of type tradingdb2pb.RequestGetCandles');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingdb2pb_RequestGetCandles(buffer_arg) {
  return tradingdb2_pb.RequestGetCandles.deserializeBinary(new Uint8Array(buffer_arg));
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
    requestStream: true,
    responseStream: false,
    requestType: tradingdb2_pb.RequestUpdCandles,
    responseType: tradingdb2_pb.ReplyUpdCandles,
    requestSerialize: serialize_tradingdb2pb_RequestUpdCandles,
    requestDeserialize: deserialize_tradingdb2pb_RequestUpdCandles,
    responseSerialize: serialize_tradingdb2pb_ReplyUpdCandles,
    responseDeserialize: deserialize_tradingdb2pb_ReplyUpdCandles,
  },
  // getCandles - get candles
getCandles: {
    path: '/tradingdb2pb.TradingDB2Service/getCandles',
    requestStream: false,
    responseStream: true,
    requestType: tradingdb2_pb.RequestGetCandles,
    responseType: tradingdb2_pb.ReplyGetCandles,
    requestSerialize: serialize_tradingdb2pb_RequestGetCandles,
    requestDeserialize: deserialize_tradingdb2pb_RequestGetCandles,
    responseSerialize: serialize_tradingdb2pb_ReplyGetCandles,
    responseDeserialize: deserialize_tradingdb2pb_ReplyGetCandles,
  },
};

exports.TradingDB2ServiceClient = grpc.makeGenericClientConstructor(TradingDB2ServiceService);

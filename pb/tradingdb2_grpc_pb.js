// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var tradingdb2_pb = require('./tradingdb2_pb.js');
var trading2_pb = require('./trading2_pb.js');

function serialize_tradingpb_ReplyGetCandles(arg) {
  if (!(arg instanceof tradingdb2_pb.ReplyGetCandles)) {
    throw new Error('Expected argument of type tradingpb.ReplyGetCandles');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingpb_ReplyGetCandles(buffer_arg) {
  return tradingdb2_pb.ReplyGetCandles.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tradingpb_ReplyGetSymbol(arg) {
  if (!(arg instanceof tradingdb2_pb.ReplyGetSymbol)) {
    throw new Error('Expected argument of type tradingpb.ReplyGetSymbol');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingpb_ReplyGetSymbol(buffer_arg) {
  return tradingdb2_pb.ReplyGetSymbol.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tradingpb_ReplySimTrading(arg) {
  if (!(arg instanceof tradingdb2_pb.ReplySimTrading)) {
    throw new Error('Expected argument of type tradingpb.ReplySimTrading');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingpb_ReplySimTrading(buffer_arg) {
  return tradingdb2_pb.ReplySimTrading.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tradingpb_ReplyUpdCandles(arg) {
  if (!(arg instanceof tradingdb2_pb.ReplyUpdCandles)) {
    throw new Error('Expected argument of type tradingpb.ReplyUpdCandles');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingpb_ReplyUpdCandles(buffer_arg) {
  return tradingdb2_pb.ReplyUpdCandles.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tradingpb_ReplyUpdSymbol(arg) {
  if (!(arg instanceof tradingdb2_pb.ReplyUpdSymbol)) {
    throw new Error('Expected argument of type tradingpb.ReplyUpdSymbol');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingpb_ReplyUpdSymbol(buffer_arg) {
  return tradingdb2_pb.ReplyUpdSymbol.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tradingpb_RequestGetCandles(arg) {
  if (!(arg instanceof tradingdb2_pb.RequestGetCandles)) {
    throw new Error('Expected argument of type tradingpb.RequestGetCandles');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingpb_RequestGetCandles(buffer_arg) {
  return tradingdb2_pb.RequestGetCandles.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tradingpb_RequestGetSymbol(arg) {
  if (!(arg instanceof tradingdb2_pb.RequestGetSymbol)) {
    throw new Error('Expected argument of type tradingpb.RequestGetSymbol');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingpb_RequestGetSymbol(buffer_arg) {
  return tradingdb2_pb.RequestGetSymbol.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tradingpb_RequestGetSymbols(arg) {
  if (!(arg instanceof tradingdb2_pb.RequestGetSymbols)) {
    throw new Error('Expected argument of type tradingpb.RequestGetSymbols');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingpb_RequestGetSymbols(buffer_arg) {
  return tradingdb2_pb.RequestGetSymbols.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tradingpb_RequestSimTrading(arg) {
  if (!(arg instanceof tradingdb2_pb.RequestSimTrading)) {
    throw new Error('Expected argument of type tradingpb.RequestSimTrading');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingpb_RequestSimTrading(buffer_arg) {
  return tradingdb2_pb.RequestSimTrading.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tradingpb_RequestUpdCandles(arg) {
  if (!(arg instanceof tradingdb2_pb.RequestUpdCandles)) {
    throw new Error('Expected argument of type tradingpb.RequestUpdCandles');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingpb_RequestUpdCandles(buffer_arg) {
  return tradingdb2_pb.RequestUpdCandles.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tradingpb_RequestUpdSymbol(arg) {
  if (!(arg instanceof tradingdb2_pb.RequestUpdSymbol)) {
    throw new Error('Expected argument of type tradingpb.RequestUpdSymbol');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingpb_RequestUpdSymbol(buffer_arg) {
  return tradingdb2_pb.RequestUpdSymbol.deserializeBinary(new Uint8Array(buffer_arg));
}


// TradingDB2 - TradingDB2 service
var TradingDB2Service = exports.TradingDB2Service = {
  // updCandles - update candles
updCandles: {
    path: '/tradingpb.TradingDB2/updCandles',
    requestStream: true,
    responseStream: false,
    requestType: tradingdb2_pb.RequestUpdCandles,
    responseType: tradingdb2_pb.ReplyUpdCandles,
    requestSerialize: serialize_tradingpb_RequestUpdCandles,
    requestDeserialize: deserialize_tradingpb_RequestUpdCandles,
    responseSerialize: serialize_tradingpb_ReplyUpdCandles,
    responseDeserialize: deserialize_tradingpb_ReplyUpdCandles,
  },
  // getCandles - get candles
getCandles: {
    path: '/tradingpb.TradingDB2/getCandles',
    requestStream: false,
    responseStream: true,
    requestType: tradingdb2_pb.RequestGetCandles,
    responseType: tradingdb2_pb.ReplyGetCandles,
    requestSerialize: serialize_tradingpb_RequestGetCandles,
    requestDeserialize: deserialize_tradingpb_RequestGetCandles,
    responseSerialize: serialize_tradingpb_ReplyGetCandles,
    responseDeserialize: deserialize_tradingpb_ReplyGetCandles,
  },
  // updSymbol - update symbol
updSymbol: {
    path: '/tradingpb.TradingDB2/updSymbol',
    requestStream: false,
    responseStream: false,
    requestType: tradingdb2_pb.RequestUpdSymbol,
    responseType: tradingdb2_pb.ReplyUpdSymbol,
    requestSerialize: serialize_tradingpb_RequestUpdSymbol,
    requestDeserialize: deserialize_tradingpb_RequestUpdSymbol,
    responseSerialize: serialize_tradingpb_ReplyUpdSymbol,
    responseDeserialize: deserialize_tradingpb_ReplyUpdSymbol,
  },
  // getSymbol - get symbol
getSymbol: {
    path: '/tradingpb.TradingDB2/getSymbol',
    requestStream: false,
    responseStream: false,
    requestType: tradingdb2_pb.RequestGetSymbol,
    responseType: tradingdb2_pb.ReplyGetSymbol,
    requestSerialize: serialize_tradingpb_RequestGetSymbol,
    requestDeserialize: deserialize_tradingpb_RequestGetSymbol,
    responseSerialize: serialize_tradingpb_ReplyGetSymbol,
    responseDeserialize: deserialize_tradingpb_ReplyGetSymbol,
  },
  // getSymbols - get symbols
getSymbols: {
    path: '/tradingpb.TradingDB2/getSymbols',
    requestStream: false,
    responseStream: true,
    requestType: tradingdb2_pb.RequestGetSymbols,
    responseType: tradingdb2_pb.ReplyGetSymbol,
    requestSerialize: serialize_tradingpb_RequestGetSymbols,
    requestDeserialize: deserialize_tradingpb_RequestGetSymbols,
    responseSerialize: serialize_tradingpb_ReplyGetSymbol,
    responseDeserialize: deserialize_tradingpb_ReplyGetSymbol,
  },
  // simTrading - simulation trading
simTrading: {
    path: '/tradingpb.TradingDB2/simTrading',
    requestStream: false,
    responseStream: false,
    requestType: tradingdb2_pb.RequestSimTrading,
    responseType: tradingdb2_pb.ReplySimTrading,
    requestSerialize: serialize_tradingpb_RequestSimTrading,
    requestDeserialize: deserialize_tradingpb_RequestSimTrading,
    responseSerialize: serialize_tradingpb_ReplySimTrading,
    responseDeserialize: deserialize_tradingpb_ReplySimTrading,
  },
  // simTrading2 - simulation trading
simTrading2: {
    path: '/tradingpb.TradingDB2/simTrading2',
    requestStream: true,
    responseStream: true,
    requestType: tradingdb2_pb.RequestSimTrading,
    responseType: tradingdb2_pb.ReplySimTrading,
    requestSerialize: serialize_tradingpb_RequestSimTrading,
    requestDeserialize: deserialize_tradingpb_RequestSimTrading,
    responseSerialize: serialize_tradingpb_ReplySimTrading,
    responseDeserialize: deserialize_tradingpb_ReplySimTrading,
  },
};

exports.TradingDB2Client = grpc.makeGenericClientConstructor(TradingDB2Service);

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var tradingnode2_pb = require('./tradingnode2_pb.js');
var trading2_pb = require('./trading2_pb.js');

function serialize_tradingpb_ReplyCalcPNL(arg) {
  if (!(arg instanceof tradingnode2_pb.ReplyCalcPNL)) {
    throw new Error('Expected argument of type tradingpb.ReplyCalcPNL');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingpb_ReplyCalcPNL(buffer_arg) {
  return tradingnode2_pb.ReplyCalcPNL.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tradingpb_ReplyServerInfo(arg) {
  if (!(arg instanceof tradingnode2_pb.ReplyServerInfo)) {
    throw new Error('Expected argument of type tradingpb.ReplyServerInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingpb_ReplyServerInfo(buffer_arg) {
  return tradingnode2_pb.ReplyServerInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tradingpb_RequestCalcPNL(arg) {
  if (!(arg instanceof tradingnode2_pb.RequestCalcPNL)) {
    throw new Error('Expected argument of type tradingpb.RequestCalcPNL');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingpb_RequestCalcPNL(buffer_arg) {
  return tradingnode2_pb.RequestCalcPNL.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tradingpb_RequestServerInfo(arg) {
  if (!(arg instanceof tradingnode2_pb.RequestServerInfo)) {
    throw new Error('Expected argument of type tradingpb.RequestServerInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tradingpb_RequestServerInfo(buffer_arg) {
  return tradingnode2_pb.RequestServerInfo.deserializeBinary(new Uint8Array(buffer_arg));
}


// TradingNode2 - TradingNode2 service
var TradingNode2Service = exports.TradingNode2Service = {
  // getServerInfo - get server infomation
getServerInfo: {
    path: '/tradingpb.TradingNode2/getServerInfo',
    requestStream: false,
    responseStream: false,
    requestType: tradingnode2_pb.RequestServerInfo,
    responseType: tradingnode2_pb.ReplyServerInfo,
    requestSerialize: serialize_tradingpb_RequestServerInfo,
    requestDeserialize: deserialize_tradingpb_RequestServerInfo,
    responseSerialize: serialize_tradingpb_ReplyServerInfo,
    responseDeserialize: deserialize_tradingpb_ReplyServerInfo,
  },
  // calcPNL - calc PNL
calcPNL: {
    path: '/tradingpb.TradingNode2/calcPNL',
    requestStream: false,
    responseStream: false,
    requestType: tradingnode2_pb.RequestCalcPNL,
    responseType: tradingnode2_pb.ReplyCalcPNL,
    requestSerialize: serialize_tradingpb_RequestCalcPNL,
    requestDeserialize: deserialize_tradingpb_RequestCalcPNL,
    responseSerialize: serialize_tradingpb_ReplyCalcPNL,
    responseDeserialize: deserialize_tradingpb_ReplyCalcPNL,
  },
};

exports.TradingNode2Client = grpc.makeGenericClientConstructor(TradingNode2Service);

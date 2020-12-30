// source: tradingnode2.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var trading2_pb = require('./trading2_pb.js');
goog.object.extend(proto, trading2_pb);
goog.exportSymbol('proto.tradingpb.ReplyCalcPNL', null, global);
goog.exportSymbol('proto.tradingpb.ReplyServerInfo', null, global);
goog.exportSymbol('proto.tradingpb.RequestCalcPNL', null, global);
goog.exportSymbol('proto.tradingpb.RequestServerInfo', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tradingpb.RequestServerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tradingpb.RequestServerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tradingpb.RequestServerInfo.displayName = 'proto.tradingpb.RequestServerInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tradingpb.ReplyServerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tradingpb.ReplyServerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tradingpb.ReplyServerInfo.displayName = 'proto.tradingpb.ReplyServerInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tradingpb.RequestCalcPNL = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tradingpb.RequestCalcPNL, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tradingpb.RequestCalcPNL.displayName = 'proto.tradingpb.RequestCalcPNL';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tradingpb.ReplyCalcPNL = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tradingpb.ReplyCalcPNL.repeatedFields_, null);
};
goog.inherits(proto.tradingpb.ReplyCalcPNL, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tradingpb.ReplyCalcPNL.displayName = 'proto.tradingpb.ReplyCalcPNL';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tradingpb.RequestServerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tradingpb.RequestServerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tradingpb.RequestServerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tradingpb.RequestServerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    basicrequest: (f = msg.getBasicrequest()) && trading2_pb.BasicRequestData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tradingpb.RequestServerInfo}
 */
proto.tradingpb.RequestServerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tradingpb.RequestServerInfo;
  return proto.tradingpb.RequestServerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tradingpb.RequestServerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tradingpb.RequestServerInfo}
 */
proto.tradingpb.RequestServerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new trading2_pb.BasicRequestData;
      reader.readMessage(value,trading2_pb.BasicRequestData.deserializeBinaryFromReader);
      msg.setBasicrequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tradingpb.RequestServerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tradingpb.RequestServerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tradingpb.RequestServerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tradingpb.RequestServerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBasicrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      trading2_pb.BasicRequestData.serializeBinaryToWriter
    );
  }
};


/**
 * optional BasicRequestData basicRequest = 1;
 * @return {?proto.tradingpb.BasicRequestData}
 */
proto.tradingpb.RequestServerInfo.prototype.getBasicrequest = function() {
  return /** @type{?proto.tradingpb.BasicRequestData} */ (
    jspb.Message.getWrapperField(this, trading2_pb.BasicRequestData, 1));
};


/**
 * @param {?proto.tradingpb.BasicRequestData|undefined} value
 * @return {!proto.tradingpb.RequestServerInfo} returns this
*/
proto.tradingpb.RequestServerInfo.prototype.setBasicrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tradingpb.RequestServerInfo} returns this
 */
proto.tradingpb.RequestServerInfo.prototype.clearBasicrequest = function() {
  return this.setBasicrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tradingpb.RequestServerInfo.prototype.hasBasicrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tradingpb.ReplyServerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.tradingpb.ReplyServerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tradingpb.ReplyServerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tradingpb.ReplyServerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeinfo: (f = msg.getNodeinfo()) && trading2_pb.TradingNodeInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tradingpb.ReplyServerInfo}
 */
proto.tradingpb.ReplyServerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tradingpb.ReplyServerInfo;
  return proto.tradingpb.ReplyServerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tradingpb.ReplyServerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tradingpb.ReplyServerInfo}
 */
proto.tradingpb.ReplyServerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new trading2_pb.TradingNodeInfo;
      reader.readMessage(value,trading2_pb.TradingNodeInfo.deserializeBinaryFromReader);
      msg.setNodeinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tradingpb.ReplyServerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tradingpb.ReplyServerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tradingpb.ReplyServerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tradingpb.ReplyServerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      trading2_pb.TradingNodeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TradingNodeInfo nodeInfo = 1;
 * @return {?proto.tradingpb.TradingNodeInfo}
 */
proto.tradingpb.ReplyServerInfo.prototype.getNodeinfo = function() {
  return /** @type{?proto.tradingpb.TradingNodeInfo} */ (
    jspb.Message.getWrapperField(this, trading2_pb.TradingNodeInfo, 1));
};


/**
 * @param {?proto.tradingpb.TradingNodeInfo|undefined} value
 * @return {!proto.tradingpb.ReplyServerInfo} returns this
*/
proto.tradingpb.ReplyServerInfo.prototype.setNodeinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tradingpb.ReplyServerInfo} returns this
 */
proto.tradingpb.ReplyServerInfo.prototype.clearNodeinfo = function() {
  return this.setNodeinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tradingpb.ReplyServerInfo.prototype.hasNodeinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tradingpb.RequestCalcPNL.prototype.toObject = function(opt_includeInstance) {
  return proto.tradingpb.RequestCalcPNL.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tradingpb.RequestCalcPNL} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tradingpb.RequestCalcPNL.toObject = function(includeInstance, msg) {
  var f, obj = {
    basicrequest: (f = msg.getBasicrequest()) && trading2_pb.BasicRequestData.toObject(includeInstance, f),
    params: (f = msg.getParams()) && trading2_pb.SimTradingParams.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tradingpb.RequestCalcPNL}
 */
proto.tradingpb.RequestCalcPNL.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tradingpb.RequestCalcPNL;
  return proto.tradingpb.RequestCalcPNL.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tradingpb.RequestCalcPNL} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tradingpb.RequestCalcPNL}
 */
proto.tradingpb.RequestCalcPNL.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new trading2_pb.BasicRequestData;
      reader.readMessage(value,trading2_pb.BasicRequestData.deserializeBinaryFromReader);
      msg.setBasicrequest(value);
      break;
    case 2:
      var value = new trading2_pb.SimTradingParams;
      reader.readMessage(value,trading2_pb.SimTradingParams.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tradingpb.RequestCalcPNL.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tradingpb.RequestCalcPNL.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tradingpb.RequestCalcPNL} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tradingpb.RequestCalcPNL.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBasicrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      trading2_pb.BasicRequestData.serializeBinaryToWriter
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      trading2_pb.SimTradingParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional BasicRequestData basicRequest = 1;
 * @return {?proto.tradingpb.BasicRequestData}
 */
proto.tradingpb.RequestCalcPNL.prototype.getBasicrequest = function() {
  return /** @type{?proto.tradingpb.BasicRequestData} */ (
    jspb.Message.getWrapperField(this, trading2_pb.BasicRequestData, 1));
};


/**
 * @param {?proto.tradingpb.BasicRequestData|undefined} value
 * @return {!proto.tradingpb.RequestCalcPNL} returns this
*/
proto.tradingpb.RequestCalcPNL.prototype.setBasicrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tradingpb.RequestCalcPNL} returns this
 */
proto.tradingpb.RequestCalcPNL.prototype.clearBasicrequest = function() {
  return this.setBasicrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tradingpb.RequestCalcPNL.prototype.hasBasicrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SimTradingParams params = 2;
 * @return {?proto.tradingpb.SimTradingParams}
 */
proto.tradingpb.RequestCalcPNL.prototype.getParams = function() {
  return /** @type{?proto.tradingpb.SimTradingParams} */ (
    jspb.Message.getWrapperField(this, trading2_pb.SimTradingParams, 2));
};


/**
 * @param {?proto.tradingpb.SimTradingParams|undefined} value
 * @return {!proto.tradingpb.RequestCalcPNL} returns this
*/
proto.tradingpb.RequestCalcPNL.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tradingpb.RequestCalcPNL} returns this
 */
proto.tradingpb.RequestCalcPNL.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tradingpb.RequestCalcPNL.prototype.hasParams = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tradingpb.ReplyCalcPNL.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tradingpb.ReplyCalcPNL.prototype.toObject = function(opt_includeInstance) {
  return proto.tradingpb.ReplyCalcPNL.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tradingpb.ReplyCalcPNL} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tradingpb.ReplyCalcPNL.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeinfo: (f = msg.getNodeinfo()) && trading2_pb.TradingNodeInfo.toObject(includeInstance, f),
    pnlList: jspb.Message.toObjectList(msg.getPnlList(),
    trading2_pb.PNLData.toObject, includeInstance),
    runseconds: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tradingpb.ReplyCalcPNL}
 */
proto.tradingpb.ReplyCalcPNL.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tradingpb.ReplyCalcPNL;
  return proto.tradingpb.ReplyCalcPNL.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tradingpb.ReplyCalcPNL} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tradingpb.ReplyCalcPNL}
 */
proto.tradingpb.ReplyCalcPNL.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new trading2_pb.TradingNodeInfo;
      reader.readMessage(value,trading2_pb.TradingNodeInfo.deserializeBinaryFromReader);
      msg.setNodeinfo(value);
      break;
    case 2:
      var value = new trading2_pb.PNLData;
      reader.readMessage(value,trading2_pb.PNLData.deserializeBinaryFromReader);
      msg.addPnl(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRunseconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tradingpb.ReplyCalcPNL.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tradingpb.ReplyCalcPNL.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tradingpb.ReplyCalcPNL} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tradingpb.ReplyCalcPNL.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      trading2_pb.TradingNodeInfo.serializeBinaryToWriter
    );
  }
  f = message.getPnlList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      trading2_pb.PNLData.serializeBinaryToWriter
    );
  }
  f = message.getRunseconds();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional TradingNodeInfo nodeInfo = 1;
 * @return {?proto.tradingpb.TradingNodeInfo}
 */
proto.tradingpb.ReplyCalcPNL.prototype.getNodeinfo = function() {
  return /** @type{?proto.tradingpb.TradingNodeInfo} */ (
    jspb.Message.getWrapperField(this, trading2_pb.TradingNodeInfo, 1));
};


/**
 * @param {?proto.tradingpb.TradingNodeInfo|undefined} value
 * @return {!proto.tradingpb.ReplyCalcPNL} returns this
*/
proto.tradingpb.ReplyCalcPNL.prototype.setNodeinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tradingpb.ReplyCalcPNL} returns this
 */
proto.tradingpb.ReplyCalcPNL.prototype.clearNodeinfo = function() {
  return this.setNodeinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tradingpb.ReplyCalcPNL.prototype.hasNodeinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PNLData pnl = 2;
 * @return {!Array<!proto.tradingpb.PNLData>}
 */
proto.tradingpb.ReplyCalcPNL.prototype.getPnlList = function() {
  return /** @type{!Array<!proto.tradingpb.PNLData>} */ (
    jspb.Message.getRepeatedWrapperField(this, trading2_pb.PNLData, 2));
};


/**
 * @param {!Array<!proto.tradingpb.PNLData>} value
 * @return {!proto.tradingpb.ReplyCalcPNL} returns this
*/
proto.tradingpb.ReplyCalcPNL.prototype.setPnlList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tradingpb.PNLData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tradingpb.PNLData}
 */
proto.tradingpb.ReplyCalcPNL.prototype.addPnl = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tradingpb.PNLData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tradingpb.ReplyCalcPNL} returns this
 */
proto.tradingpb.ReplyCalcPNL.prototype.clearPnlList = function() {
  return this.setPnlList([]);
};


/**
 * optional int64 runSeconds = 3;
 * @return {number}
 */
proto.tradingpb.ReplyCalcPNL.prototype.getRunseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tradingpb.ReplyCalcPNL} returns this
 */
proto.tradingpb.ReplyCalcPNL.prototype.setRunseconds = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.tradingpb);

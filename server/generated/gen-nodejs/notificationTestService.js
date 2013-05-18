//
// Autogenerated by Thrift Compiler (0.7.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;
var agent_common_ttypes = require('./agent_common_types')
var fb303_ttypes = require('./fb303_types')


var FacebookService = require('./FacebookService')
var FacebookServiceClient = FacebookService.Client
var ttypes = require('./notification_test_service_types');
//HELPER FUNCTIONS AND STRUCTURES

var notificationTestService_TestNotification_args = function(args) {
  this.ctx = null;
  this.type = null;
  this.details = null;
  if (args) {
    if (args.ctx !== undefined) {
      this.ctx = args.ctx;
    }
    if (args.type !== undefined) {
      this.type = args.type;
    }
    if (args.details !== undefined) {
      this.details = args.details;
    }
  }
};
notificationTestService_TestNotification_args.prototype = {};
notificationTestService_TestNotification_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ctx = new agent_common_ttypes.Context();
        this.ctx.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.type = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.MAP) {
        var _size0 = 0;
        var _rtmp34;
        this.details = {};
        var _ktype1 = 0;
        var _vtype2 = 0;
        _rtmp34 = input.readMapBegin();
        _ktype1 = _rtmp34.ktype;
        _vtype2 = _rtmp34.vtype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var key6 = null;
          var val7 = null;
          key6 = input.readString();
          val7 = input.readString();
          this.details[key6] = val7;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

notificationTestService_TestNotification_args.prototype.write = function(output) {
  output.writeStructBegin('notificationTestService_TestNotification_args');
  if (this.ctx != null) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  if (this.type != null) {
    output.writeFieldBegin('type', Thrift.Type.STRING, 2);
    output.writeString(this.type);
    output.writeFieldEnd();
  }
  if (this.details != null) {
    output.writeFieldBegin('details', Thrift.Type.MAP, 3);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.details));
    for (var kiter8 in this.details)
    {
      if (this.details.hasOwnProperty(kiter8))
      {
        var viter9 = this.details[kiter8];
        output.writeString(kiter8);
        output.writeString(viter9);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var notificationTestService_TestNotification_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
notificationTestService_TestNotification_result.prototype = {};
notificationTestService_TestNotification_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.NotificationTestResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

notificationTestService_TestNotification_result.prototype.write = function(output) {
  output.writeStructBegin('notificationTestService_TestNotification_result');
  if (this.success != null) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var notificationTestServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this.seqid = 0;
    this._reqs = {};
};
Thrift.inherits(notificationTestServiceClient, FacebookServiceClient)
notificationTestServiceClient.prototype.TestNotification = function(ctx, type, details, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_TestNotification(ctx, type, details);
};

notificationTestServiceClient.prototype.send_TestNotification = function(ctx, type, details) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('TestNotification', Thrift.MessageType.CALL, this.seqid);
  var args = new notificationTestService_TestNotification_args();
  args.ctx = ctx;
  args.type = type;
  args.details = details;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

notificationTestServiceClient.prototype.recv_TestNotification = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new notificationTestService_TestNotification_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('TestNotification failed: unknown result');
};
var notificationTestServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
notificationTestServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.Exception, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

notificationTestServiceProcessor.prototype.process_TestNotification = function(seqid, input, output) {
  var args = new notificationTestService_TestNotification_args();
  args.read(input);
  input.readMessageEnd();
  var result = new notificationTestService_TestNotification_result();
  this._handler.TestNotification(args.ctx, args.type, args.details, function (success) {
    result.success = success;
    output.writeMessageBegin("TestNotification", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}


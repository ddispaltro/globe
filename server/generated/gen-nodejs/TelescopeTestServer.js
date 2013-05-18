//
// Autogenerated by Thrift Compiler (0.7.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = require('./telescope_types');
//HELPER FUNCTIONS AND STRUCTURES

var TelescopeTestServer_TestRunAlarm_args = function(args) {
  this.txnId = null;
  this.query = null;
  this.messages = null;
  if (args) {
    if (args.txnId !== undefined) {
      this.txnId = args.txnId;
    }
    if (args.query !== undefined) {
      this.query = args.query;
    }
    if (args.messages !== undefined) {
      this.messages = args.messages;
    }
  }
};
TelescopeTestServer_TestRunAlarm_args.prototype = {};
TelescopeTestServer_TestRunAlarm_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRING) {
        this.txnId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.query = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size60 = 0;
        var _rtmp364;
        this.messages = [];
        var _etype63 = 0;
        _rtmp364 = input.readListBegin();
        _etype63 = _rtmp364.etype;
        _size60 = _rtmp364.size;
        for (var _i65 = 0; _i65 < _size60; ++_i65)
        {
          var elem66 = null;
          elem66 = new ttypes.Telescope();
          elem66.read(input);
          this.messages.push(elem66);
        }
        input.readListEnd();
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

TelescopeTestServer_TestRunAlarm_args.prototype.write = function(output) {
  output.writeStructBegin('TelescopeTestServer_TestRunAlarm_args');
  if (this.txnId != null) {
    output.writeFieldBegin('txnId', Thrift.Type.STRING, 1);
    output.writeString(this.txnId);
    output.writeFieldEnd();
  }
  if (this.query != null) {
    output.writeFieldBegin('query', Thrift.Type.STRING, 2);
    output.writeString(this.query);
    output.writeFieldEnd();
  }
  if (this.messages != null) {
    output.writeFieldBegin('messages', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRUCT, this.messages.length);
    for (var iter67 in this.messages)
    {
      if (this.messages.hasOwnProperty(iter67))
      {
        iter67 = this.messages[iter67];
        iter67.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TelescopeTestServer_TestRunAlarm_result = function(args) {
  this.success = null;
  this.iqe = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.iqe !== undefined) {
      this.iqe = args.iqe;
    }
  }
};
TelescopeTestServer_TestRunAlarm_result.prototype = {};
TelescopeTestServer_TestRunAlarm_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size68 = 0;
        var _rtmp372;
        this.success = [];
        var _etype71 = 0;
        _rtmp372 = input.readListBegin();
        _etype71 = _rtmp372.etype;
        _size68 = _rtmp372.size;
        for (var _i73 = 0; _i73 < _size68; ++_i73)
        {
          var elem74 = null;
          elem74 = new ttypes.Telescope();
          elem74.read(input);
          this.success.push(elem74);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.iqe = new ttypes.InvalidQueryException();
        this.iqe.read(input);
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

TelescopeTestServer_TestRunAlarm_result.prototype.write = function(output) {
  output.writeStructBegin('TelescopeTestServer_TestRunAlarm_result');
  if (this.success != null) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter75 in this.success)
    {
      if (this.success.hasOwnProperty(iter75))
      {
        iter75 = this.success[iter75];
        iter75.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.iqe != null) {
    output.writeFieldBegin('iqe', Thrift.Type.STRUCT, 1);
    this.iqe.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TelescopeTestServerClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this.seqid = 0;
    this._reqs = {};
};
TelescopeTestServerClient.prototype = {};
TelescopeTestServerClient.prototype.TestRunAlarm = function(txnId, query, messages, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_TestRunAlarm(txnId, query, messages);
};

TelescopeTestServerClient.prototype.send_TestRunAlarm = function(txnId, query, messages) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('TestRunAlarm', Thrift.MessageType.CALL, this.seqid);
  var args = new TelescopeTestServer_TestRunAlarm_args();
  args.txnId = txnId;
  args.query = query;
  args.messages = messages;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

TelescopeTestServerClient.prototype.recv_TestRunAlarm = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new TelescopeTestServer_TestRunAlarm_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.iqe) {
    return callback(result.iqe);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('TestRunAlarm failed: unknown result');
};
var TelescopeTestServerProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
TelescopeTestServerProcessor.prototype.process = function(input, output) {
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

TelescopeTestServerProcessor.prototype.process_TestRunAlarm = function(seqid, input, output) {
  var args = new TelescopeTestServer_TestRunAlarm_args();
  args.read(input);
  input.readMessageEnd();
  var result = new TelescopeTestServer_TestRunAlarm_result();
  this._handler.TestRunAlarm(args.txnId, args.query, args.messages, function (success) {
    result.success = success;
    output.writeMessageBegin("TestRunAlarm", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}


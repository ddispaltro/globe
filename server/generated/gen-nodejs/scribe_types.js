//
// Autogenerated by Thrift Compiler (0.7.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;
var ttypes = module.exports = {};
ttypes.ResultCode = {
'OK' : 0,
'TRY_LATER' : 1
};
var LogEntry = module.exports.LogEntry = function(args) {
  this.category = null;
  this.message = null;
  if (args) {
    if (args.category !== undefined) {
      this.category = args.category;
    }
    if (args.message !== undefined) {
      this.message = args.message;
    }
  }
};
LogEntry.prototype = {};
LogEntry.prototype.read = function(input) {
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
        this.category = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
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

LogEntry.prototype.write = function(output) {
  output.writeStructBegin('LogEntry');
  if (this.category != null) {
    output.writeFieldBegin('category', Thrift.Type.STRING, 1);
    output.writeString(this.category);
    output.writeFieldEnd();
  }
  if (this.message != null) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 2);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};


//
// Autogenerated by Thrift Compiler (0.7.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;
var ttypes = module.exports = {};
ttypes.fb_status = {
'DEAD' : 0,
'STARTING' : 1,
'ALIVE' : 2,
'STOPPING' : 3,
'STOPPED' : 4,
'WARNING' : 5
};
ttypes.IsMaster = {
'FALSE' : 0,
'TRUE' : 1,
'NA' : 2
};
var WorkMetric = module.exports.WorkMetric = function(args) {
  this.label = null;
  this.ops_count = null;
  this.rate_1m = null;
  this.rate_5m = null;
  this.rate_15m = null;
  this.mean_rate = null;
  this.min = null;
  this.max = null;
  this.mean_time = null;
  this.std_dev = null;
  this.pct_1 = null;
  this.pct_25 = null;
  this.pct_50 = null;
  this.pct_75 = null;
  this.pct_99 = null;
  this.active = null;
  this.errors = null;
  this.err_rate_1m = null;
  this.err_rate_5m = null;
  this.err_rate_15m = null;
  this.err_mean_rate = null;
  if (args) {
    if (args.label !== undefined) {
      this.label = args.label;
    }
    if (args.ops_count !== undefined) {
      this.ops_count = args.ops_count;
    }
    if (args.rate_1m !== undefined) {
      this.rate_1m = args.rate_1m;
    }
    if (args.rate_5m !== undefined) {
      this.rate_5m = args.rate_5m;
    }
    if (args.rate_15m !== undefined) {
      this.rate_15m = args.rate_15m;
    }
    if (args.mean_rate !== undefined) {
      this.mean_rate = args.mean_rate;
    }
    if (args.min !== undefined) {
      this.min = args.min;
    }
    if (args.max !== undefined) {
      this.max = args.max;
    }
    if (args.mean_time !== undefined) {
      this.mean_time = args.mean_time;
    }
    if (args.std_dev !== undefined) {
      this.std_dev = args.std_dev;
    }
    if (args.pct_1 !== undefined) {
      this.pct_1 = args.pct_1;
    }
    if (args.pct_25 !== undefined) {
      this.pct_25 = args.pct_25;
    }
    if (args.pct_50 !== undefined) {
      this.pct_50 = args.pct_50;
    }
    if (args.pct_75 !== undefined) {
      this.pct_75 = args.pct_75;
    }
    if (args.pct_99 !== undefined) {
      this.pct_99 = args.pct_99;
    }
    if (args.active !== undefined) {
      this.active = args.active;
    }
    if (args.errors !== undefined) {
      this.errors = args.errors;
    }
    if (args.err_rate_1m !== undefined) {
      this.err_rate_1m = args.err_rate_1m;
    }
    if (args.err_rate_5m !== undefined) {
      this.err_rate_5m = args.err_rate_5m;
    }
    if (args.err_rate_15m !== undefined) {
      this.err_rate_15m = args.err_rate_15m;
    }
    if (args.err_mean_rate !== undefined) {
      this.err_mean_rate = args.err_mean_rate;
    }
  }
};
WorkMetric.prototype = {};
WorkMetric.prototype.read = function(input) {
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
        this.label = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.ops_count = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.DOUBLE) {
        this.rate_1m = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.DOUBLE) {
        this.rate_5m = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.DOUBLE) {
        this.rate_15m = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.DOUBLE) {
        this.mean_rate = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.DOUBLE) {
        this.min = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.DOUBLE) {
        this.max = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.DOUBLE) {
        this.mean_time = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.DOUBLE) {
        this.std_dev = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.DOUBLE) {
        this.pct_1 = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.DOUBLE) {
        this.pct_25 = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.DOUBLE) {
        this.pct_50 = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.DOUBLE) {
        this.pct_75 = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.DOUBLE) {
        this.pct_99 = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 16:
      if (ftype == Thrift.Type.I64) {
        this.active = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 17:
      if (ftype == Thrift.Type.I64) {
        this.errors = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 18:
      if (ftype == Thrift.Type.DOUBLE) {
        this.err_rate_1m = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 19:
      if (ftype == Thrift.Type.DOUBLE) {
        this.err_rate_5m = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 20:
      if (ftype == Thrift.Type.DOUBLE) {
        this.err_rate_15m = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 21:
      if (ftype == Thrift.Type.DOUBLE) {
        this.err_mean_rate = input.readDouble();
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

WorkMetric.prototype.write = function(output) {
  output.writeStructBegin('WorkMetric');
  if (this.label != null) {
    output.writeFieldBegin('label', Thrift.Type.STRING, 1);
    output.writeString(this.label);
    output.writeFieldEnd();
  }
  if (this.ops_count != null) {
    output.writeFieldBegin('ops_count', Thrift.Type.I64, 2);
    output.writeI64(this.ops_count);
    output.writeFieldEnd();
  }
  if (this.rate_1m != null) {
    output.writeFieldBegin('rate_1m', Thrift.Type.DOUBLE, 3);
    output.writeDouble(this.rate_1m);
    output.writeFieldEnd();
  }
  if (this.rate_5m != null) {
    output.writeFieldBegin('rate_5m', Thrift.Type.DOUBLE, 4);
    output.writeDouble(this.rate_5m);
    output.writeFieldEnd();
  }
  if (this.rate_15m != null) {
    output.writeFieldBegin('rate_15m', Thrift.Type.DOUBLE, 5);
    output.writeDouble(this.rate_15m);
    output.writeFieldEnd();
  }
  if (this.mean_rate != null) {
    output.writeFieldBegin('mean_rate', Thrift.Type.DOUBLE, 6);
    output.writeDouble(this.mean_rate);
    output.writeFieldEnd();
  }
  if (this.min != null) {
    output.writeFieldBegin('min', Thrift.Type.DOUBLE, 7);
    output.writeDouble(this.min);
    output.writeFieldEnd();
  }
  if (this.max != null) {
    output.writeFieldBegin('max', Thrift.Type.DOUBLE, 8);
    output.writeDouble(this.max);
    output.writeFieldEnd();
  }
  if (this.mean_time != null) {
    output.writeFieldBegin('mean_time', Thrift.Type.DOUBLE, 9);
    output.writeDouble(this.mean_time);
    output.writeFieldEnd();
  }
  if (this.std_dev != null) {
    output.writeFieldBegin('std_dev', Thrift.Type.DOUBLE, 10);
    output.writeDouble(this.std_dev);
    output.writeFieldEnd();
  }
  if (this.pct_1 != null) {
    output.writeFieldBegin('pct_1', Thrift.Type.DOUBLE, 11);
    output.writeDouble(this.pct_1);
    output.writeFieldEnd();
  }
  if (this.pct_25 != null) {
    output.writeFieldBegin('pct_25', Thrift.Type.DOUBLE, 12);
    output.writeDouble(this.pct_25);
    output.writeFieldEnd();
  }
  if (this.pct_50 != null) {
    output.writeFieldBegin('pct_50', Thrift.Type.DOUBLE, 13);
    output.writeDouble(this.pct_50);
    output.writeFieldEnd();
  }
  if (this.pct_75 != null) {
    output.writeFieldBegin('pct_75', Thrift.Type.DOUBLE, 14);
    output.writeDouble(this.pct_75);
    output.writeFieldEnd();
  }
  if (this.pct_99 != null) {
    output.writeFieldBegin('pct_99', Thrift.Type.DOUBLE, 15);
    output.writeDouble(this.pct_99);
    output.writeFieldEnd();
  }
  if (this.active != null) {
    output.writeFieldBegin('active', Thrift.Type.I64, 16);
    output.writeI64(this.active);
    output.writeFieldEnd();
  }
  if (this.errors != null) {
    output.writeFieldBegin('errors', Thrift.Type.I64, 17);
    output.writeI64(this.errors);
    output.writeFieldEnd();
  }
  if (this.err_rate_1m != null) {
    output.writeFieldBegin('err_rate_1m', Thrift.Type.DOUBLE, 18);
    output.writeDouble(this.err_rate_1m);
    output.writeFieldEnd();
  }
  if (this.err_rate_5m != null) {
    output.writeFieldBegin('err_rate_5m', Thrift.Type.DOUBLE, 19);
    output.writeDouble(this.err_rate_5m);
    output.writeFieldEnd();
  }
  if (this.err_rate_15m != null) {
    output.writeFieldBegin('err_rate_15m', Thrift.Type.DOUBLE, 20);
    output.writeDouble(this.err_rate_15m);
    output.writeFieldEnd();
  }
  if (this.err_mean_rate != null) {
    output.writeFieldBegin('err_mean_rate', Thrift.Type.DOUBLE, 21);
    output.writeDouble(this.err_mean_rate);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var EventMetric = module.exports.EventMetric = function(args) {
  this.label = null;
  this.count = null;
  this.rate_1m = null;
  this.rate_5m = null;
  this.rate_15m = null;
  this.rate_mean = null;
  if (args) {
    if (args.label !== undefined) {
      this.label = args.label;
    }
    if (args.count !== undefined) {
      this.count = args.count;
    }
    if (args.rate_1m !== undefined) {
      this.rate_1m = args.rate_1m;
    }
    if (args.rate_5m !== undefined) {
      this.rate_5m = args.rate_5m;
    }
    if (args.rate_15m !== undefined) {
      this.rate_15m = args.rate_15m;
    }
    if (args.rate_mean !== undefined) {
      this.rate_mean = args.rate_mean;
    }
  }
};
EventMetric.prototype = {};
EventMetric.prototype.read = function(input) {
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
        this.label = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.count = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.DOUBLE) {
        this.rate_1m = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.DOUBLE) {
        this.rate_5m = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.DOUBLE) {
        this.rate_15m = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.DOUBLE) {
        this.rate_mean = input.readDouble();
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

EventMetric.prototype.write = function(output) {
  output.writeStructBegin('EventMetric');
  if (this.label != null) {
    output.writeFieldBegin('label', Thrift.Type.STRING, 1);
    output.writeString(this.label);
    output.writeFieldEnd();
  }
  if (this.count != null) {
    output.writeFieldBegin('count', Thrift.Type.I64, 2);
    output.writeI64(this.count);
    output.writeFieldEnd();
  }
  if (this.rate_1m != null) {
    output.writeFieldBegin('rate_1m', Thrift.Type.DOUBLE, 3);
    output.writeDouble(this.rate_1m);
    output.writeFieldEnd();
  }
  if (this.rate_5m != null) {
    output.writeFieldBegin('rate_5m', Thrift.Type.DOUBLE, 4);
    output.writeDouble(this.rate_5m);
    output.writeFieldEnd();
  }
  if (this.rate_15m != null) {
    output.writeFieldBegin('rate_15m', Thrift.Type.DOUBLE, 5);
    output.writeDouble(this.rate_15m);
    output.writeFieldEnd();
  }
  if (this.rate_mean != null) {
    output.writeFieldBegin('rate_mean', Thrift.Type.DOUBLE, 6);
    output.writeDouble(this.rate_mean);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};


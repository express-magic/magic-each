"use strict";

exports.each = each;
exports.count = count;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _magicTypes = require("magic-types");

var isA = _magicTypes.isA;
var isO = _magicTypes.isO;
var isFn = _magicTypes.isFn;

function each(arrOrObj, fn) {
  fn = fn || function () {};

  if (isA(arrOrObj)) {
    for (var i = 0; i < arrOrObj.length; i++) {
      if (isFn(fn)) {
        fn(arrOrObj[i], i);
      }
    }
  } else if (isO(arrOrObj)) {
    for (var key in arrOrObj) {
      if (arrOrObj.hasOwnProperty(key) && isFn(fn)) {
        fn(arrOrObj[key], key);
      }
    }
  }
}

function count(arrOrObj, cb) {
  var cnt = 0;
  each(arrOrObj, function () {
    return cnt++;
  });

  if (isFn(cb)) {
    return cb(cnt);
  }

  return cnt;
}

var loops = {
  each: each,
  count: count
};

exports["default"] = loops;

//# sourceMappingURL=index.js.map
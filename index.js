"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var is = _interopRequire(require("is"));

var loops = {
  each: function each(arrOrObj, fn) {
    fn = fn || function () {};

    if (is.array(arrOrObj)) {
      for (var i = 0; i < arrOrObj.length; i++) {
        if (is.fn(fn)) {
          fn(arrOrObj[i], i);
        }
      }
    } else if (is.a(arrOrObj, "object")) {

      for (var key in arrOrObj) {
        if (arrOrObj.hasOwnProperty(key) && is.fn(fn)) {
          fn(arrOrObj[key], key);
        }
      }
    }
  },

  count: function count(arrOrObj, cb) {
    var cnt = 0;
    loops.each(arrOrObj, function (item) {
      cnt++;
    });

    if (is.fn(cb)) {
      return cb(cnt);
    }

    return cnt;
  }
};

module.exports = loops;

//# sourceMappingURL=index.js.map
import is from 'is';

var loops = {
  each (arrOrObj, fn) {
    fn = fn || () => {};

    if ( is.array(arrOrObj) ) {
      for ( let i = 0; i < arrOrObj.length; i++ ) {
        if ( is.fn(fn) ) {
          fn(arrOrObj[i], i);
        }
      }
    } else if ( is.a(arrOrObj, 'object') ) {

      for ( let key in arrOrObj ) {
        if ( arrOrObj.hasOwnProperty(key) && is.fn(fn) ) {
          fn(arrOrObj[key], key);
        }
      }
    }
  }

, count(arrOrObj, cb) {
    var cnt = 0;
    loops.each(arrOrObj, (item) => {
      cnt++;
    });

    if ( is.fn(cb) ) {
      return cb(cnt);
    }

    return cnt;
  }
};

export default loops;

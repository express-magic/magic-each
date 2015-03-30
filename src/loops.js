import {isA, isO, isF} from 'magic-types';

export function each (arrOrObj, fn) {
  fn = fn || () => {};

  if ( isA(arrOrObj) ) {
    for ( let i = 0; i < arrOrObj.length; i++ ) {
      if ( isF(fn) ) {
        fn(arrOrObj[i], i);
      }
    }
  } else if ( isO(arrOrObj) ) {
    for ( let key in arrOrObj ) {
      if ( arrOrObj.hasOwnProperty(key) && isF(fn) ) {
        fn(arrOrObj[key], key);
      }
    }
  }
}

export function count(arrOrObj, cb) {
  var cnt = 0;
  each(arrOrObj, () => cnt++);

  if ( isF(cb) ) { return cb(cnt); }

  return cnt;
}

var loops = {
    each
  , count
}

export default loops;

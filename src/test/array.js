import {test} from 'tap';
import {each} from '../index.js';


test('if each loops over each item in an array', (t) => {
  var arr = [
      "value1"
    , "value2"
    ]
  , testArr = [ 0, 1 ]
  , cnt = 0
  ;
  each(arr, (val, key) => {
    t.equal(testArr[cnt], key, 'testing if arraykeys are correct');
    cnt++;
  });
  t.equal(cnt, 2, 'testing if loop ran for correct number of times');
  t.end();
});

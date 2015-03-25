import {test} from 'tap';
import {each} from '../index.js';

test('if each loops over each item in an object', (t) => {
  var obj = {
      value1: "value1"
    , value2: "value2"
    }
  , testArr = [
      'value1'
    , 'value2'
  ]
  , count = 0
  ;

  each(obj, (val, key) => {
    t.equal(testArr[count], key, 'testing if arraykey is correct');
    count++;
  });
  t.equal(count, 2, 'testing if loop ran for correct number of times');
  t.end();
});

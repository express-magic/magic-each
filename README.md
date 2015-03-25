# magic-loops
loops.each loops over arrays and objects

loops.count counts the number of values in arrays and objects

usage:
```js
  var each = require('magic-loops').each;
  var count = require('magic-loops').count;
  //alternative:
  /*
  var loops = require('magic-loops');
  var each = loops.each;
  var count = loops.count;
  */

  var obj = {
    testValue: 'testing'
  };
  each(obj, function(val, key) {
    console.log('val', val, 'key', key);
  });

  var cnt = count(obj);
  console.log('object count', cnt);

  var arr = [
    'testing'
  ];
  each(arr, function(val, i) {
    console.log('val', val, 'i', i);
  });
  
  var cnt = count(arr);
  console.log('array count', cnt);
```

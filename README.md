# magic-each
loops over arrays and objects


usage:
```js
  var each = require('magic-each');

  var obj = {
    testValue: 'testing'
  };
  each(obj, function(val, key) {
    console.log('val', val, 'key', key);
  });
  
  var arr = [
    'testing'
  ];
  each(arr, function(val, i) {
    console.log('val', val, 'i', i);
  });
```

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var a = 1,
    b = 2;
c = a + b;
console.log(c);
[1, 2, 3].map(function (item) {
  return item + 'item';
});

// es6的大部分功能，其实es5也是能实现的，只不过不够优雅
var zmm = { name: '朱萌萌', hometown: '南昌' };
zmm = _extends({}, zmm, { "company": '新浪' });
console.log(zmm);
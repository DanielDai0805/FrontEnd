var less = require('less');
/**
	1 利用npm安装less模块(npm install less)
	2 在cmd中输入node  xxx.js
*/
less.render('.class { width: (1 + 1) }', function (e, output) {
  console.log(output.css);
});
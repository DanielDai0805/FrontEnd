var less = require('less');
/**
	1 ����npm��װlessģ��(npm install less)
	2 ��cmd������node  xxx.js
*/
less.render('.class { width: (1 + 1) }', function (e, output) {
  console.log(output.css);
});
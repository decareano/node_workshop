var fs = require('fs');

var pinga = fs.readFileSync(process.argv[2], 'utf8');
//console.log(pinga.toString());

// var length = 0;
// for (var i = 0; i < pinga.length; ++i) {
// 	if(pinga[i] == s)
// 		length++;
// }

var lines = pinga.split("\n");
console.log(lines.length-1);










// var fs = require('fs');

// var file = process.argv[2];
// var buff = fs.readFileSync(file);
// var str = buff.toString();
// var str_arr = str.split('\n');
// var newline_length = str_arr.length-1;

// console.log(newline_length);


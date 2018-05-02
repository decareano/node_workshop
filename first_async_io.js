var mymodule = require('./mymodule.js');
var fs = require('fs');
var ext = '.' + process.argv[3];
console.log(ext);
var path = require('path');
var folder = process.argv[2];
 
fs.readdir(folder, function(err, items) {
    //console.log(items);
 
    // for (var i=0; i<items.length; i++) {
    //     console.log(items[i]);
    // }
    if (err) return console.log(err);
    items.forEach(function(item) {
    	if (path.extname(item) === ext) {
    		console.log(item);
    	}
    });
});
 
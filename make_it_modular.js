
var fs = require('fs');


var path = require('path');

module.exports = function(dirName, fileExt, callback) {


    fs.readdir(dirName, function(err, items) {
        if (err) return console.log(err);
        var ext = '.' + fileExt;
        var result = [];
        items.forEach(function(item) {
    	   if (path.extname(item) === ext) {
    		console.log(item);
    	   }
        });
    });

};
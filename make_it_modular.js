var fs = require('fs');
var path = require('path');

 module.exports = function(dirName, fileExt, callback) {


    fs.readdir(dirName, function(err, items) {
        if (err) return callback(err);
        var result = [];
        var ext = '.' + fileExt;
        
        

        items.forEach(function(item) {
    	   if (path.extname(item) === ext) {
    		result.push(item);
    	   }
        });
    
        return callback(null, result);
        

    });
    
    
};

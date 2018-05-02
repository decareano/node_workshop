var mymodule = require('./make_it_modular.js');

mymodule(process.argv[2], process.argv[3], function(err, items) {
    if (err) return console.error(err);
    items.forEach(function(item) {
           console.log(item);
        });
});



 
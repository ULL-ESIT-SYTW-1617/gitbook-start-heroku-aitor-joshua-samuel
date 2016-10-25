var exec = require('child_process').exec;
var fs = require('fs');



var initialize = () => {

    fs.appendFile('gulpfile.js', "", function(err) {
        if (err)
            console.error(err);
    });
}

var deploy = (ipiaas, pathiaas) => {
    function puts(error, stdout, stderr) {
        console.log(stdout)
    }
    exec("", puts);
};

module.exports.initialize = initialize;
module.exports.deploy = deploy;

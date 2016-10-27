var exec = require('child_process').exec;
var fs = require('fs');



var initialize = () => {

    fs.appendFile('gulpfile.js', "", function(err) {
        if (err)
            console.error(err);
    });
}

var deploy = () => {
    function puts(error, stdout, stderr) {
      if(stdout){
        console.log(stdout)
      }
      if(stderr){
        console.log(stderr)
      }
    }
    exec("git add .", puts);
    exec('git commit -m "Modificando" ', puts);
    exec("git push heroku master", puts);
};

module.exports.initialize = initialize;
module.exports.deploy = deploy;

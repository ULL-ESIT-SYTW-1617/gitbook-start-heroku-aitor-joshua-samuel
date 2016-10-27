var exec = require('child_process').exec;
var fs = require('fs');
var fsExtended = require('fs-extended');
var path = require('path');

var initialize = () => {

  var secondPath = path.resolve(__dirname, "./template")
    fsExtended.copyDir(secondPath, ".", function(err) {
        if (err)
            console.error(err)
    });

    fs.appendFile('gulpfile.js', "var heroku = require('gitbook-start-heroku-ull-es-aitor-joshua-samuel');\ngulp.task('deploy-heroku',function() {\n\theroku.deploy();\n});", function(err) {
        if (err)
            console.error(err);
    });
    function puts(error, stdout, stderr) {
      if(stdout){
        console.log(stdout)
      }
      if(stderr){
        console.log(stderr)
      }
    }
    exec('git add .', puts);
    exec('git commit -m "Modificando" ', puts);
    exec('heroku create',puts);
    exec('git push heroku master', puts);
    exec('heroku ps:scale=1',puts);
    exec('heroku open',puts);
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

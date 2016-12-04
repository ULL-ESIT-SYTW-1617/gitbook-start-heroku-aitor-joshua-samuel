var fs = require('fs');
var fsExtended = require('fs-extended');
var path = require('path');

exports.createDir = (strategy) => {

    var secondPath = path.resolve(__dirname, "../" + strategy);
    fsExtended.copyDir(secondPath, ".", (err) => {
        if (err)
            console.error(err);
    });

    fs.appendFile('gulpfile.js', "\nvar heroku = require('gitbook-start-heroku-aitor-joshua-samuel');\ngulp.task('deploy-heroku',function() {\n\theroku.deploy();\n});\n", (err) => {
        if (err)
            console.error(err);
    });

    if (strategy == 'local') {
        fs.appendFile('gulpfile.js', "\nvar addUser = require('./models'); \ngulp.task('new-user', function(cb) {\n\treturn addUser.createUser();\n});", (err) => {
            if (err)
                console.error(err);
        });
    }
};

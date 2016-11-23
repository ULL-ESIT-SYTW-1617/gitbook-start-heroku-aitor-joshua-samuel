var fs = require('fs');
var fsExtended = require('fs-extended');
var path = require('path');
var inquirer = require('inquirer');
var Heroku = require('heroku-client');


var initialize = (strategy) => {

    var secondPath = path.resolve(__dirname, "./" + strategy)
    fsExtended.copyDir(secondPath, ".", function(err) {
        if (err)
            console.error(err)
    });

    fs.appendFile('gulpfile.js', "var heroku = require('gitbook-start-heroku-aitor-joshua-samuel');\ngulp.task('deploy-heroku',function() {\n\theroku.deploy();\n});", function(err) {
        if (err)
            console.error(err);
    });
    var name;
    var token;
    var body;
    var promise = new Promise(function(resolve, reject) {

        var questions = [{
            type: 'input',
            message: 'Introduce tu token de Heroku: ',
            name: 'herokuToken'
        }, {
            type: 'input',
            name: 'herokuName',
            message: 'Introduzca el nombre de su app en Heroku: ',
        }];

        inquirer.prompt(questions).then(function(answers) {
            if (answers) {
                resolve(answers);
            } else {
                reject("No answers")
            }
        });

    });
    promise.then(function(data) {

        token = data.herokuToken;
        name = data.herokuName
        var h = new Heroku({
            token
        });
        body = h.post('/apps', {
            body: {
                name
            }
        });
        console.log("Ficheros de Heroku desplegados");
        console.log("Aplicación creada: " + name);
        require('simple-git')()
            .init()
            .addRemote('heroku', 'https://git.heroku.com/' + name + '.git')

    }, function(err) {
        console.log("Fallo");
    });

}

var deploy = () => {
    require('simple-git')()
        .add('.')
        .commit("commit")
        .push(['heroku', 'master'], function() {});
};

module.exports.initialize = initialize;
module.exports.deploy = deploy;

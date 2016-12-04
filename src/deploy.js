var inquirer = require('inquirer');
var Heroku = require('heroku-client');

exports.deployHeroku = () => {
    var name;
    var token;
    var body;
    var promise = new Promise((resolve, reject) => {

        var questions = [{
            type: 'input',
            message: 'Introduce tu token de Heroku: ',
            name: 'herokuToken'
        }, {
            type: 'input',
            name: 'herokuName',
            message: 'Introduzca el nombre de su app en Heroku: ',
        }];

        inquirer.prompt(questions).then((answers) => {
            if (answers) {
                resolve(answers);
            } else {
                reject("No answers");
            }
        });

    });
    promise.then((data) => {

        token = data.herokuToken;
        name = data.herokuName;
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
            .addRemote('heroku', 'https://git.heroku.com/' + name + '.git');

    }, (err) => {
        console.log("Fallo");
    });
};

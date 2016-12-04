var cli = require('./src');

var initialize = (strategy) => {

    cli.deploy.createDir(strategy);
    cli.dependencias.addDeps();

};

var deploy = () => {
    require('simple-git')()
        .add('.')
        .commit("commit")
        .push(['heroku', 'master'], () => {});
};

module.exports.initialize = initialize;
module.exports.deploy = deploy;

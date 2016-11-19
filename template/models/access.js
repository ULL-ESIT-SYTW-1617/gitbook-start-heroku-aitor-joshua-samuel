var github = require('octonode');
var data = require("../userData.json");

var access = (perfil) => {
    var github = require('octonode');
    var client = github.client(data.token);
    var ghorg = client.org(data.org);
    var pertenece;
    ghorg.member(perfil.username, (err, org) => {
        if (err) {
            console.log(err);
        }
        pertenece = org;
    });

    return pertenece;
}

module.exports.access = access;

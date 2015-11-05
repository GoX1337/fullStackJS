
var chalk = require('chalk');
var titre = 'Serveur';

exports.accueil = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log(chalk.green.bold('accueil page requested.'));
    res.end(titre + ': Page accueil!');
};

exports.toto = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log(chalk.green.bold('toto page requested.'));
    res.end(titre + ': Page toto!');
};

exports.erreur404 = function (req, res) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    console.log(chalk.red.bold('404 page not found.'));
    res.end(titre + ': Not found!');
};
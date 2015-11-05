
var http = require('http');
var chalk = require('chalk');
var router = require('./router.js');

http.createServer(function (req, res) {
    router(req, res);
}).listen(8080);

console.log(chalk.blue.bold('Serveur démarré sur 8080'));


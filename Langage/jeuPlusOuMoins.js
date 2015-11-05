/* Exercise Plus ou moins 
 * 
 * Deviner nb aléatoire en donnant des indications plus grand ou plus petit
 * v1 : nb illimité d'essai
 * v2 : limiter à 7 essais
 * v3 : stocker dans un tableau les essais et les réafficher entre chaque tour
 * v4 : gérer les erreurs (saisie <0 ou >100, sasie de string...Etc)
 * */
'use strict';

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var nbAlea = Math.floor(Math.random() * 101);
var nbEssai = 0;
var dernierEssais = [];
var nbEssaiMax = 7;

function jouer() {

    rl.question("Devinez le nombre entre 0 et 100 : ", function (answer) {
        nbEssai++;
        console.log(nbAlea);
        dernierEssais.push(answer);

        if (isNaN(parseInt(answer)) || Number(answer) < 0 || Number(answer) > 100) {
            console.log("Erreur : Il faut saisir un nombre entre 0 et 100");
        } else if (Number(answer) === nbAlea) {
            console.log("Gagné");
            return;
        } else if (Number(answer) > nbAlea) {
            console.log(answer + " est trop grand... (nb essai : " + nbEssai + ") [" + dernierEssais.toString() + "]");
        } else {
            console.log(answer + " est trop petit... (nb essai : " + nbEssai + ") [" + dernierEssais.toString() + "]");
        }
        if (nbEssai === nbEssaiMax) {
            console.log("Perdu...");
            rl.close();
            return;
        }
        jouer();
    });
}
jouer();


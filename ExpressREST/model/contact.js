var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var contactSchema = new Schema({
    prenom:  String,
    nom: String
});


module.exports = contactSchema;
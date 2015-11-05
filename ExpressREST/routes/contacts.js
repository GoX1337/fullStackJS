
var express = require('express');
var router = express.Router();

var contactSchema = require('../model/contact');
var mongoose = require('mongoose');

router.use(function (req, res, next) {
    var db = mongoose.createConnection('mongodb://localhost/addressbook');

    db.on('error', function (err) {
        next(err);
    });
    db.once('open', function () {
        req.Contact = db.model('contacts', contactSchema);
        next();
    });

    // action after response
    var afterResponse = function() {
        db.close(function () {
            console.log('Mongoose connection disconnected');
        });
    }

    // hooks to execute after response
    res.on('finish', afterResponse);
    res.on('close', afterResponse);
});

/* GET contacts list */
router.get('/', function (req, res, next) {
    var Contact = req.Contact;
    Contact.find(function (err, contacts) {
        if (err)
            next(err);
        res.json(contacts);
    });
});

/* POST add contact */
router.post('/', function (req, res, next) {
    var Contact = req.Contact;
    var contact = new Contact(req.body);
    contact.save(function(err){
        "use strict";
        if(err)
            return next(err);
        res.status(201);
        res.json(contact);
    });
});

/* GET show contact */
router.get('/:id', function (req, res, next) {
    var Contact = req.Contact;
    Contact.findOne({"_id": req.params.id}, function(err, contact){
        "use strict";
        if(err)
            return next(err);
        res.json(contact);
    });
});

/* POST modify contact */
router.post('/:id', function (req, res, next) {
    var Contact = req.Contact;
    Contact.findByIdAndUpdate({"_id": req.params.id}, req.body, function(err, offer){
        "use strict";
        if(err)
            return next(err);
        res.json({});
    });
});

/* DELETE delete contact */
router.delete('/:id', function (req, res, next) {
    var Contact = req.Contact;
    Contact.findOneAndRemove({"_id": req.params.id}, function(err, offer){
        "use strict";
        if(err)
            return next(err);
        res.status(204);
        res.json({});
    });
});

module.exports = router;

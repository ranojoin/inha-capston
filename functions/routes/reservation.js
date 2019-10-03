const functions = require('firebase-functions');
var express = require("express");
var router = express.Router();
var firebaseDatabase = require('../javascript/fbdatabase.js');

router.post('/', function(req, res, next){

    var index = req.body.index;
    console.log("fuckyou");
    console.log(req.body);
    console.log(index);
    res.render('reservation.html', {index : index});


})

module.exports = router;
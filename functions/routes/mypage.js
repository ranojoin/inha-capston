const functions = require('firebase-functions');
var express = require("express");
var router = express.Router();
var firebaseDatabase = require('../javascript/fbdatabase.js');

router.get('/', function(req, res, next){
    res.render('mypage.html', {name:"member"});


})

module.exports = router;
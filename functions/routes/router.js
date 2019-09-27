const functions = require('firebase-functions');
var express = require("express");
var router = express.Router();

var reservation = require('./reservation');
var mypage = require('./mypage');
var managepage = require('./managepage');
var login = require('./login');
var signup = require('./signup');
var test = require('./test');
var test2 = require('./test2');



router.use('/reservation', reservation);
router.use('/mypage', mypage);
router.use('/managepage', managepage);
router.use('/login', login);
router.use('/signup', signup);
router.use('/test', test);
router.use('/test2', test2);






module.exports = router;
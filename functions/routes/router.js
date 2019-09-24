const functions = require('firebase-functions');
var express = require("express");
var router = express.Router();

var reservation = require('./reservation');
var mypage = require('./mypage');
var managepage = require('./managepage');


router.use('/reservation', reservation);
router.use('/mypage', mypage);
router.use('/managepage', managepage);





module.exports = router;
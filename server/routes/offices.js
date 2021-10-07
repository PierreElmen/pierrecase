var express = require('express');
var router = express.Router();

var db = require('../db/db');

/* GET office listing. */
router.get('/', function (req, res, next) {
	res.json({
		data: db.getFullDB(),
	});
});

module.exports = router;

import dataArray from './offices';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.json({
		data: dataArray.offices[0].rooms,
	});
});

module.exports = router;

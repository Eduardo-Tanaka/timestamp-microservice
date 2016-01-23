var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API Basejump: Timestamp microservice ' });
});

router.get('/:date', function(req, res, next){
	var date = req.params.date;
	var unix;
	var natural;
	var json = {};
	if(!Number(date)) {
		json.unix = Date.parse(json.natural);
		json.natural = moment(date).format("MMMM D, YYYY");
		if(json.natural === "Invalid date") {
			json.natural = null;
		}
	} else {
		json.unix = parseFloat(date);
		json.natural = moment.unix(date).format("MMMM D, YYYY");
	}

	res.send(json);
});

module.exports = router;

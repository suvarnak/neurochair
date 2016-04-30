var express = require('express');
var gpio = require('pi-gpio');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Neurochair' });
});

router.get('/FORWARD', function(req, res, next) {
        res.render('index', { title: 'Neurochair' });
        gpio.write(22, 1, router.reportFailure, router.reportSucess);
        gpio.write(18, 0, router.reportFailure, router.reportSucess);
        gpio.write(19, 1, router.reportFailure, router.reportSucess);
        gpio.write(21, 0, router.reportFailure, router.reportSucess);
        gpio.write(16, 1, router.reportFailure, router.reportSucess);
        gpio.write(23, 1, router.reportFailure, router.reportSucess);

        setTimeout(function() {
                gpio.write(16, 0, router.reportFailure, router.reportSucess);
                gpio.write(23, 0, router.reportFailure, router.reportSucess);
                gpio.write(22, 0, router.reportFailure, router.reportSucess);
                gpio.write(18, 0, router.reportFailure, router.reportSucess);
                gpio.write(19, 0, router.reportFailure, router.reportSucess);
                gpio.write(21, 0, router.reportFailure, router.reportSucess);

        }, 5000);
});

router.get('/REVERSE', function(req, res, next) {
        res.render('index', { title: 'Neurochair' });
        gpio.write(22, 0, router.reportFailure, router.reportSucess);
        gpio.write(18, 1, router.reportFailure, router.reportSucess);
        gpio.write(19, 0, router.reportFailure, router.reportSucess);
        gpio.write(21, 1, router.reportFailure, router.reportSucess);
        gpio.write(16, 1, router.reportFailure, router.reportSucess);
        gpio.write(23, 1, router.reportFailure, router.reportSucess);

        setTimeout(function() {
                gpio.write(16, 0, router.reportFailure, router.reportSucess);
                gpio.write(23, 0, router.reportFailure, router.reportSucess);
                gpio.write(22, 0, router.reportFailure, router.reportSucess);
                gpio.write(18, 0, router.reportFailure, router.reportSucess);
                gpio.write(19, 0, router.reportFailure, router.reportSucess);
                gpio.write(21, 0, router.reportFailure, router.reportSucess);

        }, 5000);
});

router.get('/RIGHT', function(req, res, next) {
        res.render('index', { title: 'Neurochair' });
        gpio.write(22, 1, router.reportFailure, router.reportSucess);
        gpio.write(18, 0, router.reportFailure, router.reportSucess);
        gpio.write(19, 0, router.reportFailure, router.reportSucess);
        gpio.write(21, 0, router.reportFailure, router.reportSucess);
        gpio.write(16, 1, router.reportFailure, router.reportSucess);
        gpio.write(23, 0, router.reportFailure, router.reportSucess);

        setTimeout(function() {
                gpio.write(16, 0, router.reportFailure, router.reportSucess);
                gpio.write(23, 0, router.reportFailure, router.reportSucess);
                gpio.write(22, 0, router.reportFailure, router.reportSucess);
                gpio.write(18, 0, router.reportFailure, router.reportSucess);
                gpio.write(19, 0, router.reportFailure, router.reportSucess);
                gpio.write(21, 0, router.reportFailure, router.reportSucess);

        }, 5000);
});

router.get('/LEFT', function(req, res, next) {
        res.render('index', { title: 'Neurochair' });
        gpio.write(22, 0, router.reportFailure, router.reportSucess);
        gpio.write(18, 0, router.reportFailure, router.reportSucess);
        gpio.write(19, 1, router.reportFailure, router.reportSucess);
        gpio.write(21, 0, router.reportFailure, router.reportSucess);
        gpio.write(16, 0, router.reportFailure, router.reportSucess);
        gpio.write(23, 1, router.reportFailure, router.reportSucess);

        setTimeout(function() {
                gpio.write(16, 0, router.reportFailure, router.reportSucess);
                gpio.write(23, 0, router.reportFailure, router.reportSucess);
                gpio.write(22, 0, router.reportFailure, router.reportSucess);
                gpio.write(18, 0, router.reportFailure, router.reportSucess);
                gpio.write(19, 0, router.reportFailure, router.reportSucess);
                gpio.write(21, 0, router.reportFailure, router.reportSucess);

        }, 5000);
});

router.reportSuccess = function(err) {
	console.log(err);
	console.log("changed");
};

router.reportFailure = function(err) {
	console.log(err);
	console.log("Failed");
};
module.exports = router;

(function () {
    'user strict';

    var express = require('express'),
        router = express.Router();

    router.get('/', function (req, res) {
        res.render('index', {title: 'Cucumber json html renderer'});
    });

    module.exports = router;
}());
(function () {
    'user strict';

    var express = require('express'),
        parser = require('../controller/json_loader').getParser(),
        router = express.Router();

    router.get('/', function (req, res) {
        res.render('index', {title: 'Cucumber.json renderer', features: parser.getFeatures()});
    });

    module.exports = router;
}());
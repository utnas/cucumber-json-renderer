(function () {
    'user strict';

    var express = require('express'),
        parser = require('../controller/json_loader').getParser(),
        router = express.Router();

    router.get('/', function (req, res) {
        res.render('featuresSuccess', {title: 'Cucumber.json renderer', featuresSuccess: parser.getFeatures()});
    });

    module.exports = router;
}());
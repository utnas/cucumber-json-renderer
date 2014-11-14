(function () {
    'user strict';

    var express = require('express'),
        data = require('../tests/parser/data'),
        Parser = require('../model/parser'),
        router = express.Router();

    router.get('/', function (req, res) {
        var parser = new Parser();
        parser.parse(data.features);

        res.render('features', {features: parser.getFeatures()});
    });

    module.exports = router;
}());
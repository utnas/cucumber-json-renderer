(function () {
    'use strict';

    var express = require('express'),
        parser = require('../controller/json_loader'),
        api = express();

    // Get features
    //GET /api/features
    api.get('/features', function (req, res) {
        res.send(
            [{"features": 'features'}]
        );
    });

    // Get a feature
    //GET /api/features/id
    api.get('/features/:id', function (req, res) {
        res.send(
            [{'idFeature': '/features/:id'}]
        );
    });

    // Get scenario
    // GET /api/features/id/id
    api.get('/features/:id/:id', function (req, res) {
        res.send(
            [{'scenario': 'id/idScenario'}]
        );
    });

    module.exports = api;
}());
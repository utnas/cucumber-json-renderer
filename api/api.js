(function () {
    'use strict';

    var express = require('express'),
        api = express(),
        parser = require('../controller/json_loader').getParser(),
        statComputer = require('../helpers/statistics_computer');

    // Get features
    //GET /api/features
    api.get('/features', function (req, res) {
        parser = require('../controller/json_loader').getParser();
        res.send(
            parser.getFeatures()[0].getStatistics()
        );
    });

    // Get statistics
    //GET /api/features/stats
    api.get('/features', function (req, res) {
        res.send(
            helper.computeStats(parser.getFeatures())
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
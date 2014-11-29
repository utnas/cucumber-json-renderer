(function () {
    'use strict';

    var express = require('express'),
        api = express(),
        parser = require('../controller/json_loader').getParser(),
        StatisticsComputer = require('../helpers/statistics_computer'),
        statsComputed = new StatisticsComputer(parser.getFeatures());

    // Get featuresSuccess
    //GET /api/featuresSuccess
    api.get('/featuresSuccess', function (req, res) {
        parser = require('../controller/json_loader').getParser();
        res.send(
            JSON.stringify(statsComputed.getSuccess())
        );
    });

    // Get statistics
    //GET /api/features/stats
    api.get('/features/stats', function (req, res) {

        res.send(
            statsComputed.getAllStatistics()
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
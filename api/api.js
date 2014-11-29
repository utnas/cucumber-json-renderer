(function () {
    'use strict';

    var express = require('express'),
        api = express(),
        parser = require('../controller/json_loader').getParser(),
        statComputer = require('../helpers/statistics_computer');

    // Get featuresSuccess
    //GET /api/featuresSuccess
    api.get('/featuresSuccess', function (req, res) {
        parser = require('../controller/json_loader').getParser();
        res.send(
            parser.getFeatures()[0].getStatistics()
        );
    });

    // Get statistics
    //GET /api/featuresSuccess/stats
    api.get('/featuresSuccess', function (req, res) {
        res.send(
            helper.computeStats(parser.getFeatures())
        );
    });

    // Get a feature
    //GET /api/featuresSuccess/id
    api.get('/featuresSuccess/:id', function (req, res) {
        res.send(
            [{'idFeature': '/featuresSuccess/:id'}]
        );
    });

    // Get scenario
    // GET /api/featuresSuccess/id/id
    api.get('/featuresSuccess/:id/:id', function (req, res) {
        res.send(
            [{'scenario': 'id/idScenario'}]
        );
    });

    module.exports = api;
}());
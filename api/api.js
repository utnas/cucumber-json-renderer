(function () {
    'use strict';

    var express = require('express'),
        api = express(),
        parser = require('../controller/json_loader').getParser(),
        StatisticsComputer = require('../helpers/statistics_computer'),
        statsComputed = new StatisticsComputer(parser.getFeatures());

    // Get statistics
    //GET /api/features/stats
    api.get('/features/stats', function (req, res) {

        res.send(
            statsComputed.getAllStatistics()
        );
    });

    module.exports = api;
}());
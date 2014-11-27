var express = require('express'),
    parser = require('../controller/json_loader').getParser();

var api = express();

// Get features
//GET /api/features
api.get('/features', function (req, res) {
    res.send(
        "features"
    );
});

// Get a feature
//GET /api/features/idFeature
api.get('/features/:idFeature', function (req, res) {
    res.send(
        {}
    );
});

// Get scenario
// GET /api/features/featureId/idScenario
api.get('/features/:idFeature/:idScenario', function (req, res) {
    res.send(
        {}
    );
});

module.exports = function () {
    return api;
};
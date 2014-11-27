var express = require('express'),
    parser = require('../controller/json_loader');

var api = express();

// Get features
//GET /api/features
api.get('/features', function (req, res) {
    res.send(
        [{"features": 'features'}]
    );
});

// Get a feature
//GET /api/features/idFeature
api.get('/features/:id', function (req, res) {
    res.send(
        [{'idFeature': '/features/:id'}]
    );
});

// Get scenario
// GET /api/features/featureId/idScenario
api.get('/features/:id/:idScenario', function (req, res) {
    res.send(
        [{'scenario': 'id/idScenario'}]
    );
});

module.exports = api;
(function () {
    'use strict';

    var assert = require('assert'),
        Parser = require('../../../controller/parser'),
        data = require('./../../data/data');

    describe('Feature parser tests', function () {

        it('should return an empty content for a empty json input data', function () {
            var parser = new Parser();
            parser.parse('[]');
            assert.deepEqual(parser.getFeatures(), []);
            parser.parse('');
            assert.deepEqual(parser.getFeatures(), []);
        });

        it('should contains 2 featuresSuccess', function () {
            var cucumberParser = new Parser();
            cucumberParser.parse(data.featuresSuccess);
            assert.deepEqual(cucumberParser.getFeatures().length, 2)
        });

        it('should have a valid feature content', function () {
            var json = parseJson(data.feature),
                feature = json.getFeatures()[0];
            assert.deepEqual(feature.getId(), 'a-screenshot-feature');
            assert.deepEqual(feature.getName(), 'A screenshot feature');
            assert.deepEqual(feature.getURI(), 'features/embed.feature');
            assert.deepEqual(feature.getKeyword(), 'Feature');
            assert.deepEqual(feature.getDescription(), '');
            assert.deepEqual(feature.getLine(), 1);
            assert.deepEqual(feature.getScenarios().length, 1);
        });

        it('should have a valid scenario content', function () {
            var json = parseJson(data.feature),
                feature = json.getFeatures()[0],
                scenarios = feature.getScenarios(),
                scenario = scenarios[0];
            assert.deepEqual(scenarios.length, 1);
            assert.deepEqual(scenario.getId(), 'a-screenshot-feature;');
            assert.deepEqual(scenario.getName(), '');
            assert.deepEqual(scenario.getKeyword(), 'Scenario');
            assert.deepEqual(scenario.getDescription(), '');
            assert.deepEqual(scenario.getLine(), 3);
        });

        it('should return success scenarios', function () {
            var json = parseJson(data.feature),
                feature = json.getFeatures()[0];
            assert.deepEqual(feature.getSuccess().length, 1);
        });

        it('should retrieves statistics from feature in term of success and failures', function () {
            var json = parseJson(data.feature),
                feature = json.getFeatures()[0];
            assert.deepEqual(feature.getStatistics(), {'passed': 'Passed: 100 %', 'failures': 'Failed: 0 %'});
        });
    });

    function parseJson(json_content) {
        var cucumberJsonParser = new Parser();
        cucumberJsonParser.parse(json_content);
        return cucumberJsonParser;
    }
}());
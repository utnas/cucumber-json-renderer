var assert = require('assert'),
    Parser = require('../../model/parser'),
    data = require('./data');


describe('Feature parser tests', function () {

    it('should contains 2 features', function () {
        var cucumberParser = new Parser();
        cucumberParser.parse(data.features);
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

        assert.deepEqual(feature.getScenarios().length, 1);
        assert.deepEqual(scenario.getId(), 0);
        assert.deepEqual(scenario.getName(), '');
        assert.deepEqual(scenario.getKeyword(), '');
        assert.deepEqual(scenario.getDescription(), '');
        assert.deepEqual(scenario.getLine(), 0);
    });
});

function parseJson(json_content) {
    var cucumberJsonParser = new Parser();
    cucumberJsonParser.parse(json_content);
    return cucumberJsonParser;
}
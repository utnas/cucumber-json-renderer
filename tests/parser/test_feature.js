var assert = require('assert'),
    Parser = require('../../model/parser'),
    data = require('./data');


describe('Cucumber json parser', function () {

    it('should contains 2 features', function () {
        var cucumberParser = new Parser();
        cucumberParser.parse(data.features);
        assert.equal(cucumberParser.getFeatures().length, 2)
    });

    it('should a valid content', function () {
        var json = parseJson(),
            feature = json.getFeatures()[0];

        assert.deepEqual(feature.getId(), 'a-screenshot-feature');
        assert.deepEqual(feature.getName(), 'A screenshot feature');
        assert.deepEqual(feature.getURI(), 'features/embed.feature');
        assert.deepEqual(feature.getKeyword(), 'Feature');
        assert.deepEqual(feature.getDescription(), '');
        assert.deepEqual(feature.getScenarios().length, 1);
    });
});

function parseJson(json_content) {
    var cucumberJsonParser = new Parser();
    cucumberJsonParser.parse(json_content);
    return cucumberJsonParser;
}

var assert = require('assert'),
    Parser = require('../../model/parser'),
    data = require('./data');


describe('Cucumber json parser', function () {

    it('should contains 2 features', function () {
        var myParser = new Parser();
        myParser.parse('[{"uri": "features/embed.feature","id": "a-screenshot-feature","keyword": "Feature","name": "A screenshot feature","line": 1,"description": "","elements": [{ "id": "a-screenshot-feature;","keyword": "Scenario", "name": "", "line": 3, "description": "", "type": "scenario", "steps": [  { "keyword": "Given ", "name": "I embed a screenshot", "line": 4,"embeddings": [{ "mime_type": "image/png", "data": "Zm9v"  }  ], "match": { "location": "features/step_definitions/steps.rb:29" }, "result": { "status": "passed"}}]}]},{"uri": "features/embed.feature","id": "a-screenshot-feature","keyword": "Feature","name": "A screenshot feature","line": 1,"description": "","elements": [{ "id": "a-screenshot-feature;","keyword": "Scenario", "name": "", "line": 3, "description": "", "type": "scenario", "steps": [  { "keyword": "Given ", "name": "I embed a screenshot", "line": 4,"embeddings": [{ "mime_type": "image/png", "data": "Zm9v"  }  ], "match": { "location": "features/step_definitions/steps.rb:29" }, "result": { "status": "passed"}}]}]}]');
        assert.equal(myParser.getFeatures().length, 2)
    });

    it('should a valid content', function () {
        var feature = createFeature();
        assert.deepEqual(feature.getId(), "a-screenshot-feature");
        assert.deepEqual(feature.getName(), "A screenshot feature");
        assert.deepEqual(feature.getURI(), "features/embed.feature");
        assert.deepEqual(feature.getKeyword(), "Feature");
        assert.deepEqual(feature.getDescription(), "");
        assert.deepEqual(feature.getScenarios().length, 1);
    });
});

function createFeature() {
    var cucumberJsonParser = new Parser();
    cucumberJsonParser.parse(data.feature);
    return cucumberJsonParser;
}

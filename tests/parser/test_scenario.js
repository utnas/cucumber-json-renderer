var Scenario = require('../../model/scenario'),
    assert = require('assert'),
    data = require('./data');

describe('Scenario parser tests', function () {
    it('should return the content of scenario', function () {
        var scenario = new Scenario(JSON.parse(data.scenario)[0]);

        assert.deepEqual(scenario.getID(), 'a-screenshot-feature;');
        assert.deepEqual(scenario.getName(), '');
        assert.deepEqual(scenario.getType(), 0);
        assert.deepEqual(scenario.getDescription(), '');
        assert.deepEqual(scenario.getKeyword(), 'Scenario');
        assert.deepEqual(scenario.getLine(), 3);
        assert.deepEqual(scenario.getSteps().length, 1);
    });
});
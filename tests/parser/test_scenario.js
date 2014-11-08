var Scenario = require('../../model/scenario'),
    assert = require('assert');

describe('get content of a scenario', function () {
    it('should return the content of scenario', function () {
        var scenario = new Scenario();

        assert.deepEqual(scenario, {});
    });
});
(function () {
    'use strict';
    var Step = require('../../model/step'),
        assert = require('assert'),
        data = require('./data');

    describe('Step parser tests', function () {

        it('should return a valid step from json', function () {
            var step = new Step(JSON.parse(data.steps)[0]);

            assert.deepEqual(step.getName(), 'I embed a screenshot');
            assert.deepEqual(step.getKeyword().trim(), 'Given');
            assert.deepEqual(step.getLine(), 4);
            assert.deepEqual(step.getLocation(), 'features/step_definitions/steps.rb:29');
            assert.deepEqual(step.getStatus(), 'passed');
        })
    });
}());
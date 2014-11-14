(function () {
    'user strict';

    var EMPTY = require('../helpers/helpers').EMPTY_STRING,
        Step = require('../model/step');

    module.exports = function Scenario(scenario) {
        //private
        var convertSteps = function (steps) {
                var result = [], index = 0;
                for (; index < steps.length; index++) {
                    result.push(new Step(steps[index]));
                }
                return result;
            },
            id = scenario.id || 0,
            name = scenario.name || EMPTY,
            type = scenario.type | EMPTY,
            description = scenario.description || EMPTY,
            keyword = scenario.keyword || EMPTY,
            line = scenario.line || 0,
            steps = convertSteps(scenario.steps) || [];

        //public
        this.getId = function () {
            return id;
        };

        this.getName = function () {
            return name;
        };

        this.getType = function () {
            return type;
        };

        this.getDescription = function () {
            return description;
        };

        this.getKeyword = function () {
            return keyword;
        };

        this.getLine = function () {
            return line;
        };

        this.getSteps = function () {
            return steps;
        };

        this.getStatus = function () {
            var step, index = 0;
            for (; index < steps.length; index++) {
                step = steps[index];
                if (step && step.getStatus() !== 'passed') {
                    return 'fail';
                }
            }
            return 'passed'
        };
    };
}());
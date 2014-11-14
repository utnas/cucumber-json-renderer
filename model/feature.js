(function () {
    'use strict';

    var EMPTY = require('../helpers/helpers').EMPTY_STRING,
        Scenario = require('./scenario');

    module.exports = function Feature(item) {
        // Private
        var filterScenarios = function (status) {
                status = status || 'failed';
                var scenario, result = [], index = 0;
                for (; index < scenarios.length; index++) {
                    scenario = scenarios[index];
                    if (scenario && scenario.getStatus() === status) {
                        result.push(scenario);
                    }
                }
                return result;
            },
            convertScenarios = function (scenarios) {
                var result = [], index = 0;
                if (scenarios) {
                    for (; index < scenarios.length; index++) {
                        result.push(new Scenario(scenarios[index]));
                    }
                }
                return result;
            },
            scenarios = convertScenarios(item.elements) || [],
            id = item.id || 0,
            name = item.name || EMPTY,
            uri = item.uri || EMPTY,
            keyword = item.keyword || EMPTY,
            description = item.description || EMPTY,
            line = item.line || 0,
            that = this;

        // public
        this.getScenarios = function () {
            return scenarios;
        };

        this.getURI = function () {
            return uri;
        };

        this.getId = function () {
            return id;
        };

        this.getName = function () {
            return name;
        };

        this.getKeyword = function () {
            return keyword;
        };

        this.getDescription = function () {
            return description;
        };

        this.getLine = function () {
            return line;
        };

        this.getSuccess = function () {
            return filterScenarios('passed');
        };

        this.getFailures = function () {
            return filterScenarios();
        };

        this.getStatistics = function () {
            var totalScenarios = that.getScenarios().length || 1;
            return {
                passed: 'Passed: ' + (that.getSuccess().length / totalScenarios) * 100 + ' %',
                failures: 'Failed: ' + (that.getFailures().length / totalScenarios) * 100 + ' %'
            };
        };
    };
}
()
)
;
var EMPTY = require('../helpers/helpers').EMPTY_STRING;

module.exports = function Scenario(scenario) {
    var id = scenario.id || 0,
        name = scenario.name || EMPTY,
        type = scenario.type | EMPTY,
        description = scenario.description || EMPTY,
        keyword = scenario.keyword || EMPTY,
        line = scenario.line || 0,
        steps = scenario.steps || [];

    this.getID = function () {
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
};
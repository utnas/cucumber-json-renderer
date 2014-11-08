var EMPTY = require('../helpers/helpers').EMPTY_STRING;
'use strict';

module.exports = function Feature(item) {
    var scenarios = item.elements || [],
        id = item.id || 0,
        name = item.name || EMPTY ,
        uri = item.uri || EMPTY ,
        keyword = item.keyword || EMPTY ,
        description = item.description || EMPTY,
        line = item.line || 0;

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
    }
};
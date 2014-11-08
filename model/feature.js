var EMPTY_STRING = String.empty;

module.exports = function Feature(item) {
    var scenarios = item.elements || [],
        id = item.id || 0,
        name = item.name || EMPTY_STRING,
        uri = item.uri || EMPTY_STRING,
        keyword = item.keyword || EMPTY_STRING,
        description = item.description || EMPTY_STRING,
        line = item.line || 0;

    this.getScenarios = function () {
        return scenarios;
    };

    this.getId = function () {
        return id;
    };

    this.getName = function () {
        return name;
    };

    this.getURI = function () {
        return uri;
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
(function () {
    'user strict';

    module.exports = function Step(json) {
        var name = json.name,
            location = json.match.location,
            status = json.result.status,
            keyword = json.keyword,
            line = json.line;

        this.getName = function () {
            return name;
        };
        this.getLocation = function () {
            return location;
        };

        this.getStatus = function () {
            return status;
        };

        this.getKeyword = function () {
            return keyword;
        };

        this.getLine = function () {
            return line;
        };
    };
}());
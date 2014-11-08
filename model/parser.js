var Feature = require('./feature');

module.exports = function Parser() {
    var features = [];

    this.parse = function (content) {
        var value = JSON.parse(content);

        value.forEach(function (item) {
            features.push(new Feature(item));
        });
    };

    this.getFeatures = function () {
        return features;
    }
};
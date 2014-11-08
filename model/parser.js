var Feature = require('./feature');

module.exports = function Parser() {
    var features = [];

    this.parse = function (content) {
        var values = JSON.parse(content);

        values.forEach(function (item) {
            if (values.hasOwnProperty(item)) {
                features.push(new Feature(item));
            }
        });
    };

    this.getFeatures = function () {
        return features;
    }
};
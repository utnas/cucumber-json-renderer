var Feature = require('./feature');

module.exports = function Parser() {
    var features = [];

    this.parse = function (content) {
        var values = {};
        try {
            if (content) {
                values = JSON.parse(content);
                values.forEach(function (item) {
                    features.push(new Feature(item));
                });
            }
        } catch (err) {
            throw err;
        }
    };

    this.getFeatures = function () {
        return features;
    }
};
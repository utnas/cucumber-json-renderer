(function () {
    'user strict';

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
                throw {
                    name: 'Unable to read json content',
                    message: 'The content provided was corrupted.'
                };
            }
        };

        this.getFeatures = function () {
            return features;
        };
    };
}());
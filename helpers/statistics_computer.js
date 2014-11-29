(function () {

    'use strict';
    var Feature = require('../model/feature');

    module.exports = function StatisticsComputer(features) {

        this.getSuccess = function () {
            var index = 0,
                result = 0;

            for (; index < features.length; index++) {
                var feature = features[index];
                if (feature instanceof Feature) {
                    result = result + feature.getSuccess().length;
                }
            }
            return result;
        }


    };
}());
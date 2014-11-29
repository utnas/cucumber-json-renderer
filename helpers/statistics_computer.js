(function () {

    'use strict';
    var Feature = require('../model/feature');

    module.exports = function StatisticsComputer(features) {
        var that = this;

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
        };

        this.getFailures = function () {
            var index = 0,
                result = 0;

            for (; index < features.length; index++) {
                var feature = features[index];
                if (feature instanceof Feature) {
                    result = result + feature.getFailures().length;
                }
            }
            return result;
        };

        that.getSkipped = function () {
            return 0;
        };

        that.getPending = function () {
            return 0;
        };
        this.getAllStatistics = function () {
            return {
                success: that.getSuccess(),
                failures: that.getFailures(),
                skipped: that.getSkipped(),
                pending: that.getPending()
            };
        };
    };
}());
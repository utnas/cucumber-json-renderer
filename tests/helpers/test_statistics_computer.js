(function () {
    'use strict';
    var Feature = require('../../model/feature'),
        assert = require('assert'),
        data = require('../data/data'),
        StatisticsComputer = require('../../helpers/statistics_computer');

    describe('Compute statistics from featuresSuccess tests', function () {

        it('should return two success from featuresSuccess list', function () {
            var features = extractFeatures(data.featuresSuccess),
                statsComputer;
            statsComputer = new StatisticsComputer(features);

            assert.deepEqual(statsComputer.getSuccess(), 2);
        });

        it('should return zero failures from featuresSuccess list', function () {
            var features = extractFeatures(data.featuresSuccess),
                statsComputer;
            statsComputer = new StatisticsComputer(features);

            assert.deepEqual(statsComputer.getFailures(), 0);
        });

        it('should return one failure from featuresFailures list', function () {
            var features = extractFeatures(data.featuresFailures),
                statsComputer = new StatisticsComputer(features);
            assert.deepEqual(statsComputer.getFailures(), 1);
        });
    });

    function extractFeatures(features) {
        var index = 0,
            result = [],
            parsed = JSON.parse(features);
        for (; index < parsed.length; index++) {
            result.push(new Feature(parsed[index]));
        }
        return result;
    }

}());
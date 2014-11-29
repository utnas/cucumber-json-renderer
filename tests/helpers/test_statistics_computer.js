(function () {
    'use strict';
    var Feature = require('../../model/feature'),
        assert = require('assert'),
        data = require('../data/data'),
        StatisticsComputer = require('../../helpers/statistics_computer');

    describe('Compute statistics from featuresSuccess tests', function () {

        it('should return number of success from featuresSuccess list', function () {
            var features = [],
                statsComputer;

            features.push(new Feature(JSON.parse(data.featuresSuccess)[0]));
            features.push(new Feature(JSON.parse(data.featuresSuccess)[1]));

            statsComputer = new StatisticsComputer(features);

            assert.deepEqual(statsComputer.getSuccess(), 2);
        });

        it('should return zero failures from featuresSuccess list', function () {
            var features = [],
                statsComputer;

            features.push(new Feature(JSON.parse(data.featuresSuccess)[0]));
            features.push(new Feature(JSON.parse(data.featuresSuccess)[1]));

            statsComputer = new StatisticsComputer(features);

            assert.deepEqual(statsComputer.getFailures(), 0);
        });

        it('should return 1 failure from featuresFailures list', function () {
            var features = [],
                statsComputer;

            features.push(new Feature(JSON.parse(data.featuresFailures)[0]));
            features.push(new Feature(JSON.parse(data.featuresFailures)[1]));

            statsComputer = new StatisticsComputer(features);

            assert.deepEqual(statsComputer.getFailures(), 1);
        });
    });
}());
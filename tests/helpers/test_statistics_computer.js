(function () {
    'use strict';
    var Feature = require('../../model/feature'),
        assert = require('assert'),
        data = require('../data/data'),
        StatisticsComputer = require('../../helpers/statistics_computer');

    describe('Step parser tests', function () {

        it('should return a valid step from json', function () {
            var features = [],
                statsComputer;

            features.push(new Feature(JSON.parse(data.features)[0]));
            features.push(new Feature(JSON.parse(data.features)[1]));

            statsComputer = new StatisticsComputer(features);

            assert.deepEqual(statsComputer.getSuccess(), 2);
        })
    });
}());
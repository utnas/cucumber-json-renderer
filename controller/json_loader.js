(function () {
    'use strict';

    var data = require('../tests/data/data'),
        Parser = require('./parser');

    function Loader() {
        var parser = new Parser();
        parser.parse(data.featuresFailures);

        this.getParser = function () {
            return parser;
        }
    }

    module.exports = new Loader();
}());
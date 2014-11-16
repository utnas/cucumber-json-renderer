(function () {
    'use strict';

    var data = require('../tests/parser/data'),
        Parser = require('./parser.js');

    function Loader() {
        var parser = new Parser();
        parser.parse(data.features);

        this.getParser = function () {
            return parser;
        }
    }

    module.exports = new Loader();
}());
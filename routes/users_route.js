(function () {
    'user strict';

    var express = require('express'),
        router = express.Router();

    router.get('/', function (req, res) {
        res.send('respond with a resource');
    });

    module.exports = router;
}());
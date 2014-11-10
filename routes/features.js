var express = require('express'),
    router = express.Router();

router.get('/', function (req, res) {
    res.render('features', {features: req.features});
});

module.exports = router;
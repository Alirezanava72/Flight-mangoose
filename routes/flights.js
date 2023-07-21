var express = require('express');
var router = express.Router();
var flightsController = require('../controllers/flights');

/* GET users listing. */
router.get('/', flightsController.index)
router.get('/new',flightsController.new)

module.exports = router;

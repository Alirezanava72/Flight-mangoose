var express = require('express');
var router = express.Router();
var ticketController = require('../controllers/tickets');

router.get('/flights/:id/ticket/new', ticketController.new)
router.post('/tickets/:id', ticketController.create)
module.exports = router;
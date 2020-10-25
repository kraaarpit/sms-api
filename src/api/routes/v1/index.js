const express = require('express');

const eventRoute = require('./event/event.route');

const router = express.Router();

router.use('/event', eventRoute);

module.exports = router;

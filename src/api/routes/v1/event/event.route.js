const express = require('express');

const validation = require('../../../validations/event.validation');
const controller = require('../../../controllers/event.controller');

const router = express.Router();

router.route('/').get(controller.get).post(validation.create, controller.create);

router.route('/:id').get(controller.getById).put(controller.update).delete(controller.delete);

module.exports = router;

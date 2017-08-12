const express = require('express');

const router = express.Router();

const ControllerFacade = require('@controllers/ControllerFacade');

const controller = new ControllerFacade();

router.route('/').get(controller.renderHome);

module.exports = router;

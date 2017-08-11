const express = require('express');

const router = express.Router();

const ControllerFacade = require('@controllers/ControllerFacade');

const controller = new ControllerFacade();

router.route('/').get(controller.renderHome);
router.route('/contact').get(controller.renderContact);

module.exports = router;

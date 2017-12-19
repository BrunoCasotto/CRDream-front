const express = require('express');

const router = express.Router();

const FrontController = require('@controllers/FrontController');

const controller = new FrontController();

router.route('/').get(controller.renderHome);

module.exports = router;

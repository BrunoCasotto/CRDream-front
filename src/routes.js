const express = require('express');

const router = express.Router();

const FrontController = require('@controllers/FrontController');

const controller = new FrontController();

router.route('/').get(controller.renderHome);

//background routes
router.route('/components/get-all-configs').get(controller.getAllComponentsConfigs);
router.route('/components/get-preview').get(controller.getComponentPreview);

module.exports = router;

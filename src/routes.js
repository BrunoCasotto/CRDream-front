var express = require('express');
var router = express.Router();
let ControllerFacade =  require('@controllers/ControllerFacade');
let controller = new ControllerFacade();

router.route('/').get(controller.renderHome);

module.exports = router;
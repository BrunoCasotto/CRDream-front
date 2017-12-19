'use strict';
const Logger = require('@utils/Logger');

class ComponentController {

  /**
   * Method to call home controller index page
   * @param {*} req
   * @param {*} res
   */
  getAllConfigs(req, res) {
    try {
      res.send({
        test: "testing"
      })
    } catch (error) {
      Logger.log('error', `ComponentController.getAllConfigs \n Error: ${error.message}`);
    }

  }
}

module.exports = new ComponentController();
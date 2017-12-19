const HomeController = require("@controllers/HomeController");
const ComponentController = require("@controllers/ComponentController");

class FrontController {

  /**
   * Method to call home controller index page
   * @param {*} req
   * @param {*} res
   */
  renderHome(req, res) {
    try {
      let controller = new HomeController();
      return controller.index(req, res);
    } catch (error) {
      Logger.log('error', `FrontController.renderHome \n Error: ${error.message}`);
    }
  }

    /**
   * Method to call components configs
   * @param {*} req
   * @param {*} res
   */
  getAllComponentsConfigs(req, res) {
    try {
      return ComponentController.getAllConfigs(req, res);
    } catch (error) {
      Logger.log('error', `FrontController.getAllComponentsConfigs \n Error: ${error.message}`);
    }
  }
}

module.exports = FrontController
const HomeController = require("@controllers/HomeController");
const ComponentController = require("@controllers/ComponentController");

class FrontController {

  /**
   * Method to call home controller index page
   * @param {*} req
   * @param {*} res
   */
  renderHome(req, res) {
    let controller = new HomeController();
    return controller.index(req, res);
  }

    /**
   * Method to call components configs
   * @param {*} req
   * @param {*} res
   */
  getAllComponentsConfigs(req, res) {
    return ComponentController.getAllConfigs(req, res);
  }

  /**
 * Function to render the component html preview
 * @param {Object} req
 * @param {Object} res
 */
  getComponentPreview(req, res) {
    return ComponentController.renderPreviewComponent(req, res);
  }
}

module.exports = FrontController
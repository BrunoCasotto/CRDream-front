const HomeController = require("@controllers/HomeController");

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
}

module.exports = FrontController
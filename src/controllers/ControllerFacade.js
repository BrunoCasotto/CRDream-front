const HomeController = require("@controllers/HomeController");

class ControllerFacade {

  /**
   * Method to call home controller index page
   * @param {*} req
   * @param {*} res
   */
  renderHome(req, res) {
    let controller = new HomeController();
    return controller.index(req, res);
  }
}

module.exports = ControllerFacade
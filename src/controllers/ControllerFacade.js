const HomeController = require("@controllers/HomeController");

class ControllerFacade {
  _constructor() {}

  renderHome(req, res) {
    let controller = new HomeController();
    return controller.index(req, res);
  }
}

module.exports = ControllerFacade
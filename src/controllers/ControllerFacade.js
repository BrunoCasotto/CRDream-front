const HomeController = require("@controllers/HomeController");

class ControllerFacade {
  _constructor() {
    console.log("Example controller")
  }

  renderHome(req, res) {
    let controller = new HomeController();
    return controller.index(req, res);
  }
} 
module.exports = ControllerFacade
const HomeController = require("@controllers/HomeController");

const ContactController = require("@controllers/ContactController");

class ControllerFacade {
  _constructor() {
    console.log("Example controller")
  }

  renderHome(req, res) {
    let controller = new HomeController();
    return controller.index(req, res);
  }

  renderContact(req, res) {
    let controller = new ContactController();
    return controller.index(req, res);
  }
} 
module.exports = ControllerFacade
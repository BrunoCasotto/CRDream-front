const HomeController = require("@controllers/HomeController");
const PreviewController = require("@controllers/PreviewController");

class ControllerFacade {
  _constructor() {}

  renderHome(req, res) {
    let controller = new HomeController();
    return controller.index(req, res);
  }

  renderPreview(req, res) {
    let controller = new PreviewController();
    return controller.index(req, res);
  }
}
module.exports = ControllerFacade
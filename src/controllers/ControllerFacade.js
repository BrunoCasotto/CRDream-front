let HomeController = require("@controllers/HomeController");

class ControllerFacade {
  _constructor() {
    console.log("Example controller")
  }

  renderHome(req, res) {
    res.send("version controller")
  }
} 
module.exports = ControllerFacade
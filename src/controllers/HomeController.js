
class HomeController {
  index(req, res) {
    res.render('pages/home',{})
  }
} 
module.exports = HomeController

class HomeController {
  index(req, res) {
    res.render('pages/home/template',{})
  }
} 
module.exports = HomeController
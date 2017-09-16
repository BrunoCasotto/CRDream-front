
class HomeController {

  index(req, res) {
    let banner = {
      url: "http://coreviewsystems.com/wp-content/themes/sage-master/assets/images/BaseBanner.png",
      link: "/"
    }

    res.render('pages/home/template',
      { banner }
    )
  }

} 
module.exports = HomeController
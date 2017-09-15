
class HomeController {

  index(req, res) {
    let banners = [
      "http://coreviewsystems.com/wp-content/themes/sage-master/assets/images/BaseBanner.png",
      "http://bob.yexley.net/content/images/2013/Nov/dry_js_with_mixins_banner.png"
    ]

    res.render('pages/home/template',
      { "banner-images": banners }
    )
  }

} 
module.exports = HomeController
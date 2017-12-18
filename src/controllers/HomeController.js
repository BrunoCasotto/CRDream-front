//This data will be load by database
const VisualSettings = {
  page: {
    theme: "black"
  },
  data: [
    {
      component: "navigation",
      appearance: "default",
      theme: "",
      show: "true"
    },
    {
      component: "navigation",
      appearance: "default",
      theme: "default",
      show: "true"
    }
  ]
}

/**
 * Controller to show home page...
 * @params Object
 * @return Html
 */
class HomeController {

  index(req, res) {
    //This will be load by database
    let banner = {
      url: "http://coreviewsystems.com/wp-content/themes/sage-master/assets/images/BaseBanner.png",
      link: "/"
    }

    res.render('pages/home/template',
      {
        banner ,
        VisualSettings
      }
    )
  }

}
module.exports = HomeController
const VisualSettings = {
  top: {
    component: "navigation",
    appearance: "default",
    show: "true"
  },
  topMiddle: {
    component: "grid",
    appearance: "default",
    show: "true"
  },
  topBottom: {
    component: "banner",
    appearance: "default",
    show: "true"
  },
  middleTop: {
    component: "banner",
    appearance: "default",
    show: "true"
  },
  middle: {
    component: "banner",
    appearance: "default",
    show: "false"
  },
  middleBottom:{
    component: "banner",
    appearance: "default",
    show: "false"
  },
  bottomTop: {
    component: "banner",
    appearance: "default",
    show: "false"
  },
  bottomMiddle: {
    component: "banner",
    appearance: "default",
    show: "false"
  },
  bottom: {
    component: "banner",
    appearance: "default",
    show: "false"
  }
}

class HomeController {

  index(req, res) {
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
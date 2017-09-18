const VisualSettings = {
  page: {
    theme: "black"
  },
  top: {
    component: "navigation",
    appearance: "default",
    theme: "black",
    show: "true"
  },
  topMiddle: {
    component: "grid",
    appearance: "default",
    theme: "black",
    show: "true"
  },
  topBottom: {
    component: "banner",
    appearance: "default",
    theme: "black",
    show: "true"
  },
  middleTop: {
    component: "banner",
    appearance: "default",
    theme: "black",
    show: "true"
  },
  middle: {
    component: "banner",
    appearance: "default",
    theme: "black",
    show: "false"
  },
  middleBottom:{
    component: "banner",
    appearance: "default",
    theme: "black",
    show: "false"
  },
  bottomTop: {
    component: "banner",
    appearance: "default",
    theme: "black",
    show: "false"
  },
  bottomMiddle: {
    component: "banner",
    appearance: "default",
    theme: "black",
    show: "false"
  },
  bottom: {
    component: "banner",
    appearance: "default",
    theme: "black",
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
class PreviewController {

  index(req, res) {
    try {
      res.render('components/preview/template',
        {
          component: req.params.component,
          appearance: req.query.appearance,
          theme: req.query.theme
        }
      )
    } catch (error) {
      throw error
    }
  }

}
module.exports = PreviewController
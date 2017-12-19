'use strict'

const NormalizeVisualData = require('@utils/NormalizeVisualData');
class HomeController {

  /**
   * function to return the html page
   * @param {Object} req
   * @param {Object} res
   * @return {Html} html of page
   */
  index(req, res) {
    //TODO get this config by database
    const visualSettings = {
      "page": {
        "theme": "black"
      },
      "components": [
        {
          "name": "navigation",
          "appearance": "default",
          "theme": "black",
          "show": "true",
          "mobile": true
        },
        {
          "name": "navigation",
          "appearance": "default",
          "theme": "",
          "show": "true",
          "mobile": true
        }
      ]
    };

    const normalizator = new NormalizeVisualData(require('mobile-detect'));

    let dataNormalize = Object.assign({}, visualSettings);

    normalizator.normalize(dataNormalize, req.headers);

    res.render('pages/home/template',{ visualSettings: dataNormalize });
  }

}
module.exports = HomeController
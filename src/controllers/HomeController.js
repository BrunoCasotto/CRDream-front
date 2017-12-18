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
    var visualSettings = require('@mocks/VisualSettings.json');
    const normalizator = new NormalizeVisualData(require('mobile-detect'));

    normalizator.normalize(visualSettings, req);

    res.render('pages/home/template',{ visualSettings });
  }

}
module.exports = HomeController
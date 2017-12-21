'use strict';
const Logger = require('@utils/Logger');
const fs = require('fs');
const path = require('path');
const componentsPath = path.join(__dirname, '..', '..', 'views', 'components')
class ComponentController {

  /**
   * Method to call home controller index page
   * @param {*} req
   * @param {*} res
   */
  getAllConfigs(req, res) {
    try {
      let configs = this.getComponentsConfig();
      res.send(configs)

    } catch (error) {
      Logger.log('error', `ComponentController.getAllConfigs \n Error: ${error.message}`);
    }
  }

  /**
   * @return {Array} - array of components congig
   */
  getComponentsConfig() {
    try {
      let configFolders = this.getListOfConfigsFiles();
      let configList = [];

      configFolders.forEach(path => {
        configList.push(require(path));
      });
      return configList

    } catch (error) {
      Logger.log('error', `ComponentController.getListOfConfigsFiles \n Error: ${error.message}`);
      return [];
    }
  }

  /**
   * Function to loop components folder and get all jsonconfig paths
   * @return {Array} configsPath - paths of components jsonconfig
   */
  getListOfConfigsFiles() {
    try {
      let foldersPath = fs.readdirSync(componentsPath);
      let contentFolder = [],
        configsPath = [];

      foldersPath.forEach(folder => {
        let jsonRegex = /\.json/g;

        contentFolder = fs.readdirSync(`${componentsPath}/${folder}`);

        contentFolder.forEach(contentFile => {
          if(contentFile.match(jsonRegex)) {
            configsPath.push(`${componentsPath}/${folder}/${contentFile}`);
          }
        })
      });

      return configsPath;

    } catch (error) {
      Logger.log('error', `ComponentController.getListOfConfigsFiles \n Error: ${error.message}`);
      return [];
    }
  }

  /**
   * Function to render the component html preview
   * @param {Object} req
   * @param {Object} res
   */
  renderPreviewComponent(req, res) {
    try {
      let name = req.query.name;
      let mock = require(`@components/${name}/mock.json`);
      res.render('pages/preview/component',{ name, mock });

    } catch (error) {
      Logger.log('error', `ComponentController.renderPreviewComponent \n Error: ${error.message}`);
    }
  }
}

module.exports = new ComponentController();
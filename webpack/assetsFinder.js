let fs = require('fs');
let path = require('path');

class AssetsFinder {
  findComponentsAssets() {
    let componentsPath = path.join(__dirname,'..', 'views', 'components');
    return this.find(componentsPath, 'components')
  }

  findPagesAssets() {
    let pagesPath = path.join(__dirname,'..', 'views', 'pages');
    return this.find(pagesPath, 'pages')
  }

  find(folderPath, folderName) {
    try {
      let foldersPath = fs.readdirSync(folderPath);
      let contentFolder = [],
        configObject = {};

      foldersPath.forEach(folder => {
        let jsRegex = /\.js$/g;
        let ScssRegex = /\.scss$/g;

        let jsPathProp = `${folderName}/${folder}/script`;
        let ScssPathProp = `${folderName}/${folder}/style`;

        contentFolder = fs.readdirSync(`${folderPath}/${folder}`);

        contentFolder.forEach(contentFile => {
          if(contentFile.match(jsRegex)) {
            configObject[jsPathProp] = `${folderPath}/${folder}/${contentFile}`;
          }

          if(contentFile.match(ScssRegex)) {
            configObject[ScssPathProp] = `${folderPath}/${folder}/${contentFile}`;
          }
        })
      });

      return configObject;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

module.exports = new AssetsFinder();
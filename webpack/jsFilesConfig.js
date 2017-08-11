const path = require('path');

const js_path = path.resolve(__dirname, '..', 'resources/assets/js');

module.exports = {
  home: path.join(js_path,'pages', 'home.js'),
  contact: path.join(js_path,'pages', 'contact.js'),
}
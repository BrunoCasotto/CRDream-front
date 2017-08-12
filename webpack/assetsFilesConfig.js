const path = require('path');

const views_path = path.resolve(__dirname, '..', 'views');

const pages_path = path.join(views_path,'pages')

module.exports = {
  home: path.join(pages_path, 'home', 'script'),
  home: path.join(pages_path, 'home', 'style.scss'),
  contact: path.join(pages_path, 'contact', 'script'),
}
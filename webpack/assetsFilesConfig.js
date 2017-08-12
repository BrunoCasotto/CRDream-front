const path = require('path');

const pages_path = path.join(__dirname, '..', 'views','pages')

const sass_path = path.join(__dirname, '..', 'resources','sass')

module.exports = {
  bundle: [
    path.join(sass_path, 'reset.scss')
  ],

  home: path.join(pages_path, 'home', 'script'),
  home: path.join(pages_path, 'home', 'style.scss'),

  contact: path.join(pages_path, 'contact', 'script'),
  contact: path.join(pages_path, 'contact', 'style.scss'),
}
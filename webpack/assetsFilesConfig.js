const path = require('path');

const pages_path = path.join(__dirname, '..', 'views','pages')

const sass_path = path.join(__dirname, '..', 'resources','sass')

module.exports = {
  bundle: [
    path.join(sass_path, 'reset.scss')
  ],

  home_script: path.join(pages_path, 'home', 'script'),
  home_style: path.join(pages_path, 'home', 'style.scss')
}
const path = require('path');

const pages_path = path.join(__dirname, '..', 'views','pages')

const sass_path = path.join(__dirname, '..', 'resources','sass')

module.exports = {
  bundle: [
    path.join(sass_path, 'reset.scss')
  ],
  'pages/home/script': path.join(pages_path, 'home', 'script'),
  'pages/home/style': path.join(pages_path, 'home', 'style.scss')
}
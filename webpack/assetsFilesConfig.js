const path = require('path');

const pages_path = path.join(__dirname, '..', 'views','pages')

const components_path = path.join(__dirname, '..', 'views','components')

const sass_path = path.join(__dirname, '..', 'resources','sass')

const js_path = path.join(__dirname, '..', 'resources','js')

//pages and components dependencies
module.exports = {
  //defaults, bases, globals
  bundle: [
    path.join(sass_path, 'reset.scss'),
    path.join(js_path, 'global.js')
  ],
  //pages
  'pages/home/script': path.join(pages_path, 'home', 'script'),
  'pages/home/style': path.join(pages_path, 'home', 'style.scss'),
  //components
  'components/grid/script': path.join(components_path, 'grid', 'script'),
  'components/grid/style': path.join(components_path, 'grid', 'style.scss'),
  //header
  'components/header/script': path.join(components_path, 'header', 'script'),
  'components/header/style': path.join(components_path, 'header', 'style.scss'),
  //footer
  'components/footer/script': path.join(components_path, 'footer', 'script'),
  'components/footer/style': path.join(components_path, 'footer', 'style.scss'),
  //slider
  'components/slider/script': path.join(components_path, 'slider', 'script'),
  'components/slider/style': path.join(components_path, 'slider', 'style.scss'),
}
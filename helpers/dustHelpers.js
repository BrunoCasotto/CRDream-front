global._ = require('underscore');
global._.dependencieList = [];

module.exports = {

  registerDependencie: (chk, ctx, bodies, params) => {
    let dependencie = ''
    if(params.type == "js") {
      dependencie = `<script type="text/javascript" src="${params.src}"></script>`;
    } else {
      dependencie = `<link rel="stylesheet" type="text/css" href="${params.src}">`;
    }

    if(!global._.dependencieList.includes(dependencie)) {
      global._.dependencieList.push(dependencie)
    }
  },

  renderJs: (chk, ctx, bodies, params) => {
    return chk.w(global._.dependencieList.join('\n'));
  }
}
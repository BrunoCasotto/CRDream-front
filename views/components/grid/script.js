(function(template){
  var gridList = [
    {
      imageUrl: 'https://pbs.twimg.com/profile_images/756002873209712640/i6o91W-C.jpg',
      linkUrl: '/todo'
    },
    {
      imageUrl: 'https://pbs.twimg.com/profile_images/756002873209712640/i6o91W-C.jpg',
      linkUrl: '/todo1'
    },
    {
      imageUrl: 'https://pbs.twimg.com/profile_images/756002873209712640/i6o91W-C.jpg',
      linkUrl: '/todo2'
    },
    {
      imageUrl: 'https://pbs.twimg.com/profile_images/756002873209712640/i6o91W-C.jpg',
      linkUrl: '/todo3'
    }
  ];

  const domHandler = require('./domHandler.js');

  var handler = domHandler(template);

  var limit = gridList.length;
  if(limit) {
    for(var i=0; i<limit; i++) {
      handler.createLinkImageNode(gridList[i].imageUrl, gridList[i].linkUrl);
    }
  }

})(document.getElementById('grid'))


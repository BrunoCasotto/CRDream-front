(function(config){

  config.target.style.width = 1240;

  var wrapper = config.target.querySelector('.slider__wrapper');
  var banners = wrapper.children;
  var activeBanner = banners[0];

  //set banner width;
  for(var i=0, limit = banners.length; i < limit; i++) {
    banners[i].width = config.width;
  }

  //move the wrapper to next banner
  var ShowNext = function(moviment) {
    wrapper.style = "transform: translate3d("+ -1*moviment +"px, 0px, 0px);"
  }

  //recursive function to loop banners
  var initLoop = function(movement) {
    var newMoviment = movement+movement;
    if(newMoviment >+ (config.width*banners.length)) {
      newMoviment = config.width
    }

    setTimeout( function() {
      ShowNext(movement)
      initLoop(newMoviment)
    }, 2000)
  }

  //initialize the slider loop
  initLoop(config.width)

})( 
  {
    target: document.getElementById('slider'),
    width: 1240
  }
)


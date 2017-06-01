$(function() {
  homepagewordfadein();
  arrowfade();
});

function homepagewordfadein(){
  $(".frontcontainer1").hover(function(){
      $('.words1').fadeIn(500);
  },function(){
      $('.words1').fadeOut(500);
  });

  $(".frontcontainer2").hover(function(){
      $('.words2').fadeIn(500);
  },function(){
      $('.words2').fadeOut(500);
  });
}

function arrowfade(){
  $('.arrowword').fadeIn(5000);
  $('.arrow').fadeIn(5000);
  $('.linecontainer').delay(3000).fadeIn(100);
}

$(window).scroll(function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop < 30 ) {
        $('.arrowword' ).stop(true, true).fadeIn(3000);
  }
  else {
        $('.arrowword').stop(true, true).fadeOut(3000);
  }
});

document.addEventListener('DOMContentLoaded', function(){
    Typed.new("#typed", {
        stringsElement: document.getElementById('typed-strings'),
        typeSpeed: 30,
        backDelay: 2000,
        loop: true,
        contentType: 'html',
        loopCount: null,
    });
});
//simple add class on hover function
/*
$(".button").hover(function(){

      $('#heartdrawing').addClass("checked");
},function(){

      $('#heartdrawing').removeClass("checked");
});
*/


      $("#frontimagecolor").hover(function(){
          $('.words1').fadeIn(500);
      },function(){
          $('.words1').fadeOut(500);
      });

      $("#frontimagebw").hover(function(){
          $('.words2').fadeIn(500);
      },function(){
          $('.words2').fadeOut(500);
      });

        //do code for less than 480px wide












$(document).ready(function(){
  $('.arrowword').fadeIn(8000);
});

$(document).ready(function(){
  $('.arrow').fadeIn(8000);
});



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
        contentType: 'html', // or text
        // defaults to null for infinite loop
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

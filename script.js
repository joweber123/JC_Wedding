$(document).ready(function(){
  $(".frontimage").click(function(){
      $(".picturepage").fadeIn(3000);
      $(".frontimage").fadeOut(3000);
    });
});


$(window).scroll(function() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop < 30) {
            $('.arrow').stop(true, true).fadeIn(3000);
      }
      else {
            $('.arrow').stop(true, true).fadeOut(3000);
      }
});

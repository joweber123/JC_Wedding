$(window).scroll(function() {
   var hT = $('#heartdrawing').offset().top,
       hH = $('#heartdrawing').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
      $('#heartdrawing').addClass('checked');
   } else {
      $('#heartdrawing').removeClass('checked');
   }
});

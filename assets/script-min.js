function loader(){$(".loader, .loader-text").fadeOut(1),$(".whole-page").fadeIn(600)}function homepagewordfadein(){$(".frontcontainer1").hover(function(){$(".words1").fadeIn(500)},function(){$(".words1").fadeOut(500)}),$(".frontcontainer2").hover(function(){$(".words2").fadeIn(500)},function(){$(".words2").fadeOut(500)})}function arrowfade(){$(".arrowword").fadeIn(5e3),$(".arrow").fadeIn(5e3),$(".linecontainer").delay(3e3).fadeIn(100)}function topFunction(){$(".scrollToTop").click(function(){return $("html, body").animate({scrollTop:0},800),!1})}$(function(){loader(),homepagewordfadein(),arrowfade(),topFunction()}),$(window).scroll(function(){(window.pageYOffset||document.documentElement.scrollTop)<30?$(".arrowword").stop(!0,!0).fadeIn(3e3):$(".arrowword").stop(!0,!0).fadeOut(3e3)}),document.addEventListener("DOMContentLoaded",function(){Typed.new("#typed",{stringsElement:document.getElementById("typed-strings"),typeSpeed:30,backDelay:2e3,loop:!0,contentType:"html",loopCount:null})});
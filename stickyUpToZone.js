/* add sticky class to element once you start scrolling and removes it if :
1 - You are already in the viewport
2 - You are back to top
Added delay classes for animations 

@author  Jean Christophe Lebrasse & Chapati
@version 1.0, 26/01/21
*/
var stickyElement = function($ele) {
   var stickyElementItem = $($ele);
   var element = stickyElementItem.offset().top;
   $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
         stickyElementItem.addClass("sticky");
         setTimeout(
            function () {
               if (stickyElementItem.hasClass('sticky')) {
                  stickyElementItem.addClass("sticky-up");
               }
            }, 500);
         if (scroll > (element - ($(window).height() + 100))) {
            stickyElementItem.removeClass("sticky sticky-up");
         }
      } else {
         stickyElementItem.removeClass("sticky sticky-up");
      }
   });
}

//usage
if ($(window).width() < 991) {
   stickyElement('.choice-summary');
}
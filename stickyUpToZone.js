function stickyElement($ele) {
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
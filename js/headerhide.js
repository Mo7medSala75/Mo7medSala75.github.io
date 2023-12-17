$(document).ready(function() {
    var header = $("#header");
    var scrollPosition = 0;
    
    $(window).scroll(function() {
      var currentScrollPosition = $(this).scrollTop();
      
      // Check if the current scroll position is below the header's height
      if (currentScrollPosition > header.height()) {
        // Scrolling down
        if (currentScrollPosition > scrollPosition) {
          header.addClass("header-hidden");
        } else {
          // Scrolling up
          header.removeClass("header-hidden");
        }
      } else {
        // At the top of the page
        header.removeClass("header-hidden");
      }
  
      // Update the scroll position
      scrollPosition = currentScrollPosition;
    });
  });
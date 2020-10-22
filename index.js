(function ($) {
  $(document).ready(function () {
    // hide .navbar first
    $(".navbar").hide();

    $(window).on("resize scroll", function () {
      if ($("#hero").isInViewport()) {
        // do something
        $(".navbar").hide();
      } else {
        // do something else
        $(".navbar").fadeIn();
      }
    });
  });

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom - 200 > viewportTop && elementTop < viewportBottom;
  };
})(jQuery);

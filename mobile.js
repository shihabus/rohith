(function ($) {
  $(document).ready(function () {
    // hide .navbar first
    $("#sticky").addClass("dark");
    $("nav").addClass("dark");

    $(window).on("resize scroll", function () {
      if ($("#hero").isInViewport()) {
        // do something
        $("#sticky").removeClass("light dark").addClass("dark");
        $("nav").removeClass("light dark").addClass("dark");
      } else {
        // do something else
        $("#sticky").removeClass("light dark").addClass("light");
        $("nav").removeClass("light dark").addClass("light");
      }
    });
  });

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
})(jQuery);

const lottie = document.getElementById("lottie");
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  // for mobile device
  lottie.innerHTML =
    '<lottie-player id="lottie" src="/mobileText.json" background="transparent"  speed="1"  style="width: 300px; height: 100px;" loop autoplay></lottie-player>';
} else {
  // for not mobile device
  lottie.innerHTML =
    '<lottie-player id="lottie" src="/header.json" background="transparent"  speed="1"  style="width: 300px; height: 100px;" loop autoplay></lottie-player>';
}

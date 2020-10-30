(function ($) {
  $(document).ready(function () {
    // hide .navbar first
    $("#sticky").addClass("dark");
    $("nav").addClass("dark");
    $(".link").addClass("dark");
    $("#menu-icon").addClass("dark");

    $(window).on("resize scroll", function () {
      if ($("#hero").isInViewport()) {
        // do something
        $("#sticky").removeClass("light dark").addClass("dark");
        $("nav").removeClass("light dark").addClass("dark");
        $(".link").removeClass("light dark").addClass("dark");
        $("#menu-icon").removeClass("light dark").addClass("dark");
      } else {
        // do something else
        $("#sticky").removeClass("light dark").addClass("light");
        $("nav").removeClass("light dark").addClass("light");
        $(".link").removeClass("light dark").addClass("light");
        $("#menu-icon").removeClass("light dark").addClass("light");
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
const width = $(window).width();

if (width >= 1440) {
  lottie.innerHTML =
    '<lottie-player id="lottie" src="/webHeader.json" background="transparent"  speed="1"  style="width: 850px; height: 135px;" loop autoplay></lottie-player>';
} else if (width >= 1024) {
  // for not mobile device
  lottie.innerHTML =
    '<lottie-player id="lottie" src="/webHeader.json" background="transparent"  speed="1"  style="width: 550px; height: 130px;" loop autoplay></lottie-player>';
} else if (width < 1024) {
  // for mobile device
  lottie.innerHTML =
    '<lottie-player id="lottie" src="/mobileHeader.json" background="transparent"  speed="1"  style="width: 303px;height: 122px;" loop autoplay></lottie-player>';
}

const isMobile = $(window).width() <= 768;
const heroTxt = document.getElementById("hero-text");

if (!isMobile) {
  // web
  heroTxt.innerHTML =
    '<lottie-player id="lottie" src="/heroText.json" background="transparent"  speed="1"  style="width: 850px; height: 200px;" loop autoplay></lottie-player>';
} else {
  heroTxt.innerHTML =
    '<lottie-player id="lottie" src="/heroTextMob.json" background="transparent"  speed="1"  style="width: 303px; height: 235px;" loop autoplay></lottie-player>';
}

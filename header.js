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

$("#menu-list").hide();
// menu icon
$(document).ready(function () {
  $("#menu-icon").on("click", function () {
    $("#menu-list").toggle();
    $("nav").toggleClass("expand");
    return false;
  });
});

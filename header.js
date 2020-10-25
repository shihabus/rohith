$("#menu-list").hide();
// menu icon
$(document).ready(function () {
  $("#menu-icon").on("click", function () {
    $("#menu-list").toggle();
    $("nav").toggleClass("expand");
    return false;
  });
});

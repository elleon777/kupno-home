import $ from "jquery";

function isSearchParams() {
  const paramsFromUrl = new URLSearchParams(window.location.search);
  return !!paramsFromUrl;
}

$(function () {
  if (isSearchParams()) {
    $(".filter__mobile-btn").addClass("active");
  }

  $(".filter__mobile-btn").on("click", function (e) {
    $("body").addClass("no-scroll");
    $(".filter__popup").addClass("open");
  });
  $(".filter__close").on("click", function (e) {
    $("body").addClass("no-scroll");
    $(".filter__popup").removeClass("open");
  });
});

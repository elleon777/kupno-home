import $ from "jquery";

$(function () {
  $(".header__toggle").on("click", function () {
    $("header").toggleClass("header--mobile-menu");
    $(".header__menu").slideToggle();
    $("body").toggleClass("no-scroll");
  });
});

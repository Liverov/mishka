/* PRODUCT CARD */
var cards = document.querySelectorAll('.card');
Array.prototype.forEach.call(cards, function (card) {
  var down,
      up,
      link = card.querySelector('h3 a');

  card.onmousedown = function () {
    return down = +new Date();
  };

  card.onmouseup = function () {
    up = +new Date();

    if (up - down < 200) {
      link.click();
    }
  };
});

/* TOGGLE MENU */
var button_open = document.querySelector(".main-nav__toggle--open");
var main_nav_toggle = document.querySelector(".main-nav__toggle");
var main_nav_list = document.querySelector(".main-nav__list");
var main_nav_wrapper = document.querySelector(".main-nav__wrapper");

button_open.addEventListener("click", function(e) {
  main_nav_wrapper.classList.toggle("main-nav__wrapper");
  main_nav_wrapper.classList.toggle("main-nav__wrapper--opened");
  main_nav_toggle.classList.toggle("main-nav__toggle--open");
  main_nav_toggle.classList.toggle("main-nav__toggle--close");
});

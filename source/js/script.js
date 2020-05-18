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
var main_nav_toggle = document.querySelector(".main-nav__toggle");
var button_open = document.querySelector(".main-nav__toggle--open");
var button_close = document.querySelector(".main-nav__toggle--close");
var main_nav_list = document.querySelector(".main-nav__list");
var main_nav_search = document.querySelector(".main-nav__search");
var main_nav_cart = document.querySelector(".main-nav__cart");

button_open.addEventListener("click", function(e) {
    main_nav_list.classList.add("show-block");
    main_nav_search.classList.add("show-block");
    main_nav_cart.classList.add("show-block");
    main_nav_toggle.classList.toggle("main-nav__toggle--open");
    main_nav_toggle.classList.toggle("main-nav__toggle--close");

    if(main_nav_toggle.classList.contains("main-nav__toggle--open")) {
      main_nav_list.classList.remove("show-block");
      main_nav_search.classList.remove("show-block");
      main_nav_cart.classList.remove("show-block");
    }
});

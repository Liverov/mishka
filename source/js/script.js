"use strict";
/* PRODUCT CARD */
var product_cards = document.querySelectorAll(".card");

Array.prototype.forEach.call(product_cards, function (card) {
  var down;
  var up;
  var link = card.querySelector("h3 a");

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

var main_nav_toggle = document.querySelector(".main-nav__toggle--open")
var site_list = document.querySelector(".site-list");
var profile_list = document.querySelector(".profile-list");

site_list.classList.remove('site-list--nojs');
profile_list.classList.remove('profile-list--nojs');

main_nav_toggle.addEventListener("click", function () {

  if(main_nav_toggle.classList.contains('main-nav__toggle--open')) {
    main_nav_toggle.classList.remove('main-nav__toggle--open');
    main_nav_toggle.classList.add('main-nav__toggle--close');
  } else {
    main_nav_toggle.classList.add('main-nav__toggle--open');
    main_nav_toggle.classList.remove('main-nav__toggle--open');
  }

  if(site_list.classList.contains('site-list--closed')) {
    site_list.classList.remove('site-list--closed');
    site_list.classList.add('site-list--opened');
  } else {
    site_list.classList.add('site-list--closed');
    site_list.classList.remove('site-list--opened');
  }

  if(profile_list.classList.contains('profile-list--closed')) {
    profile_list.classList.remove('profile-list--closed');
    profile_list.classList.add('profile-list--opened');
  } else {
    profile_list.classList.add('profile-list--closed');
    profile_list.classList.remove('profile-list--opened');
  }
});


var catalog_button = document.querySelectorAll(".catalog__button");
var product_order = document.querySelector(".product__order");
var modal = document.querySelector(".modal");

if(catalog_button || product_order) {

  for(var i = 0; i < catalog_button.length; i++) {
    catalog_button[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      modal.classList.add("modal-show");
    });
  }

  product_order.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
  });

  window.addEventListener("keydown", function(evt) {
    if(evt.keyCode === 27) {
      if(modal.classList.contains("modal-show")) {
        evt.preventDefault();
        modal.classList.remove("modal-show");
      }
    }
  });

  modal.addEventListener("click", function(evt) {
    if(evt.target === modal) {
      evt.preventDefault();
      if (modal.classList.contains("modal-show")) {
        modal.classList.remove("modal-show");
      }
    }
  });
}

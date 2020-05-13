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

var buy = document.querySelectorAll(".buy");
var inCart = document.querySelector(".good-to-cart");
var closeBtn = document.querySelector(".close");

buy.addEventListener("click", function(evt) {
  evt.preventDefault();
  inCart.classList.add("good-to-cart-show");
});
closeBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  inCart.classList.remove("good-to-cart-show");
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (inCart.classList.contains("good-to-cart-show")) {
      evt.preventDefault ();
      inCart.classList.remove("good-to-cart-show");
      }
  }
});

var buy = document.querySelectorAll(".buy");
var inCart = document.querySelectorAll(".good-to-cart");
var closebtn = document.querySelectorAll(".good-to-cart .close");

for(var i = 0; i < buy.length; i++){
  buy[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    inCart[0].classList.add("good-to-cart-show");
  });
};

for(var i = 0; i < closebtn.length; i++){
  closebtn[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    inCart[0].classList.remove("good-to-cart-show");
  });
};

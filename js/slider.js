var left = document.querySelector(".left-button");
var right = document.querySelector(".right-button");
var slide1 = document.querySelector(".slide-tool-1");
var slide2 = document.querySelector(".slide-tool-2");
var chbox1 = document.querySelector("#button-1");
var chbox2 = document.querySelector("#button-2");


left.addEventListener('click', function() {
  slide1.classList.toggle("current-slide");
  slide2.classList.toggle("current-slide");
  if (slide1.classList.contains("current-slide")) {
    chbox1.checked = true;
  } else {
    chbox2.checked = true;
  };
})

right.addEventListener('click', function() {
  slide1.classList.toggle("current-slide");
  slide2.classList.toggle("current-slide");
  if (slide2.classList.contains("current-slide")) {
    chbox2.checked = true;
  } else {
    chbox1.checked = true;
  };
})

chbox1.onclick = function() {
  slide1.classList.add("current-slide");
  slide2.classList.remove("current-slide");
};
chbox2.onclick = function() {
  slide2.classList.add("current-slide");
  slide1.classList.remove("current-slide");
};

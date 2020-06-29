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



var writeUsBtn = document.querySelector(".write-us-button");
var writeUs = document.querySelector(".write-us");
var closeBttn = writeUs.querySelector(".close");
var writeUsform = writeUs.querySelector(".write-us-form");
var writeUsname = writeUs.querySelector(".write-us-name");
var writeUsemail = writeUs.querySelector(".write-us-email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}


writeUsBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeUs.classList.add("popup-show");
  if (storage) {
    writeUsname.value = storage;
    writeUsemail.focus();
  } else {
    writeUsname.focus();
  }
});

closeBttn.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeUs.classList.remove("popup-show");
  writeUs.classList.remove("write-us-error");
});

writeUsform.addEventListener("submit", function (evt) {
  if (!writeUsname.value || !writeUsemail.value) {
  evt.preventDefault ();
  writeUsform.classList.remove("write-us-error");
  writeUsform.offsetWidth = writeUsform.offsetWidth;
  writeUsform.classList.add("write-us-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("login", writeUsname.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUs.classList.contains("popup-show")) {
      evt.preventDefault ();
      writeUs.classList.remove("popup-show");
      writeUs.classList.remove("write-us-error");
    }
  }
});
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

var mapPopup = document.querySelector(".map-window");
var mapImg = document.querySelector(".map");
var closeBtn = mapPopup.querySelector(".close");

mapImg.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup-show-map");
});

closeBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("popup-show-map");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("popup-show-map")) {
      evt.preventDefault ();
      mapPopup.classList.remove("popup-show-map");
      }
  }
});



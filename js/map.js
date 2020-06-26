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

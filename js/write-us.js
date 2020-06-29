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

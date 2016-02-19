var link = document.querySelector(".contacts-feedback-btn");

var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-content-close");

/*var form = popup.querySelector(".modal-content-form");
var name = popup.querySelector(".modal-content-form input[name=name]");
var email = popup.querySelector(".modal-content-form input[name=email]");

var storage = localStorage.getItem("login");*/

link.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-content-show");
  popup.classList.add("modal-content-show");

/*  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }*/

});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  //popup.classList.remove("modal-error");
  overlay.classList.remove("modal-content-show");
});
/*
form.addEventListener("submit", function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});*/

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      //popup.classList.remove("modal-error");
      overlay.classList.remove("modal-content-show");
    }
  }
});

// change main-nav-button svg and open/close main-nav

  var button = document.getElementById("main-nav__button");
  var nav = document.querySelector(".main-nav");
  var pageHeader = document.querySelector(".page-header");
  var burger = button.querySelector(".main-nav__svg--burger");
  var cross= button.querySelector(".main-nav__svg--cross");
  nav.classList.add("main-nav--closed");
  button.classList.remove("main-nav__button--hidden");
  pageHeader.classList.add("page-header--closed");
  button.addEventListener("click", function() {
    nav.classList.toggle("main-nav--closed");
    button.classList.toggle("main-nav__button--closed");
    button.classList.toggle("main-nav__button--opened");
    pageHeader.classList.toggle("page-header--closed");
    burger.classList.toggle("hidden");
    cross.classList.toggle("hidden");
  });

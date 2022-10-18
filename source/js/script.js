const link = document.querySelector(".user-nav__burger");
const modal = document.querySelector(".user-nav__list");
const toggle = document.querySelector(".user-nav__line--center");
const wire = document.querySelector(".user-nav__line--top");
const down = document.querySelector(".user-nav__line--down");





  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.toggle("user-nav__list--active");
  });
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    toggle.classList.toggle("active--center");
  });

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    wire.classList.toggle("active--wire");
  });

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    down.classList.toggle("active--down");
  });

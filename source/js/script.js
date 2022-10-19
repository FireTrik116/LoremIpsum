const link = document.querySelector(".user-nav__burger");
const modal = document.querySelector(".user-nav__list");
const toggle = document.querySelector(".user-nav__line--center");
const wire = document.querySelector(".user-nav__line--top");
const down = document.querySelector(".user-nav__line--down");
let select_input = document.querySelector(".select-menu__input");
let select_menu = document.querySelector(".select-menu");
let select_items = document.querySelectorAll(".select-menu__item");
let slider = document.getElementById("sliderRange");
let output = document.getElementById("demo");




select_input.addEventListener("click",()=>{
  select_menu.classList.toggle("active");


});

select_items.forEach((item) =>{
 item.addEventListener("click", (evt)=>{
  select_input.textContent = evt.target.textContent
  select_menu.classList.toggle("active");
 }) 
}); 

output.innerHTML = slider.value;
slider.oninput = function(){
  output.innerHTML = this.value;
}

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

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    link.classList.toggle("user-nav__burger--active");
  });

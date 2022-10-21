const burger = document.querySelector(".user-nav__burger");
const modal = document.querySelector(".user-nav__list");
let select_input = document.querySelector(".select-menu__input");
let select_menu = document.querySelector(".select-menu");
let select_items = document.querySelectorAll(".select-menu__item");
let slider = document.getElementById("sliderRange");
let output = document.getElementById("demo");




select_input.addEventListener("click",()=>{
  select_menu.classList.toggle("select-menu--active");


});

select_items.forEach((item) =>{
 item.addEventListener("click", (evt)=>{
  select_input.textContent = evt.target.textContent
  select_menu.classList.toggle("select-menu--active");
 }) 
}); 



slider.oninput = function(){
  output.innerHTML = `${this.value}%`;
}

  burger.addEventListener("click", function (evt) {
    evt.preventDefault();
    burger.classList.toggle("user-nav__burger--active");
    modal.classList.toggle("user-nav__list--active");
  });



document.addEventListener("scroll", function(){

const elements = document.querySelectorAll(".card");

elements.forEach(el => {

let position = el.getBoundingClientRect().top;
let screen = window.innerHeight;

if(position < screen-100){

el.style.opacity="1";
el.style.transform="translateY(0)";

}

});

});

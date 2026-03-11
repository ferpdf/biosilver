window.addEventListener("scroll", function(){

let elements = document.querySelectorAll(".card, .sector, .galeria img");

elements.forEach(function(el){

let position = el.getBoundingClientRect().top;

let screen = window.innerHeight;

if(position < screen - 100){

el.style.opacity = "1";
el.style.transform = "translateY(0px)";

}

});

});

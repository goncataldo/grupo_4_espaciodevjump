const botonMenu = document.querySelector("#botonMenu");
const menu = document.querySelector("#menu")
botonMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
    botonMenu.classList.toggle("active");
})
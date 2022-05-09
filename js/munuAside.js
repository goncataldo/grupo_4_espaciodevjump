const $elAside=document.querySelector('.elAside');
const $menuChiquito=document.querySelector('.menuChiquito');

$menuChiquito.addEventListener('click',()=>{
    $elAside.classList.toggle("active");
    console.log("gola");
    /* botonMenu.classList.toggle("active"); */
})
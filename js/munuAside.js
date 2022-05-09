const $elAside=document.querySelector('.elAside');/* captura en una constante la etiqueta que tenga el nombre de su clase como ".elAside" */
const $menuChiquito=document.querySelector('.menuChiquito');/*captura en una constante la etiqueta que tenga el nombre de su clase como ".menuChiquito"  */

$menuChiquito.addEventListener('click',()=>{/* al hacer click en el menu chiquito  */
    $elAside.classList.toggle("active");/* a la etiqueta se le agrega la clase "active" y al hacer click otra ves se le quita*/
})

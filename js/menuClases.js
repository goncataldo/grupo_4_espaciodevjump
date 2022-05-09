const $lasClases=document.querySelectorAll(".clase1") /* Captura todas las clases que tengan el nombre de "clase1" en un array */
const $losItem=document.querySelectorAll('.botonesDeClases');/* Captura todas las clases que tengan el nombre de "botonesDeClases" en un array */

function quitaYAgregaClases(){/* funcion remueve nombre de la clase "activo" y se le agrega la misma clase al "this" */
$losItem.forEach(elemento=>{/* itera el array de "botonosDeClase" */
    elemento.classList.remove('activo')/* a cada elemento le quita la clase activo */
    this.classList.add('activo')/* al elemento this(despues se le invoca) se le asigna la clase activo */
})
}

function numClasePasadoPorParametro(elNum){/* funcion para remover clase "activo1" y agregar clase al numero de iteracion pasado por parametro */
    for(let i=0;i<$lasClases.length;i++){/* recorro el array de las clases que tengan el nombre "clase1" */
        if(i==elNum){/* si i es igual al numero pasado por parametro */
            $lasClases[i].classList.add('activo1')/* a la clase que este en el iterador i se le asigna la clase "activo1" */
        }else{
            $lasClases[i].classList.remove('activo1');/* a las demas se les quita el nombre de la clase */
        }
        
       
    }
}

/* ejecuciones en la pagina */
$losItem.forEach(elemento=>{/* recorre todos los elementos de la clase "botonesDeClase" */
    elemento.addEventListener('click',quitaYAgregaClases)/* al hacer click en uno de los elementos recorridos se ejecuta la funcion quitaYAgregaClases()
    this va a ser igual al elemento al que le hacemos click */
    
})

for(let i=0;i<$losItem.length;i++){/* recorre todos los elementos de la clase "botonesDeClase" */ 
    $losItem[i].addEventListener('click',(e)=>{/* al hacer click en uno de los elemento recorridos ejecuta la function (numClasePasadoPorParametro) */
        numClasePasadoPorParametro(i)
        /* la funcion recibe por parametro el numero de iteracion i
        para que... ej:
        si apreto el boton "Clase 7", me aparezca solo la seccion de la clase 7 */
    })
}
const $lasClases=document.querySelectorAll(".clase1")
const $losItem=document.querySelectorAll('.botonesDeClases');

function quitaYAgregaClases(){
$losItem.forEach(elemento=>{
    elemento.classList.remove('activo')
    this.classList.add('activo')
})
}

function averSi(elNum){
    for(let i=0;i<$lasClases.length;i++){
        if(i==elNum){
            $lasClases[i].classList.add('activo1')
        }else{
            $lasClases[i].classList.remove('activo1');
        }
        
       
    }
}


$losItem.forEach(elemento=>{
    elemento.addEventListener('click',quitaYAgregaClases)
    
})

for(let i=0;i<$losItem.length;i++){
    $losItem[i].addEventListener('click',(e)=>{
        /* console.log(i); */
        averSi(i)
    })
}
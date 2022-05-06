const $lasClases=document.querySelectorAll(".clase1")
const $losItem=document.querySelectorAll('.botonesDeClases');

function quitaYAgregaClases(){
$losItem.forEach(elemento=>{
    elemento.classList.remove('active')
    this.classList.add('active')
})
}

function averSi(elNum){
    for(let i=0;i<$lasClases.length;i++){
        if(i==elNum){
            $lasClases[i].classList.add('active1')
        }else{
            $lasClases[i].classList.remove('active1');
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
// function mudarCor (){
//     let h = document.getElementsByTagName("h1")[0]
//     h.style.color = "blue"
    

// }

// function mudarCor1 (){
//     let h = document.getElementsByTagName("h1")[0]
//     h.style.color = "black"
    

// }

var numero = 0;
var interval;


function AtualizarText(){
   let h =  document.getElementsByTagName("h1")[0];
   h.innerHTML += " " + numero;
    numero++;


}


function iniciar(){

   interval = setInterval(AtualizarText, 1000)

}

function parar(){

    clearInterval(interval);

}
// let lista = document.getElementById("lista");

// lista.dataset.num = "10";

// let id = lista.dataset.id;
// console.log(id)

// let num = parseInt(lista.dataset.num)

// let conteudo = ""

// for (let i = 0; i < num; i++){
//     conteudo += "<li>" + i + "</li>";
// }

// lista.innerHTML = conteudo

let jogador = document.getElementById("jogador");

let xInicial = 0;
let yInicial = 0;


function moverJogardorPara(x,y){

    let posX = x + "px"
    let posY = y + "px"

    jogador.style.top = posX;
    jogador.style.left = posY;
    

}

setInterval(function(){

    moverJogardorPara(xInicial++, yInicial++)

}, 2)
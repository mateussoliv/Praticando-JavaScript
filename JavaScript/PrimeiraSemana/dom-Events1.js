function h1click(){

    console.log("Executando Function")

}

function changeH1(input){

    let h1 = document.getElementsByTagName("h1")[0]
    h1.innerHTML = input.value;

}

let t = document.getElementById("titulo");

// t.onclick  = mudarText;

t.addEventListener("mouseover", mudarText);
t.addEventListener("mouseout", mudarOut);


function mudarText(){
    this.innerHTML = "Testado e Aprovado"

}

function mudarOut(){
    this.innerHTML = "Fora do Elemento"
}


window.onload = function (){

    let p1 = document.getElementById("p1");
    console.log(p1)


}
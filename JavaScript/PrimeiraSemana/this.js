let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");


t1.onclick = colocarEmMaiusculo;

t2.onclick = colocarEmMaiusculo;


function colocarEmMaiusculo(){
    this.innerHTML = this.innerHTML.toUpperCase();
}

// Quando usar ou não parenteses: 

function ret3(){
    console.log(3);
    return 5;
}

function f(){
    console.log("teste")
    console.log(this)
}

function f1(){
    console.log("Teste F1")
    console.log(this)
}

window.onload = function(){
    let h1 = document.getElementsByTagName("h1")[0];

    h1.addEventListener("click", f1);
}
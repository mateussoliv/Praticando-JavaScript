
var pessoas = ["Mateus", "Jose", "João", "Marcos", "Pamela"]

function sortear(){

    let np = pessoas.length;
    let ns = Math.floor(Math.random() * np);

    document.getElementById("d").innerHTML = pessoas[ns]
}

// onload = function(){
//     let nome = this.localStorage.getItem("nome")
//     let h1 = this.document.getElementById("nome");
//     h1.innerHTML = nome
// }

// function atualizar (element){

//     let valor = element.value;
//     console.log(valor)

//     let h1 = document.getElementById("nome");
//     h1.innerHTML = valor;

//     localStorage.setItem("nome", valor)
// }

localStorage.setItem("numero", 5)

let n = localStorage.getItem("numero")
console.log(JSON.parse(n))

let n2 = 5
console.log(n2)


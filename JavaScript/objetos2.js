
// function obj(n,s){

//     return{ nome: n, sobrenome: s}

// }


function obj(n, s) {

    this.nome = n;
    this.sobrenome = s;

}

var b = new obj("Mateus","Oliveira")


console.log(b)
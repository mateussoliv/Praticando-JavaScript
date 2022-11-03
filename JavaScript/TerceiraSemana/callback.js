// let dobro = function(n){
//     return  2* n;
// }

// console.log(dobro(15))

// function tchau () {
//     console.log("Tchau")
// }

// function saudacao(s,nome){
//     s();
//     console.log(nome)
// }

saudacao(tchau, "Mateus")

let usuarios = ["Mateus", "João", "Marcia"];


function inserirUsuario(nome, callback){

    setTimeout(() => {usuarios.push(nome);
        
    callback();
    
    }, 1000);

}

function listarUsuarios(){
    console.log(usuarios);
}

inserirUsuario("Igor", listarUsuarios);

listarUsuarios();
let usuarios = ["Mateus", "João", "Marcia"];


function inserirUsuario(nome){

    let promise = new Promise(function(resolve,reject){

        setTimeout(() => {usuarios.push(nome);
            
            let error = false;

            if(!error){
                resolve()
            }else{
                reject({msg:"Erro de Qualquer coisa"})
            }

            }, 1000);

    })

    return promise;

}

function listarUsuarios(){
    console.log(usuarios);
}

// inserirUsuario("Igor").then(listarUsuarios).catch((error)=> {
//     console.log(error.msg)
// });
 
 async function executar(){

   await inserirUsuario("Mateus");
    listarUsuarios();

}

executar();




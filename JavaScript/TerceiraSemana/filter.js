function novoAluno(nome, idade){

        return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("Mateus", 21),
    novoAluno("José", 45),
    novoAluno("João", 34),
]

// for (let aluno of alunos){
//     if(aluno.idade < 30){
//         console.log(aluno.nome)
//     }
// }

function temMenosde30(aluno){
    return aluno.idade < 30
}

function comMaisde30(aluno){
    return aluno.idade > 30
}

// let alunosComMenosde30 = alunos.filter(temMenosde30);

// let alunosComMaisde30 = alunos.filter(comMaisde30);

// console.log(alunosComMenosde30)
// console.log(alunosComMaisde30)

function filtro(callback){
    let alunosFiltrados = [];
    for(let aluno of alunos){
        if(callback(aluno)){
            alunosFiltrados.push(aluno)
        }
    }
    return alunosFiltrados;
}

console.log(filtro(temMenosde30))

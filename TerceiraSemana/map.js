function novoAluno(nome, idade){

    return {nome, idade}
}

let alunos = [
novoAluno("Mario", 23),
novoAluno("Mateus", 21),
novoAluno("José", 45),
novoAluno("João", 34),
]


function nomeIdade(aluno){
    // return aluno.nome + " tem " + aluno.idade + " anos";
    return {nome: aluno.nome,
            idade: aluno.idade}
}

console.log(alunos.map(nomeIdade))
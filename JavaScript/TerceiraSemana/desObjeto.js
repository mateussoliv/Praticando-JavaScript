// Desistruturando Objetos

var aluno = {

    matricula: 1234,
    nome: "Mateus",
    telefone: 123123123,
    cidade: "Santos"
}

var {matricula} = aluno;

console.log(aluno.matricula)
function criarAluno(nome, n1, n2){

    var aluno = {
        nome:nome,
        nota1: n1,
        nota2: n2,
        media: function (){
            return(this.nota1 + this.nota2) / 2;
        }
    }

    return aluno;
}

 var turma = [
    criarAluno("Igor", 9, 7),
    criarAluno("Mateus", 9, 7),
    criarAluno("Carlos", 8, 5)
]


var aluno = turma[0];

turma.forEach(function(elemento){

    console.log(elemento)

})

for (var aluno of turma){

console.log(aluno.nome + " - Nota1: " + aluno.nota1 + " - " + " Nota2: " + aluno.nota2 + " Media = " + aluno.media())

}
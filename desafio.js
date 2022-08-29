const alunoCurso = {
    nome: "João",
    idade: 31,
    curso: "FullStack",
    instituicao: "Kenzie Br",
    materias: ["Html", "Css", "JavaScript", "Python"],
    situacaoMatricula: true,
  };
  digiteONumero()
function digiteONumero () {
    let consulta = prompt('Digite o número correspondente ao que deseja consultar. 1 curso;   2 matéria;   3 situação de matrícula;   4 gerar carteira;')
  if (consulta > 4 || consulta < 0) {

    for ( i = 0; i < 1; i++ ){
        alert("inserção incorreta de dados.")
        digiteONumero()
    } 
  }
  if (consulta > 0 && consulta <5) { 
    // aqui coloca a consulta tendo a função chamada 
    if ( consulta == 1) { getTheCurse(alunoCurso)}
    if (consulta ==2 ) {getTheSubjects(alunoCurso)}
    if (consulta==3){ registrationStatus(alunoCurso)}
    if (consulta==4){generateStudentCard(alunoCurso)}
  }
}



function getTheCurse ( aluno ) {
    alert(`o curso é ${aluno.curso}`)
   let novaConsulta= prompt('deseja continuar consultando? 1 - sim 2- nao ')
   if (novaConsulta == 1) { digiteONumero()}
   else { return alert("consulta concluída")}
}

function getTheSubjects ( aluno) {
    alert(`Matéria dos curso: ${aluno.materias}`)
   let novaConsulta= prompt('deseja continuar consultando? 1 - sim 2- nao ')
   if (novaConsulta == 1) { digiteONumero()}
   else { return alert("consulta concluida")}
}
function registrationStatus (aluno) {
    if ( aluno.situacaoMatricula == true) { alert(`Ativo`)}
   else { alert(`Inativo`)}
   let novaConsulta= prompt('deseja continuar consultando? 1 - sim 2- nao ')
   if (novaConsulta == 1) { digiteONumero()}
   else { return alert("consulta concluida")}
}
function generateStudentCard (aluno) {
    let cardInformation = `nome: ${aluno.name}, idade: ${31}, curso: ${aluno.curso}, instituição: ${aluno.instituicao};`
    alert(`A carteira de estudante tem os dados: ${cardInformation}`)
    let novaConsulta= prompt('deseja continuar consultando? 1 - sim 2- nao ')
   if (novaConsulta == 1) { digiteONumero()}
   else { return alert("consulta concluida")}
}   


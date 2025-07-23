/*  Escreva um programa que verifica a situação de um estudante
de acordo com sua média final. */

function situacaoEstudante(media){
    if(media < 5){
        console.log(`Aluno reprovado com média ${media}.`)
    }else if(media >= 5 && media <= 6.9){
        console.log(`Aluno apto à recuperação com média ${media}.`)
    }else {
        console.log(`Aluno aprovado com média ${media}.`)
    }
}

situacaoEstudante(4.5);
situacaoEstudante(5.0);
situacaoEstudante(5.1);
situacaoEstudante(6.2);
situacaoEstudante(6.9);
situacaoEstudante(7.0);
situacaoEstudante(7.1);
situacaoEstudante(8.6);
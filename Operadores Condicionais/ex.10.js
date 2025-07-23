/* Escreva um programa que recebe duas notas de um aluno,
calcula a média e imprime se o aluno foi aprovado ou reprovado
(considerando que a média para aprovação é 7). */

function calcularMedia(nota1, nota2){
    let media = (nota1 + nota2)/2;

    if(media >= 7){
        console.log(`O aluno foi aprovado com média ${media}`)
    }else {
        console.log(`O aluno foi reprovado com média ${media}`)
    }
}

calcularMedia(10, 9);
calcularMedia(7, 7);
calcularMedia(7, 2);
calcularMedia(8, 5);
calcularMedia(5, 4);

/* : Escreva um programa que imprime uma classificação baseada na nota de um aluno. 

Descrição: Neste exercício, você vai criar uma função que recebe uma nota de um
aluno como argumento e imprime uma classificação com base nessa nota. */

function classNota(nota){
    if(nota >= 0 && nota <= 20){
        console.log(`A nota ${nota} recebe classificação F.`)
    }else if(nota > 20 && nota <= 40){
        console.log(`A nota ${nota} recebe classificação D.`)
    }else if(nota > 40 && nota <= 60){
        console.log(`A nota ${nota} recebe classificação C.`)
    }else if(nota > 60 && nota <= 80){
        console.log(`A nota ${nota} recebe classificação B.`)
    }else{
        console.log(`A nota ${nota} recebe classificação A.`)
    }
}

classNota(12);
classNota(20);
classNota(35);
classNota(45);
classNota(60);
classNota(75);
classNota(80);
classNota(90);
classNota(100);
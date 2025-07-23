/* : Escreva um programa que determina a estação do ano com
base no mês.

Descrição: Neste exercício, você criará uma função que recebe um número de 1 a 12
(representando os meses de janeiro a dezembro) e imprimirá a estação do ano
correspondente. */

function estacao(mes){
    if(mes >= 3 && mes < 6){
        console.log(`A estação do mês ${mes} é outono!`)
    }else if(mes >= 6 && mes < 9){
        console.log(`A estação do mês ${mes} é inverno!`)
    }else if(mes >= 9 && mes < 12){
        console.log(`A estação do mês ${mes} é primavera!`)
    }else {
        console.log(`A estação do mês ${mes} é verão!`)
    }
}

estacao(1);
estacao(2);
estacao(3);
estacao(4);
estacao(5);
estacao(6);
estacao(7);
estacao(8);
estacao(9);
estacao(10);
estacao(11);
estacao(12);
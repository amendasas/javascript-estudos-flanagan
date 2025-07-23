/* Escreva um programa que determina o número de dias em um
mês.

Descrição: Neste exercício, você criará uma função que recebe o número de um mês e
imprime o número de dias desse mês. */

function numeroDias(mes){
    switch(mes){
        case 2:
            console.log(`O mês ${mes} tem 28 ou 29 dias!`);
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log(`O mês ${mes} tem 30 dias!`);
            break;
        default:
            console.log(`O mês ${mes} tem 31 dias!`);
    }
}

numeroDias(1);
numeroDias(2);
numeroDias(3);
numeroDias(4);
numeroDias(5);
numeroDias(6);
numeroDias(7);
numeroDias(8);
numeroDias(9);
numeroDias(10);
numeroDias(11);
numeroDias(12);

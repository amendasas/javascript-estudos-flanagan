/* : Escreva um programa que determina se um número é par ou
ímpar.

Descrição: Nesse exercício, você vai criar uma função que recebe um número como
argumento e imprime se ele é par ou ímpar. */

function parOuImpar(numero){
    if(numero % 2 == 0){
        console.log(`O número ${numero} é par!`)
    }else {
        console.log(`O número ${numero} é ímpar!`)
    }
}

parOuImpar(1);
parOuImpar(2);
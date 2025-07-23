/* : Escreva um programa que determina o maior entre três
números.

Descrição: Nesse exercício, você irá criar uma função que recebe três números como
argumentos e imprime o maior deles. */

function maiorNumero(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log(`O maior número entre os números é ${num1}`)
    }else if(num2 > num1 && num2 > num3){
        console.log(`O maior número entre os números é ${num2}`)
    }else{
        console.log(`O maior número entre os números é ${num3}`)
    }
}

maiorNumero(2, 4, 6);
maiorNumero(8, 9, 7);
maiorNumero(10, 12, 45);
maiorNumero(9, 2, 4);
maiorNumero(8, 5, 2);
maiorNumero(10.2, 15.9, 19.5);
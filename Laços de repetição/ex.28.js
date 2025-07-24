/* Usando um laço while, calcule e imprima a soma de todos os
números de 1 a 100.

Descrição: Neste exercício, você deve criar um loop usando a estrutura de repetição
while que percorra de 1 a 100 e calcule a soma de todos esses números. */

let n = 1;
let soma = 0;
while(n <= 100){
    soma = soma + n;
    n++;
}
console.log(`A soma dos números de 1 a 100 é igual a ${soma}.`)
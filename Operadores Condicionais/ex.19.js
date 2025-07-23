/*  Escreva um programa que verifica se um número está dentro
de um determinado intervalo.

Descrição: Neste exercício, você vai criar uma função que recebe três números como
argumentos: um número a ser verificado, o limite inferior e o limite superior do
intervalo. A função deve imprimir se o número está dentro do intervalo ou não. */

function dentroIntervalo(numero, limInf, limSup){
    if(numero >= limInf && numero <= limSup){
        console.log(`O número ${numero} está no intervalo entre ${limInf} e ${limSup}.`)
    }else{
        console.log(`O número não está dentro do limite estabelecido!`)
    }
}

dentroIntervalo(5, 1, 10);
dentroIntervalo(15, 1, 10);
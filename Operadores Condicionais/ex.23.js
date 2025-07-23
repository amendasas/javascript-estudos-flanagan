/* Escreva um programa que verifica as cores de um semafáro.

Descrição: Neste exercício, você deve criar uma função que recebe uma cor, e imprime
no console o que essa cor representa, o console deve imprimir uma mensagem específica
para cores que não existem em um semáforo.. */

function semafaro(cor){
    if(cor === 'verde'){
        console.log(`A cor ${cor} significa SIGA EM FRENTE.`)

    }else if(cor === 'amarelo'){
        console.log(`A cor ${cor} significa ATENÇÃO.`)

    }else if(cor === 'vermelho'){
        console.log(`A cor ${cor} significa PARE.`)

    }else{
        console.log(`Esta cor não existe em um semáforo!`)
    }
}

semafaro('verde');
semafaro('amarelo');
semafaro('vermelho');
semafaro('laranja');
semafaro('roxo');
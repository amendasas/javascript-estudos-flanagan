/* Escreva um programa que recebe um número e verifica se ele
é positivo, negativo ou zero. */

function verificaNumero(numero){
    if(numero > 0){
        console.log(`O número ${numero} é positivo!`)
    } else if(numero < 0){
        console.log(`O número ${numero} é negativo!`)
    }else {
        console.log(`O número ${numero} é zero!`)
    }
};

verificaNumero(2);
verificaNumero(-2);
verificaNumero(0);
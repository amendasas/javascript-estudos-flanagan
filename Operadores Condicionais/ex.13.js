/* Escreva um programa que calcula o IMC (Índice de Massa
Corporal) de uma pessoa e imprime uma mensagem indicando se a pessoa
está abaixo do peso, com peso normal, com sobrepeso ou obesa. */

function IMC(altura, peso){
    let imcCompleto = (peso)/Math.pow(altura, 2);
    let imc = imcCompleto.toFixed(2);
     
    if(imc < 18.5){
        console.log(`Com imc igual a ${imc}. Você está abaixo do peso.`)
    }else if(imc >= 18.5 && imc < 25){
        console.log(`Com imc igual a ${imc}. Você está com o peso normal.`)
    }else if(imc >= 25 && imc < 30){
        console.log(`Com imc igual a ${imc}. Você está com sobrepeso.`)
    }else {
        console.log(`Com imc igual a ${imc}. Você está com obesidade.`)
    }
}

IMC(1.70, 60);
IMC(1.70, 80);
IMC(1.70, 90);
IMC(1.70, 100);

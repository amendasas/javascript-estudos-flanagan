/*  Usando um laço while, crie um programa que adivinha um
número que o usuário pensou, através do método de busca binária.

Descrição: Neste exercício, você vai simular um jogo onde o usuário "pensa" em um
número de 1 a 100 e o programa deve adivinhar o número usando o método de busca
binária. Para simplificar, vamos supor que o número pensado pelo usuário é 50. */

function adivinharNumero(valorProcurado){
    let inicio = 1;
    let fim = 100;


    while(inicio <= fim){
        const meio = Math.floor((inicio + fim) / 2);

        if(meio == valorProcurado){
            console.log(`O valor pensado pelo usuário foi ${meio}`);
            break;
        }else if(meio < valorProcurado){
            inicio = meio + 1
        }else{
            fim = meio - 1
        }
    }

    return -1;  // Esta linha só será executada se o número não estiver entre 1 e 100

}

adivinharNumero(50);
adivinharNumero(45);
adivinharNumero(87);
adivinharNumero(10);
adivinharNumero(1);
adivinharNumero(45);
adivinharNumero(102);
adivinharNumero(-2);
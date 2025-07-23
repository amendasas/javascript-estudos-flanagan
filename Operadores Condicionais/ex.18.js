/* : Escreva um programa que verifica se uma pessoa pode dirigir
com base na idade.

Descrição: Nesse exercício, você vai criar uma função que recebe a idade de uma
pessoa e verifica se ela pode dirigir. No Brasil, apenas pessoas com mais de 18 anos
podem tirar carteira de habilitação. */

function podeDirigir(idade){
    if(idade >= 18){
        console.log(`Uma pessoa com ${idade} anos está apto à tirar carteira de habilitação!`)
    }else{
        console.log(`Uma pessoa com ${idade} anos ainda não está apto à tirar carteira de habilitação!`)
    }
}

podeDirigir(16);
podeDirigir(17);
podeDirigir(18);
podeDirigir(19);
podeDirigir(60);

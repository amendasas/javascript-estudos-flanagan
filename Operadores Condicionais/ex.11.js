/* Escreva um programa que verifica se uma pessoa pode votar
com base na idade. */

function podeVotar(idade){
    if(idade < 16){
        console.log(`Idade: ${idade} anos. Não vota.`)
    }else if(idade >= 16 && idade <= 17 || idade >= 70){
        console.log(`Idade: ${idade} anos. O voto é facultativo.`)
    }else{
        console.log(`Idade: ${idade} anos. O voto é obrigatório.`)
    }
}

podeVotar(14);
podeVotar(16);
podeVotar(17);
podeVotar(18);
podeVotar(19);
podeVotar(61);
podeVotar(70);
podeVotar(71);
podeVotar(84);

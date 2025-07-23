/* : Escreva um programa que verifica se uma palavra é um
palíndromo. */

function verificaPalindromo(palavra){
    let palavraInvertida = palavra.split('').reverse().join('');

    if (palavra === palavraInvertida){
        console.log(`A palavra "${palavra}" invertida é "${palavraInvertida}" e é um palíndromo!`);
    }else {
        console.log(`A palavra "${palavra}" invertida é "${palavraInvertida}" e não é um palíndromo!`);
    }
}

verificaPalindromo('ajuda');
verificaPalindromo('arara');
verificaPalindromo('gato');
verificaPalindromo('reviver');
verificaPalindromo('ana');
verificaPalindromo('português');
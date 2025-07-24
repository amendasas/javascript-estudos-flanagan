/* Usando um laço for, imprima todos os números primos de 1 a
100.

Descrição: Neste exercício, você precisa percorrer todos os números de 1 a 100 e
imprimir apenas aqueles que são primos. Lembre-se, um número primo é um número
natural maior do que 1 que não tem divisores positivos outros que 1 e ele mesmo. */


for (let index = 2; index <= 100; index++) {
    let eprimo = true;
    for (let divisor = 2; divisor < index; divisor++) {
        if(index % divisor == 0){
            eprimo = false;
            break;
        }
    }
    if(eprimo){
        console.log(`${index} é um número primo!`)
    }
}


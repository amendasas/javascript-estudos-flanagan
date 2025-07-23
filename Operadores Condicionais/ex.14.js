/* Escreva um programa que verifica se um ano é bissexto. */

function anoBissexto (ano){
    if(ano % 4 == 0 && ano % 100 != 0 || (ano % 400 == 0)){
        console.log(`O ano ${ano} é um ano bissexto`)
    }else {
        console.log(`O ano ${ano} não é um ano bissexto`)
    }
}

anoBissexto(1894);
anoBissexto(1987);
anoBissexto(1999);
anoBissexto(2000);
anoBissexto(2001);
anoBissexto(2024);
anoBissexto(2025);
anoBissexto(2026);
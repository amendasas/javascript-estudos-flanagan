/* Usando um laço do-while, crie um jogo de "Pedra, papel e
tesoura" contra o computador.

Descrição: Neste exercício, você vai simular um jogo de "Pedra, papel e tesoura"
contra o computador. Para simplificar, vamos supor que a escolha do usuário é sempre
"pedra". */


let escolhaUsuario = "pedra";
let escolhaComputador;
let resultado;

do{
    // Escolhe aleatoriamente entre os valores possíveis 0, 1 ou 2
    let aleatorio = Math.floor(Math.random() * 3);

    switch (aleatorio) {
        case 0:
            escolhaComputador = 'pedra';
            break;
        case 1:
            escolhaComputador = 'papel';
            break;
        case 2:
            escolhaComputador = 'tesoura';
            break;
    }

    if(escolhaUsuario == 'pedra' && escolhaComputador == 'tesoura'){
        console.log(`O usuário escolheu ${escolhaUsuario} e o computador escolheu ${escolhaComputador}: O usuário venceu!`);
        resultado = 'usuario';
    }else if(escolhaUsuario == 'pedra' && escolhaComputador == 'papel'){
        console.log(`O usuário escolheu ${escolhaUsuario} e o computador escolheu ${escolhaComputador}: O computador venceu!`);
        resultado = 'computador';
    }else if(escolhaUsuario == 'pedra' && escolhaComputador == 'pedra'){
        console.log(`O usuário escolheu ${escolhaUsuario} e o computador escolheu ${escolhaComputador}: Houve um empate!`);
        resultado = 'empate';
    }

}while(resultado === 'empate');
/* iniciar variaveis */

let computer;
let player;
let result;
let bo5 = [];
let computerWin = 0;
let playerWin = 0;
let jogadaComputador = document.querySelector("#computerPlay");
let jogadaJogador = document.querySelector("#playerPlay");

/* Randomizer */
function computerPlay() {
    let index = Math.ceil(Math.random()*3);
    switch(index) {
        case 1:
            computer = "pedra"
            return computer;
            break;
        case 2:
            computer = "papel"
            return computer;
            break;
        case 3:
            computer = "tesoura"
            return computer;
            break;
      }
    }

/* Definir quem ganhou */
    function game(round) {
        switch (round) {
            case "pedratesoura":
            case "papelpedra":
            case "tesourapapel":
                result = "VITORIA DO JOGADOR";
                return result;
                break;
            case "pedrapedra":
            case "papelpapel":
            case "tesouratesoura":
                result = "EMPATE"
                return result;
                break;
            case "tesourapedra":
            case "pedrapapel":
            case "papeltesoura":
                result = "VITORIA DO COMPUTADOR"
                return result;
            default:
                break;
        }
    }

/* on click */
function humanPlay(param) {
    computerPlay();
    //remove as jogadas anteriories
    jogadaComputador.className = ' ';
    jogadaJogador.className = ' ';

    if (computer == "papel") {
        jogadaComputador.className = 'papelbg';
    } else if (computer == "tesoura") {
        jogadaComputador.className = 'tesourabg';
    } else if (computer == "pedra") {
        jogadaComputador.className = 'pedrabg';
    }

    if (param == "pedra") {
        jogadaJogador.className = 'pedrabg';
    } else if (param == "tesoura") {
        jogadaJogador.className = 'tesourabg';
    } else if (param == "papel") {
        jogadaJogador.className = 'papelbg';
    }

    console.log(computer);
    player = param;
    console.log(param);
    
    let play = player + computer;
    console.log(play);
    
    game(play);
    bo5.push(result);
    console.log(bo5);
    
    playerWin = 0;
    computerWin = 0;
    // conta quantas vitorias cada um teve
    for(let i = 0; i < bo5.length; ++i){
        if(bo5[i] == "VITORIA DO JOGADOR")
        playerWin++;
    }
    
    for(let i = 0; i < bo5.length; ++i){
        if(bo5[i] == "VITORIA DO COMPUTADOR")
        computerWin++;
    }

    document.querySelector(".player-score").innerHTML = playerWin;
    document.querySelector(".computer-score").innerHTML = computerWin;

    // define ganhador melhor de 5
    // if (bo5.length >= 5) {

    //     if (computerWin > playerWin) {
    //         document.querySelector(".play").innerHTML = ;
    //     } else if (playerWin> computerWin) {
    //         document.querySelector(".play").innerHTML = ;
    //     } else if (playerWin == computerWin) {
    //         document.querySelector(".play").innerHTML = ;
    //    }
    // }
}

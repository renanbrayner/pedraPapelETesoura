/* iniciar variaveis */

let computer;
let player;
let result;
let bo5 = [];
let computerWin = 0;
let playerWin = 0;

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
    if (computer == "papel") {

    } else if (computer == "tesoura") {
        
    } else if (computer == "pedra") {

    }

    if (param = "papel") {

    } else if (param = "tesoura") {
        
    } else if (param = "pedra") {
        
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
    if (bo5.length >= 5) {

       if (computerWin > playerWin) {
           console.log('computador');
        } else if (playerWin> computerWin) {
            console.log('player');
        } else if (playerWin == computerWin) {
            console.log('empada');
       }
    }
}

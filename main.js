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
    document.querySelector(".resultado").innerHTML = param;
    computerPlay();
    console.log(computer);
    document.querySelector(".resultado3").innerHTML = computer;
    player = param;
    console.log(param);
    
    let play = player + computer;
    console.log(play);
    
    game(play);
    document.querySelector(".resultado2").innerHTML = result;
    bo5.push(result);
    console.log(bo5);
    if (bo5.length >= 5) {

        for(let i = 0; i < bo5.length; ++i){
            if(bo5[i] == "VITORIA DO JOGADOR")
            playerWin++;
        }
    
        for(let i = 0; i < bo5.length; ++i){
            if(bo5[i] == "VITORIA DO COMPUTADOR")
            computerWin++;
        }

        if (computerWin > playerWin) {
            document.querySelector("footer").innerHTML = "VITORIA DO COMPUTADOR"
        } else if (playerWin> computerWin) {
            document.querySelector("footer").innerHTML = "VITORIA DO JOGADOR"
        } else if (playerWin == computerWin) {
            document.querySelector("footer").innerHTML = "EMPATE"
        }
    }
}

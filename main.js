let computer;
let player;
let result;

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
}

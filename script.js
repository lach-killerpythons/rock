const prompt = require("prompt-sync")();
let gameLoop = true;
let computerScore = 0;
let playerScore = 0;

function randInt (min, max) {
    max++;
    return Math.floor(Math.random() * (max - min) + min);
}

function computerRPC() {
    let compRole = randInt(1,3);
    switch(compRole){
        case(1):
            return "✌️";
        case(2):
            return "✋";
        case(3):
            return "✊"
    }
}

function parseInput(input){
    switch(input){
        case("rock"):
            return "✊"
        case("paper"):
            return "✋"
        case("scissors"):
            return "✌️"
        case("✊"):
            return "✊"
        case("✋"):
            return "✋"
        case("✌️"):
            return "✌️"
        default:
            return "invalid reponse!"

    }
}

function checkWinner(playerTurn, computerTurn){
    if(playerTurn == computerTurn ){
        return "Its a draw!!";
    } 
    else if(playerTurn == "✊" && computerTurn == "✌️"){
        playerScore++;
        return "player wins";
    }
    else if(computerTurn == "✊" && playerTurn == "✌️"){
        computerScore++;
        return "computer wins";
    }
    else if(playerTurn == "✋" && computerTurn == "✊"){
        playerScore++;
        return "player wins";
    }
    else if(computerTurn == "✋" && playerTurn == "✊"){
        computerScore++;
        return "computer wins";
    }
    else if(playerTurn == "✌️" && computerTurn == "✋"){
        playerScore++;
        return "player wins";
    }
    else if(computerTurn == "✌️" && playerTurn == "✋"){
        computerScore++;
        return "computer wins";
    }
    else {
        console.log("check winner: ", playerTurn, computerTurn)
        return "something went wrong!";
    }
   // <h2>✊ > ✌️ || ✋ > ✊ || ✌️ > ✋</h1>
}

console.log("welcome to terminal based (test) rock paper scisors")
console.log("To play : enter '✊' || 'rock' || '✋' || 'scissors' || '✌️' ")
//start one game

function oneGame() {
    
    let myInput = prompt("Your response:");
    let cTurn =  computerRPC()
    let pTurn = parseInput(myInput)
    
    console.log("you chose", pTurn);
    console.log("computer chose",cTurn);
    console.log(checkWinner(pTurn, cTurn));
    
    console.log("Computer:", computerScore," Player:", playerScore);    
}

function stillPlaying(input) {
    switch(input){
        case ("yes"):
            gameLoop = true;
            break;
        case("y"):
            gameLoop = true;
            break;
        case("no"):
            gameLoop = false;
            break;
        case("n"):
            gameLoop = false;
            break;
        default:
            console.log("no valid response! Exiting game..")
            gameLoop = false;
    }
}


while (gameLoop){
    oneGame();
    let checkQuit = prompt("play again? y/n");
    stillPlaying(checkQuit);
    
}

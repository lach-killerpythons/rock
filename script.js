//const prompt = require("prompt-sync")();
// prompt sync required to run this game in console, would still work in the browser console
let gameLoop = true;
let computerScore = 0;
let playerScore = 0;

//random int generator
function randInt (min, max) {
    max++;
    return Math.floor(Math.random() * (max - min) + min);
}

//computer generates random value 1,2,3 which is parsed into ✊/✋/✌️
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
}

// starting message
console.log("welcome to terminal based (test) rock paper scisors")
console.log("To play : enter '✊' || 'rock' || '✋' || 'scissors' || '✌️' ")

function clickGame(input) {
    let cTurn =  computerRPC()
    //console.log(cTurn);
    let pTurn = parseInput(input)
    let outputString = "";

    outputString = "you chose" + pTurn; 
    updateHistory(outputString);

    outputString = "computer chose" + cTurn;
    updateHistory(outputString);

    outputString = checkWinner(pTurn, cTurn) 
    updateHistory(outputString);
 
    updateScore()
    //outputString = "Computer:" + computerScore + " Player:" + playerScore; 
    //updateHistory(outputString); 

}

function updateScore(){
    const cstring = document.querySelector('#cscore');
    const pstring = document.querySelector('#pscore');
    cstring.innerHTML = "Computer Score : " + computerScore;
    console.log(cstring.innerHTML)
    pstring.innerHTML = "Player Score : " + playerScore;
}

//updates the history div
function updateHistory(string,) {
    const history = document.querySelector('#history');
    const content = document.createElement('div');
    history.classList.add('content');
    content.textContent = string;
    history.appendChild(content);
}

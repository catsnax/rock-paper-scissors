var computerChoice;
var playerChoice;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let index = Math.floor((Math.random() * 3));
    return(choices[index]);
}

function display(){
    return("Player chose "+ playerChoice + ". Computer chose " + computerChoice)
}

function playGame(player){
    computerChoice = getComputerChoice();
    playerChoice = player.toLowerCase();

    display();

    if(playerChoice == computerChoice){
        return(("DRAW" ));
    }
    else if(playerChoice == "rock"){
        if(computerChoice == "paper"){
            return(("COMPUTER WINS"));
        }
        else if(computerChoice == "scissors"){
            return(("PLAYER WINS"));
        }
    }
    else if(playerChoice == "scissors"){
        if(computerChoice == "paper"){
            return(("PLAYER WINS"));
        }
        else if(computerChoice == "rock"){
            return(("COMPUTER WINS"));
        }
    }
    else if(playerChoice == "paper"){
        if(computerChoice == "rock"){
            return(("PLAYER WINS"));
        }
        else if(computerChoice == "scissors"){
            return(("COMPUTER WINS"))
        }
    }
}
var gameDiv = document.createElement('div');
var displayDiv = document.createElement('div');
var scoreCounter = document.createElement('div');
var winnerDiv = document.createElement('div');
var computerScore = 0, playerScore = 0;


const container = document.querySelector('#result')
const rock = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');
const paper = document.querySelector('#paper');


rock.addEventListener("click", () => result("rock"));
scissors.addEventListener("click", () => result("scissors"));
paper.addEventListener("click", () => result("paper"));


function result(choice){
    game = playGame(choice)
    
    if(game == "COMPUTER WINS") computerScore++;
    else if(game == "PLAYER WINS") playerScore ++;

    displayDiv.textContent = display();
    container.appendChild(displayDiv);

    gameDiv.textContent = game;
    container.appendChild(gameDiv);

    scoreCounter.textContent = "Computer: " + computerScore + " | Player: " + playerScore;
    container.appendChild(scoreCounter);

    if(computerScore == 5){
        winnerDiv.textContent = "\nCOMPUTER IS FIRST TO 5. COMPUTER WINS!"; 
        container.appendChild(winnerDiv);
    }
    else if(playerScore == 5){
        winnerDiv.textContent = "\nPLAYER IS FIRST TO 5. PLAYER WINS!";
        container.appendChild(winnerDiv);
    }
}




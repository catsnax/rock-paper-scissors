var computerChoice;
var playerChoice;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let index = Math.floor((Math.random() * 3));
    return choices[index];
}

function display(){
    console.log("Player chose "+ playerChoice + ". Computer chose " + computerChoice)
}

function playGame(){
    computerChoice = getComputerChoice();
    playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toLowerCase();

    display();

    if(playerChoice == computerChoice){
        return (". \n DRAW" );
    }
    else if(playerChoice == "rock"){
        if(computerChoice == "paper"){
            return (". \n COMPUTER WINS");
        }
        else if(computerChoice == "scissors"){
            return (". \n PLAYER WINS");
        }
    }
    else if(playerChoice == "scissors"){
        if(computerChoice == "paper"){
            return (". \n PLAYER WINS");
        }
        else if(computerChoice == "rock"){
            return (". \n COMPUTER WINS");
        }
    }
    else if(playerChoice == "paper"){
        if(computerChoice == "rock"){
            return (". \n PLAYER WINS");
        }
        else if(computerChoice == "scissors"){
            return (". \n COMPUTER WINS")
        }
    }
    else{
        return ("PLAYER INVALID INPUT");
    }   
}

const choices = document.querySelectorAll(`button[class = "choice"]`);
choices.forEach(returnValue);

function returnValue() 

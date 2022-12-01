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
var firstGame = document.createElement('div');
var secondGame = document.createElement('div');
var thirdGame = document.createElement('div');
var fourthGame = document.createElement('div');
var fifthGame = document.createElement('div');

var firstDisplay = document.createElement('div');
var secondDisplay = document.createElement('div');
var thirdDisplay= document.createElement('div');
var fourthDisplay = document.createElement('div');
var fifthDisplay = document.createElement('div');

const games =[firstGame, secondGame, thirdGame, fourthGame, fifthGame];
const displays = [firstDisplay, secondDisplay, thirdDisplay, fourthDisplay, fifthDisplay];

const container = document.querySelector('#result')

const rock = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');
const paper = document.querySelector('#paper');

rock.addEventListener("click", () => result(games[0], displays[0], "rock"));
scissors.addEventListener("click", () => result(games[0], displays[0], "scissors"));
paper.addEventListener("click", () => result(games[0], displays[0], "paper"));





function result(matchDiv, displayDiv, choice){
    game = playGame(choice)
    
    displayDiv.textContent = display();
    container.appendChild(displayDiv);

    matchDiv.textContent = game;
    container.appendChild(matchDiv);
}


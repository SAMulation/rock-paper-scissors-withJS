// Global variables
const SELECTIONS = ["rock", "paper", "scissors"]
const messageWin = "You won this round!!!";
const messageLose = "You lost this round...";
const messageTie = "It's a tie!"
let roundResults = document.getElementById('round');
let gameResults = document.getElementById('game');
let counter = [0,0,0];

// Hide the #round and #game results
roundResults.classList.toggle('inactive');
gameResults.classList.toggle('inactive');

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    console.log("Player choice: " + button.id)
    playRound(button.id, getComputerChoice());
  });
});

// Get the computer's choice
function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3);
    return SELECTIONS[cpuChoice]
}

function playRound(playerSelection, computerSelection) {
    let message = messageLose;
    let playerResult = "You picked: " + playerSelection[0].toUpperCase() + playerSelection.substring(1) + ".";
    let computerResult = "Computer picked: " + computerSelection[0].toUpperCase() + computerSelection.substring(1) + ".";
    let roundResult = "";

    //roundResults.classList.toggle('inactive');

    
    console.log("Computer choice: " + computerSelection[0].toUpperCase() + computerSelection.substring(1))

    if (playerSelection === computerSelection) {
        message = messageTie;
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        message = messageWin;
    }

    const playerElement = document.getElementById('roundPlayer');
    const computerElement = document.getElementById('roundComputer');
    const roundResultElement = document.getElementById('roundResult');

    playerElement.textContent = playerResult;
    computerElement.textContent = computerResult;
    roundResultElement.textContent = message;

    // Show results
    roundResults.classList.remove('inactive');

    if (message === messageWin) {
        counter[0]++;
        document.querySelector("#won span").textContent = counter[0];
    } else if (message === messageLose) {
        counter[1]++;
        document.querySelector("#lost span").textContent = counter[1];
    } else {
        counter[2]++;
        document.querySelector("#tied span").textContent = counter[2];
    }
    console.log(counter);
    console.log(message);
    return message;
}

//function game() {

    //for (let i = 0; i < 5; i++) {
    //playerSelection = 0;

    // while (playerSelection < 1 || playerSelection > 3) {
    //     playerSelection = prompt("What's your choice?", "1 = Rock, 2 = Scissors, 3 = Paper");
    // }
    // playerSelection = SELECTIONS[playerSelection - 1];
    
    // computerSelection = getComputerChoice();

    // result = playRound(playerSelection, computerSelection);

    //alert(result);


    //}

    //alert("You won: " + counter[0] + ", You lost: " + counter[1] + ", You tied: " + counter[2] + ". Refresh to play again!")
//}


//game();
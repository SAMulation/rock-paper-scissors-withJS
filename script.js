// Global variables
const SELECTIONS = ["Rock", "Paper", "Scissors"]
const messageWin = "You won this round!!!";
const messageLose = "You lost this round...";
const messageTie = "It's a tie!"

// Get the computer's choice
function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3);
    return SELECTIONS[cpuChoice]
}

function playRound(playerSelection, computerSelection) {
    let message = messageLose;

    if (playerSelection === computerSelection) {
        message = messageTie;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock") {
        message = messageWin;
    }

    return message;
}

function game() {
    let counter = [0,0,0];
    let result = "";
    let playerSelection = 0;
    let computerSelection = 0;

    while (playerSelection < 1 && playerSelection > 3) {
        playerSelection = prompt("What's your choice?", "1 = Rock, 2 = Scissors, 3 = Paper");
    }
    playerSelection = SELECTIONS[playerSelection - 1];
    
    computerSelection = getComputerChoice();

    for (let i = 0; i < 5; i++) {
        result = playRound(playerSelection, computerSelection);

        if (result === messageWin) {
            counter[0]++;
        } else if (result === messageLose) {
            counter[1]++;
        } else {
            counter[2]++;
        }
    }

    alert("You won: " + counter[0] + ", You lost: " + counter[1] + ", You tied: " + counter[2] + ". Refresh to play again!")
}


console.log(playRound(playerSelection, computerSelection));
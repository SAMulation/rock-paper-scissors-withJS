
const SELECTIONS = ["Rock", "Paper", "Scissors"]
// Get the computer's choice
function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3);
    return SELECTIONS[cpuChoice]
}





function playRound(playerSelection, computerSelection) {
    const messageWin = "You won this round!!!";
    const messageLose = "You lost this round...";
    const messageTie = "It's a tie!"
    let message = messageLose;

    if (playerSelection === computerSelection) {
        message = messageTie;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock") {
        message = messageWin;
    }

    return message;
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
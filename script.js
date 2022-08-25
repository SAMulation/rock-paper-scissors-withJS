
const SELECTIONS = ["Rock", "Paper", "Scissors"]
// Get the computer's choice
function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3);
    return SELECTIONS[cpuChoice]
}


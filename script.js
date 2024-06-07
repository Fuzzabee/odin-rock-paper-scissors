function getComputerChoice() {
    // Get a random number from 0 to 2 for computers random choice
    let random = Math.floor((Math.random() * 3));

    if (random === 0) {
        return "Rock";
    }

    if (random === 1) {
        return "Paper";
    }

    return "Scissors";
}

function playRound(humanChoice, computerChoice) {
    if (playerScore === 5 || computerScore === 5) {
        return;
    }

    const roundInformationText = document.querySelector(".round-information p");

    // Initial check for tie
    if (humanChoice === computerChoice) {
        roundInformationText.textContent = `The round is a tie! You both chose ${humanChoice}!`;
        return "tie";
    }

    // Check if human wins
    if (humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Paper" ||
        humanChoice === "Paper" && computerChoice === "Rock") {
            roundInformationText.textContent = `You win this round! ${humanChoice} beats ${computerChoice}!`;
            return "human";
        }

    // Otherwise computer wins
    roundInformationText.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}!`;
    return "computer";
}

function winnerExists(score) {
    if (score === 5) return true;
    return false;
}

//////////
// Main //
//////////

let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";

const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
playerScoreText.textContent = `You: ${playerScore}`;
computerScoreText.textContent = `Computer: ${computerScore}`;

const roundInformationText = document.querySelector(".round-information p");
const buttons = document.querySelectorAll(".buttons button");
const restartButton = document.querySelector("#restart-game");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice = button.textContent;
        computerChoice = getComputerChoice();
        let winner = playRound(playerChoice, computerChoice);
        if (winner === "human") {
            playerScore++;
            playerScoreText.textContent = `You: ${playerScore}`;
            if (playerScore === 5) {
                roundInformationText.textContent = "YOU WIN!";
            }
        } else if (winner === "computer") {
            computerScore++;
            computerScoreText.textContent = `Computer: ${computerScore}`;
            if (computerScore === 5) {
                roundInformationText.textContent = "YOU LOSE!";
            }
        }
    });
});

restartButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = `You: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
    roundInformationText.textContent = "Click a button to choose your weapon!";
});
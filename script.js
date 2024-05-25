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

function getHumanChoice() {
    let choice = "";
    choice = prompt("Choose your weapon: Rock, Paper, or Scissors", "");
    choice = choice.toLowerCase();

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        alert("You did not enter a valid weapon, try again!");
        choice = prompt("Choose your weapon: Rock, Paper, or Scissors", "");
        choice = choice.toLowerCase();
    }

    choice = choice.charAt(0).toUpperCase() + choice.slice(1);
    return choice;
}

function playRound(humanChoice, computerChoice) {
    // Initial check for tie
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}!`);
        return false;
    }

    // Check if human wins
    if (humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Paper" ||
        humanChoice === "Paper" && computerChoice === "Rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            return true;
        }

    // Otherwise computer wins
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
    return true;
}

/////////////
// Testing //
/////////////

// console.log("Testing getComputerChoice");
// for ( let i = 0; i < 10; i++ ) {
//     console.log( getComputerChoice() );
// }

// console.log( "Testing getHumanChoice" );
// let humanChoice = getHumanChoice();
// console.log( `User entered ${humanChoice}` );

// let humanScore = 0;
// let computerScore = 0;

// console.log("Testing playRound");
// const computerChoice = getComputerChoice();
// const humanChoice = getHumanChoice();
// playRound(humanChoice, computerChoice);

//////////
// Main //
//////////

let humanScore = 0;
let computerScore = 0;
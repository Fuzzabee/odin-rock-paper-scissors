function getComputerChoice() {
    // Get a random number from 0 to 2 for computers random choice
    let random = Math.floor(( Math.random() * 3 ));

    if ( random === 0 ) {
        return "rock";
    }

    if ( random === 1 ) {
        return "paper";
    }

    return "scissors";
}

function getHumanChoice() {
    let choice = "";
    choice = prompt( "Choose your weapon: Rock, Paper, or Scissors", "" );
    choice = choice.toLowerCase();

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        alert( "You did not enter a valid weapon, try again!" );
        choice = prompt( "Choose your weapon: Rock, Paper, or Scissors", "" );
        choice = choice.toLowerCase();
    }

    return choice;
}

// console.log("Testing getComputerChoice");
// for ( let i = 0; i < 10; i++ ) {
//     console.log( getComputerChoice() );
// }

// console.log( "Testing getHumanChoice" );
// let humanChoice = getHumanChoice();
// console.log( `User entered ${humanChoice}` );
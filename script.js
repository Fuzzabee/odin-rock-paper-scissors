function getComputerChoice() {
    // Get a random number from 0 to 2
    let random = Math.floor(( Math.random() * 3 ));

    if ( random === 0 ) {
        return "rock";
    }

    if ( random === 1 ) {
        return "paper";
    }

    return "scissors";
}

// console.log("Testing getComputerChoice");
// for ( let i = 0; i < 10; i++ ) {
//     console.log( getComputerChoice() );
// }
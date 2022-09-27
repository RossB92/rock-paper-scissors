

let playerScore = 0;
let computerScore = 0;

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        console.log("This round is a tie!")
    } else if (computerChoice === 1 && playerChoice === 2 ||
               computerChoice === 2 && playerChoice === 3 ||
               computerChoice === 3 && playerChoice === 1) {
        console.log("Player won this round");
        playerScore++;
        return playerScore;
    } else {
        console.log("Computer won this round");
        computerScore++;
        return computerScore;
    }
}

function game() {
    

    for (let i = 0; i < 5; i++) {
        let playerChoice = +prompt("What do you want to Throw? \n1 Rock \n2 Paper \n3 Scissors");
        let computerChoice = randomIntFromInterval(1,3);
        playRound(computerChoice, playerChoice);
    }
    console.log("Player Score: "+ playerScore);
    console.log("Computer Score: "+ computerScore);
    
}

//console.log(playRound(computerChoice,playerChoice));
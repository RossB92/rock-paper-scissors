

let playerScore = 0;
let computerScore = 0;

let rock = document.querySelector("#rock");
    rock.addEventListener('click', () => {playRound(computerChoice(),"rock")});
let paper = document.querySelector("#paper");
    paper.addEventListener('click', () => {playRound(computerChoice(),"paper")});
let scissors = document.querySelector("#scissors");
    scissors.addEventListener('click', () => {playRound(computerChoice(),"scissors")});

let resultsDiv = document.getElementById("results");

const scoreHeader = document.createElement("h1");
resultsDiv.classList.add("h1");
scoreHeader.textContent= "--Score--";

const playerScoreResults = document.createElement("h3");
resultsDiv.classList.add("h3");
playerScoreResults.textContent= "Player: " + playerScore;

const computerScoreResults = document.createElement("h3");
resultsDiv.classList.add("h3");
computerScoreResults.textContent= "Computer: " + computerScore;

const roundResults = document.createElement("h4");
resultsDiv.classList.add("h4");
roundResults.textContent= "Pick a choice: Rock, Paper, or Scissors!";


resultsDiv.appendChild(scoreHeader);
resultsDiv.appendChild(playerScoreResults);
resultsDiv.appendChild(computerScoreResults);
resultsDiv.appendChild(roundResults);


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function computerChoice() {
    let computerChoice = randomIntFromInterval(1,3);
        if (computerChoice === 1) {
            computerChoice = "rock";
        }
        else if (computerChoice === 2) {
            computerChoice = "paper";
        }
        else if (computerChoice === 3) {
            computerChoice = "scissors";
        }
    return computerChoice
}

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        console.log("Computer Played: " + computerChoice + " while Player played: " + playerChoice)
        console.log("This round is a tie!")
        console.log("--Score--\nPlayer: " + playerScore + "\nComputer: " + computerScore)
        roundResults.textContent= "This round is a tie!";
    } else if (computerChoice === "rock" && playerChoice === "paper" ||
               computerChoice === "paper" && playerChoice === "scissors" ||
               computerChoice === "scissors" && playerChoice === "rock") {
        console.log("Computer Played: " + computerChoice + " while Player played: " + playerChoice)
        console.log("Player won this round");
        playerScore++;
        console.log("--Score--\nPlayer: " + playerScore + "\nComputer: " + computerScore)
        roundResults.textContent= "Player Won This Round!";
    } else {
        console.log("Computer Played: " + computerChoice + " while Player played: " + playerChoice)
        console.log("Computer won this round");
        computerScore++;
        console.log("--Score--\nPlayer: " + playerScore + "\nComputer: " + computerScore)
        roundResults.textContent= "Computer Won This Round!";

    }

resultsDiv.classList.add("h1");
scoreHeader.textContent= "--Score--";

resultsDiv.classList.add("h3");
playerScoreResults.textContent= "Player: " + playerScore;

resultsDiv.classList.add("h3");
computerScoreResults.textContent= "Computer: " + computerScore;

return playerScore, computerScore;

}

function game() {
    playRound(computerChoice, playerChoice);

    console.log("Player Score: "+ playerScore);
    console.log("Player Choice: " + playerChoice);
    console.log("Computer Score: "+ computerScore);
    
}


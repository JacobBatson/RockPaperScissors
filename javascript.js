function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); // Add parentheses to Math.random()

    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Scissors";
    } else {
        return "Paper";
    }
}

function getHumanChoice(choice){
    if (typeof choice !== "string") {
        return "Invalid choice"; // Handle invalid input
    }

    choice = choice.toLowerCase();

    if (choice === "rock") {
        return "Rock";
    } else if (choice === "paper") {
        return "Paper";
    } else if (choice === "scissors") {
        return "Scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "It's a tie!";
    }else if((humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")){
        humanScore ++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
        
    }
    else{
        computerScore ++;
        return `You lose ${computerChoice} beats ${humanChoice}`;
    }
}

function playGame() {
    let humanScore = 0; // Initialize human score
    let computerScore = 0; // Initialize computer score

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);

        let answer = prompt("Rock, Paper, or Scissors?");
        const humanSelection = getHumanChoice(answer);
        const computerSelection = getComputerChoice();

        if (humanSelection === "Invalid choice") {
            console.log("Invalid input. Please enter Rock, Paper, or Scissors.");
            round--; // Repeat the round if input is invalid
            continue;
        }

        const result = playRound(humanSelection, computerSelection);
        console.log(result);

        // Update scores
        if (result.includes("You win")) {
            humanScore++;
        } else if (result.includes("You lose")) {
            computerScore++;
        }

        console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    // Final result
    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("Better luck next time! The computer wins!");
    } else {
        console.log("It's a tie overall!");
    }
}

console.log(playGame());



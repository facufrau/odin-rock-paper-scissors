function computerPlay(){
    const moves = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random() * 3)];
}

function getUserMove(){
    return prompt("Choose your move: Rock, Paper or Scissors").toLowerCase();
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "tie";
    }
    else {
        if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "rock")){
            return "player";
        }
        else if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")){
        return "computer";
        }
        else {
            return "invalid";
        }
    }
}

function game(){
    let userScore = 0;
    let computerScore = 0;
    let roundWinner;
    
    for(let i = 0; i < 5; i++){
        const userMove = getUserMove();
        const computerMove = computerPlay();
        roundWinner = playRound(userMove, computerMove);
        if (roundWinner === "tie"){
            console.log(`It is a tie, both players chose ${userMove}`);
        }
        else if (roundWinner === "player"){
            console.log(`You Won! User:${userMove} - Computer:${computerMove}`);
            userScore++;
        }
        else if (roundWinner === "computer"){
            console.log(`You Lost! User:${userMove} - Computer:${computerMove}`);
            computerScore++;
        }
        else {
            console.log("You have entered an invalid choice...");
        }
    }

    console.log(`----------Results----------\nUser score: ${userScore}\nComputer score: ${computerScore}`);
}

game()
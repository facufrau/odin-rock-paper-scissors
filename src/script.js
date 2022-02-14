function computerPlay(){
    const moves = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random() * 3)];
}

function showRoundResult(playerMove, computerMove, winner, roundNumber) {
    const playerMoveNode = document.getElementById("player-move");
    const computerMoveNode = document.getElementById("computer-move");
    const roundNumberNode = document.getElementById("round-number");
    const winnerNode = document.getElementById("round-winner");

    playerMoveNode.textContent = playerMove;
    computerMoveNode.textContent = computerMove;
    roundNumberNode.textContent = roundNumber;
    winnerNode.textContent = winner;
}

function updateGlobalScore(winner) {
    if (winner === "tie") {
        return ;
    } else {
        const scoreNode = document.getElementById(`${winner}-score`);
        let newScore = Number(scoreNode.textContent) + 1;
        scoreNode.textContent = newScore;
        if (Number(scoreNode.textContent) === 5) {
            const gameWinnerNode = document.getElementById("game-winner");
            gameWinnerNode.textContent = winner.toUpperCase();
            endGame();
        }
    }
}

function endGame(){
    const buttons = document.querySelectorAll(".option");
    const playAgain = document.getElementById("reset");
    buttons.forEach(button => button.removeEventListener("click", playRound))
    playAgain.classList.remove("hidden");
}

function playRound(e){
    const computerSelection = computerPlay();
    const playerSelection = e.target.id;
    let winner;
    if (playerSelection === computerSelection) {
        winner = "tie";
    }
    else {
        if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "rock")){
            winner = "player";
        }
        else if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")){
            winner = "computer";
        }
        else {
            winner = "invalid";
        }
    }

    roundNumber++;
    showRoundResult(playerSelection, computerSelection, winner, roundNumber);
    updateGlobalScore(winner);
}

const buttons = document.querySelectorAll(".option");
buttons.forEach(button => button.addEventListener("click", playRound))
let roundNumber = 0;

const playAgain = document.getElementById("reset");
playAgain.onclick = () => {
    playAgain.classList.add("hidden");
    window.location.reload()
};
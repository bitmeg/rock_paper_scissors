// score display set up
const gameResultDisplay = document.getElementById("gameResultDisplay");
gameResultDisplay.textContent = "best two out of three?";

// define computer random choice
function computerSelection() {
    let computerMove=Math.floor(Math.random() * 3);
    if (computerMove == 0) {
        return 'rock';
    }else if (computerMove == 1) {
        return 'paper';
    }else{
        return 'scissors';
    }
}

// define gameplay and score
function playRound(playerPlay, computerPlay) {
    if (computerPlay == playerPlay) {
        gameResultDisplay.textContent = "you tied!";
    }else if (computerPlay == 'paper' && playerPlay == 'rock') {
        gameResultDisplay.textContent = "i played paper, you lost";
    }else if (computerPlay == 'rock' && playerPlay == 'paper') {
        gameResultDisplay.textContent = "i played rock, you won!";
    }else if (computerPlay == 'scissors' && playerPlay == 'paper') {
        gameResultDisplay.textContent = "i played scissors, you lost";
    }else if (computerPlay == 'paper' && playerPlay == 'scissors') {
        gameResultDisplay.textContent = "i played paper, you won!";
    }else if (computerPlay == 'rock' && playerPlay == 'scissors') {
        gameResultDisplay.textContent = "i played rock, you lost";
    }else if (computerPlay == 'scissors' && playerPlay == 'rock') {
        gameResultDisplay.textContent = "i played scissors, you won!";
    }else{
        gameResultDisplay.textContent = "error?";
    }
}

// player choice through button click, executes gameplay
function playRock() {
    let playerPlay = 'rock'
    let computerPlay = computerSelection()
    playRound(playerPlay, computerPlay)
}

function playPaper() {
    let playerPlay = 'paper'
    let computerPlay = computerSelection()
    playRound(playerPlay, computerPlay)
}

function playScissors() {
    let playerPlay = 'scissors'
    let computerPlay = computerSelection()
    playRound(playerPlay, computerPlay)
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let result = '';

    if (humanChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        humanScoreElement++;
    } else {
        result = 'You lose!';
        computerScoreElement++;
    }

    computerScore.textContent = computerScoreElement;
    humanScore.textContent = humanScoreElement;
    let winner = document.querySelector('#result');
    winner.textContent = result;
    console.log(`Human: ${humanChoice}, Computer: ${computerChoice} - ${result}`);
}

function getHumanChoice() {
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');

    rock.addEventListener('click', function() {
        playRound('rock');
    });
    paper.addEventListener('click', function() {
        playRound('paper');
    });
    scissors.addEventListener('click', function() {
        playRound('scissors');
    });
}

let humanScore = document.querySelector('#human-score');
let computerScore = document.querySelector('#computer-score');

let humanScoreElement = 0;
let computerScoreElement = 0;

computerScore.textContent = computerScoreElement;
humanScore.textContent = humanScoreElement;

getHumanChoice();
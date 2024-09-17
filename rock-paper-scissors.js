function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
        return 'rock';
        break;
        case 1:
        return 'paper';
        break;
        case 2:
        return 'scissors';
        break;
    }
}

function getHumanChoice(){
    let humanChoice = prompt('Enter your choice: rock, paper, or scissors').toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return 'It\'s a tie!';
    }
    if(humanChoice === 'rock'){
        if(computerChoice === 'paper'){
            computerScore++;
            return 'You lose! Paper beats rock.';
        } else {
            humanScore++;
            return 'You win! Rock beats scissors.';
        }
    }
    if(humanChoice === 'paper'){
        if(computerChoice === 'scissors'){
            computerScore++;
            return 'You lose! Scissors beats paper.';
        } else {
            humanScore++;
            return 'You win! Paper beats rock.';
        }
    }
    if(humanChoice === 'scissors'){
        if(computerChoice === 'rock'){
            computerScore++;
            return 'You lose! Rock beats scissors.';
        } else {
            humanScore++;
            return 'You win! Scissors beats paper.';
        }
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
    console.log('Game Over!');
    if(humanScore > computerScore){
        console.log('You win!');
    } else if(humanScore < computerScore){
        console.log('You lose!');
    } else {
        console.log('It\'s a tie!');
    }
    console.log('Human Score: ' + humanScore);
    console.log('Computer Score: ' + computerScore);
}

playGame();
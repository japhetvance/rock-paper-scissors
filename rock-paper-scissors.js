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

console.log(getHumanChoice());
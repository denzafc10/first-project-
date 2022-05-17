'use strict';

let user1Score = 0;
let user2Score = 0;

const userScore_span = document.getElementById('User-Score');
const computerScore_span = document.getElementById('User-2 Score');
const scoreBoard_div = document.querySelector('.score-board')
const div_result = document.querySelector('.result')

const rockClass = document.getElementById('rock');
const paperClass = document.getElementById('paper');
const scissorsClass = document.getElementById('scissors');



function getcomputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getcomputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorspaper':
            win();
            break;
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            lose();
            break;
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
            draw();
            break;
    }
}


function win(user, computer) {
    user1Score++;
    userScore_span.innerHTML = 'user1Score';
    computerScore_span.innerHTML = 'user2Score';
    div_result.innerHTML = `${user1Score} + beats ${user2Score} You win!👏 `;
    document.getElementById(userChoice).classList.add('green-glow');
}

function lose(user, computer) {
    user2Score--;
    userScore_span.innerHTML = user1Score;
    computerScore_span.innerHTML = user2Score;

    div_result.innerHTML = `${user1Score} + loses to ${user2Score} You lose!😞 `;
}




function draw(user, computer) {
    // user1Score_span.innerHTML = user1Score;
    // user2Score_span.innerHTML = user2Score;

    div_result.innerHTML = `${user1Score} + draws with ${user2Score}`;
}



function main() {
    rockClass.addEventListener('click', () => {
        game('rock');
    })

    paperClass.addEventListener('click', () => {
        game('paper');
    })

    scissorsClass.addEventListener('click', () => {
        game('scissors');
    })

}

main();
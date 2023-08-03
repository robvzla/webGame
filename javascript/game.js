const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_section = document.querySelector(".score-board");
const result_section = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log(computerChoice);

}

function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    });
    
    paper_div.addEventListener('click', function() {
        game("paper");   
    });
    
    scissors_div.addEventListener('click', function() {
        game("scissors");   
    });
}

main();
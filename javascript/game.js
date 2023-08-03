let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_section = document.querySelector(".score-board");
const result_section = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore.innerHTML = computerScore;
    result_section.innerHTML = user + " beats " + computer + ". You win !";
}

function loose() {
    console.log("You loose");
}

function draw() {
    console.log("It's a draw");
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice+computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors": 
        case "scissorsrock":   
            loose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper": 
        case "scissorsscissors":   
            draw(userChoice, computerChoice);
            break;
    
        default:
            break;
    }
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
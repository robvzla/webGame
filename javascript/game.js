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
    computerScore_span.innerHTML = computerScore;
    result_section.innerHTML = user + " beats " + computer + ". You win !";
    document.getElementById(user).classList.add("green-win");
    setTimeout(() => document.getElementById(user).classList.remove("green-win"), 500);
}

function loose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_section.innerHTML = user + " beats " + computer + ". You loose !";
    document.getElementById(user).classList.add("red-loose");
    setTimeout(() => document.getElementById(user).classList.remove("red-loose"), 500);
}

function draw(user, computer) {
    result_section.innerHTML = user + " it's the same as " + computer + ". It's a draw !";
    document.getElementById(user).classList.add("gray-draw");
    setTimeout(() => document.getElementById(user).classList.remove("gray-draw"), 500);
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
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors"));
}

main();
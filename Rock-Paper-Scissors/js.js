const USER_ROCK = document.getElementsByClassName('Rock');
const USER_SCISSORS = document.getElementsByClassName('Scissors');
const USER_PAPER = document.getElementsByClassName('Paper');

let weapon = document.getElementsByClassName('choose-weapon');
let score_board = document.getElementById('scoreboard');
let collapse = document.getElementById('weapon');
let user_scoreboard = document.getElementById('user-score');
let cpu_scoreboard = document.getElementById('cpu-score');
let button = document.querySelector('button');

let user_score = 0;
let cpu_score = 0;

USER_ROCK[0].addEventListener("click", function() {
    console.log("User: Rock");
    compare_choices("Rock", getComputerChoice());
});
USER_SCISSORS[0].addEventListener("click", function() {
    console.log("User: Scissors");
    compare_choices("Scissors", getComputerChoice());
});
USER_PAPER[0].addEventListener("click", function() {
    console.log("User: Paper");
    compare_choices("Paper", getComputerChoice());
});

function getComputerChoice(){
    let choice = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);
    console.log("CPU: " + choice[random]);
    return choice[random];
} 

function compare_choices(user_choice, COMP_RESULT){
    if (user_choice == "Rock" && COMP_RESULT == "Paper" || 
        user_choice == "Scissors" && COMP_RESULT == "Rock" ||
        user_choice == "Paper" && COMP_RESULT == "Scissors"){
            cpu_score++;
            cpu_scoreboard.className = "fa-regular fa-"+`${cpu_score}`;
            score_board.textContent = `You Lose! ${COMP_RESULT} beats ${user_choice}`;
    }
    else if (user_choice == COMP_RESULT) {
        score_board.textContent = "A TIE!";
    }
    else {
        user_score++;
        user_scoreboard.className = "fa-regular fa-"+`${user_score}`;
        score_board.textContent = `You Win! ${user_choice} beats ${COMP_RESULT}`;
    }
    check_score(user_score, cpu_score);
};

function check_score(user_score, cpu_score){
    if (user_score == 5) {
        score_board.textContent = "YOU WIN!";
        collapse.className = "invisible";
        button.className = "button";
    }
    else if (cpu_score == 5) {
        score_board.textContent = "YOU LOSE!";
        collapse.className = "invisible";
        button.className = "button";
    }
}


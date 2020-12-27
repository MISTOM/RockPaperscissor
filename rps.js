let userScore =0;
let compScore= 0;
const userScoreSpan= document.getElementById("userScore");
const compScoreSpan= document.getElementById("compScore");
const scoreBoardDiv= document.querySelector(".scoreBoard");
const scoreMessage= document.querySelector(".scoreResult");
const rockDiv=document.getElementById("r");
const paperDiv=document.getElementById("p");
const scissorDiv=document.getElementById("s");
const smUserWord = "User".fontsize(4).sup();
const smCompWord = "Comp".fontsize(4).sup();

function computerChoice() {
    const choices=['r', 'p', 's'];
    const randomNumber=Math.floor(Math.random() *3);
    return choices[randomNumber];
}
function convertToWord(letter){
    if (letter === "r") return "rock";
    if (letter === "p") return "paper";
    if (letter === "s") return "scissor";
}

function win(userChoice, computerChoice){
    userScore++
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    scoreMessage.innerHTML = `${smUserWord} ${convertToWord(userChoice)} beats ${smCompWord} ${convertToWord(computerChoice)}. YOU WIN 🔥`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function (){document.getElementById(userChoice).classList.remove("green-glow")}, 500);
}
function loose(userChoice, computerChoice){
    compScore++
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    scoreMessage.innerHTML = `${smCompWord} ${convertToWord(computerChoice)} beats ${smUserWord} ${convertToWord(userChoice)}. YOU LOOSE !💩`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function (){document.getElementById(userChoice).classList.remove("red-glow")}, 500);
}
function draw(userChoice, computerChoice){
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    scoreMessage.innerHTML = `${smUserWord} ${convertToWord(userChoice)} draws to ${smCompWord} ${convertToWord(computerChoice)}. 🤷‍♂️ISSA DRAW🤷‍♀️`;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function (){document.getElementById(userChoice).classList.remove("gray-glow")}, 500);
}
function game(userChoice){
    const compChoice= computerChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, compChoice);
    break;
        case "sr":
        case "rp":
        case "ps":
        loose(userChoice, compChoice);
    break;
        case "ss":
        case "rr":
        case "pp":
        draw(userChoice, compChoice);
    break;
    }
}

function main() {
    rockDiv.addEventListener('click', function () {
        game("r");
    })

    paperDiv.addEventListener('click', function () {
        game("p");
    })

    scissorDiv.addEventListener('click', function () {
        game("s");
    })
}
main();

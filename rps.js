let userScore =0;
let compScore= 0;
const userScoreSpan= document.getElementById("userScore");
const compScoreSpan= document.getElementById("compScore");
const scoreBoardDiv= document.querySelector(".scoreBoard");
const scoreMessage= document.getElementById("scoreResult");
const rockDiv=document.getElementById("r");
const paperDiv=document.getElementById("p");
const scissorDiv=document.getElementById("s");

function computerChoice() {
    const choices=['r', 'p', 's'];
    const randomNumber=Math.floor(Math.random() *3);
    return choices[randomNumber];
}

function game(userChoice){
    const compChoice= computerChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
        console.log("userWins!");
    break;
        case "sr":
        case "rp":
        case "pr":
        console.log(userLoose!);
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

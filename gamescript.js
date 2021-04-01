
function RockPaperScissors(playerSelection, computerSelection) {
    let result = 0;
    //0 - rock, 1 - paper, 2 - scissors
    if (playerSelection == "rock" && computerSelection == 0) {
        result = "Draw!";
    }
    else if (playerSelection == "rock" && computerSelection == 1) {
        result = "You lose!";
    }
    else if (playerSelection == "rock" && computerSelection == 2) {
        result = "You win!";
    }
    else if (playerSelection == "paper" && computerSelection == 0) {
        result = "You win!";
    }
    else if (playerSelection == "paper" && computerSelection == 1) {
        result = "Draw!";
    }
    else if (playerSelection == "paper" && computerSelection == 2) {
        result = "You lose!";
    }
    else if (playerSelection == "scissors" && computerSelection == 0) {
        result = "You lose!";
    }
    else if (playerSelection == "scissors" && computerSelection == 1) {
        result = "You win!";
    }
    else if (playerSelection == "scissors" && computerSelection == 2) {
        result = "Draw!";
    }
    else {
        result = "WTF";
    }
    return result;
}
let compwins = 0;
let userwins = 0;
function alertinput(e){

let userInput = e.target.id;
let compInput =Math.floor(Math.random() * Math.floor(3));
    //0 - rock, 1 - paper, 2 - scissors
let compInputStr = "";
if (compInput==0){
    compInputStr = "rock";
}
else if (compInput==1){
    compInputStr="paper";
}
else{
    compInputStr = "scissors";
}
let gameresult = RockPaperScissors(userInput,compInput);
if(gameresult=="You win!"){
    userwins = userwins +1;
}else if(gameresult=="You lose!"){
    compwins = compwins + 1;
}
const scorediv = document.querySelector("#score");
const who_won = document.querySelector('#win_lose');
who_won.textContent = gameresult;
scorediv.textContent = "Computer score " + compwins + " User score " + userwins;
// scorediv.appendChild(content);
if(userwins==5){
    compwins=0;
    userwins=0;
    scorediv.textContent = "You won 5 games, congratulations!"
}else if(compwins==5){
    compwins=0;
    userwins=0;
    scorediv.textContent = "You lost 5 games, you suck!"
    
}
// console.log(gameresult);
// console.log("The computer chose "+compInputStr+".",RockPaperScissors(userInput,compInput));
}

document.getElementById("rock").addEventListener("click",alertinput);
document.getElementById("paper").addEventListener("click",alertinput);
document.getElementById("scissors").addEventListener("click",alertinput);

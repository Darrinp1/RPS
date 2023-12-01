let compChoice;
let userChoice;
let randomNum = 5;

// Random Numbers (Inclusive 0-Exclusive range)
// FUNCTION: Generate a random number between 0 and 3
function getRandomNum(low, high){
    return Math.floor(Math.random() * (high - low)) + low;
}
// include 3 exclude 10
// 3 - 9
3 - 10
0.7

randomNum = getRandomNum(0,3);
// TEST:
console.log(randomNum);

// Switch statements
function chooseMove(){
    switch(RandomNum){
        case 0:
            return  "rock";
            break;
        case 1:
            return  "paper";
            break;
        case 2:
            return  "scissors";
            break;
        default:
            return  "error";
            break;
             
    }
}
// Comparisons
function determineWinner(){
    if(userChoice === "rock" && compChoice === "paper")
    return "computer";
}
    if(userChoice === "rock" && compChoice === "scissors"){
    return "User";
}
    if(userChoice === "rock" && compChoice === "scissors"){
    return "User";
}
    if(userChoice === "scissor" && compChoice === "paper"){
    return "User";
}
    if(userChoice === "paper" && compChoice === "scissors"){
    return "computer";
}
    if(userChoice === "scissors" && compChoice === "rock"){
    return "computer";
}
// console Logs

//PLAY!
userChoice = chooseMove(getRandomNum(0,3));
console.log ("User Chose: " + userChoice);

compChoice = chooseMove(getRandomNum(0,3));
console.log("Computer Chose: " + compChoice);

winner = determineWinner();
console.log("The winner is..." + winner);
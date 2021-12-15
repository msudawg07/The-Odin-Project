function computerPlay(compSelection){
    compSelection = ["Rock", "Paper", "Scissors"];
    return compSelection[Math.floor(Math.random() * compSelection.length)].toUpperCase();  
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        return "You win this round!"
    }else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        return "You win this round!"
    }else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        return "You win this round!"
    }else if(computerSelection == "ROCK" && playerSelection == "SCISSORS"){
        return "You lose this round!"
    }else if (computerSelection == "SCISSORS" && playerSelection == "PAPER"){
        return "You lose this round!"
    }else if (computerSelection == "PAPER" && playerSelection == "ROCK"){
        return "You lose this round!"
    }else{
        return "Tie!"
    }
}

function game(){

    let userScore = 0;
    let computerScore = 0;

    for(let i = 1; i <=5; i++){
        let playerSelection = prompt("Enter your weapon", "Rock, Paper or Scissors").toUpperCase();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(`Round ${i}: ${result}`);

        if(result == "You win this round!"){
            userScore++; 
        }else{
            computerScore++;
        } 
    }
    if(userScore>computerScore){
        console.log("YOU WIN!!!");
    }else{
        console.log("You Lose :(");
    }
}
game();



//computerPlay = () => Math.floor(Math.random() * compSelection.length);
//let compSelection = ["Rock", "Paper", "Scissors"];

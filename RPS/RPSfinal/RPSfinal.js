let playerSelection = '';
let userScore = 0;
let computerScore = 0;

let buttonClick = document.querySelectorAll('button');
    for(let buttons of buttonClick){
      buttons.addEventListener('click', () => {
      playerSelection = buttons.innerText;
      game();
})

// function disableButtons() {
//     buttonClick.forEach(elem => {
//         elem.disabled = true
//     })
// }


function computerPlay(compSelection){
    compSelection = ["Rock", "Paper", "Scissors"];
    return compSelection[Math.floor(Math.random() * compSelection.length)].toUpperCase();  
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        return `You win this round. ${playerSelection} beats ${computerSelection}!`
    }else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        return `You win this round. ${playerSelection} beats ${computerSelection}!`
    }else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        return `You win this round. ${playerSelection} beats ${computerSelection}!`
    }else if(computerSelection == "ROCK" && playerSelection == "SCISSORS"){
        return `You lose this round! ${computerSelection} beats ${playerSelection}`
    }else if (computerSelection == "SCISSORS" && playerSelection == "PAPER"){
        return `You lose this round! ${computerSelection} beats ${playerSelection}`
    }else if (computerSelection == "PAPER" && playerSelection == "ROCK"){
        return `You lose this round! ${computerSelection} beats ${playerSelection}`
    }else{
        return "Tie!"
    }
}

function game(){   
        
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(`${result}`);
    
        if (result == "Tie!"){
            computerScore += 0;
        } else if(result == `You win this round. ${playerSelection} beats ${computerSelection}!`){
            userScore += 1; 
        }else{
            computerScore += 1;
        }
    
        let div = document.querySelector('div');
        div.innerText = `Your score: ${userScore}, computer score: ${computerScore}`

        if(userScore === 5){
            console.log('You Win!! Game Over');
            let buttonsGone = document.querySelector('.buttonsGone')
            buttonsGone.style.color = '#81d4fa';
            buttonsGone.style.fontSize = '2em'
            buttonsGone.innerText = "Refresh page to play again!";
            let img = document.createElement('img');
            img.style.width = '40em';
            img.style.marginTop = '1em';
            img.src = 'https://images.squarespace-cdn.com/content/v1/5852ea705016e1d1bb27a876/1558551048448-ER9Q33ZDJJ2FBLBGGA47/Victory.jpg'
            let photo = document.querySelector('#photo');
            photo.style.textAlign = 'center'
            photo.append(img); 
            //buttonsGone()
            // let endDiv = document.createElement('div');
            // endDiv.append("Refresh Page to start again");

            
            //disableButtons();
        }else if (computerScore === 5){
            console.log('You Lose Game Over.');
            let buttonsGone = document.querySelector('.buttonsGone');
            buttonsGone.style.color = '#81d4fa';
            buttonsGone.style.fontSize = '2em'
            buttonsGone.innerText = "Refresh page to play again!";
            let img = document.createElement('img');
            img.style.width = '40em';
            img.style.marginTop = '1em';
            img.src = 'https://image.shutterstock.com/image-vector/you-lose-neon-signs-style-260nw-1567204210.jpg'
            let photo = document.querySelector('#photo');
            photo.style.textAlign = 'center'
            photo.append(img);
            // buttonsGone()
            // endDiv.innerText = "Refresh Page to Start Over"
            //disableButtons();
        }
}
}

// let buttonsDiv = document.querySelector('.buttonsGone');
// function buttonsGone(){
//     buttonsDiv.remove();
// }



// if(userScore > computerScore){
//     console.log("YOU WIN!!!");
// } else if(userScore == computerScore){
//     console.log("Tie!");
// }else{
//     console.log("You lose!")
// } 


   


// let buttonClick = document.querySelector('button');
// buttonClick.addEventListener('click', () => {
//     playerSelection = buttonClick.innerText;
//     game();
// })

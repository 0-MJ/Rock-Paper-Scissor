
//Game//
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
let player = document.getElementById('youChose');
let computer = document.getElementById('computerChose');

let playerSelection = 0;
let computerSelection = 0;


rock.addEventListener('click', function rock(){
    playerSelection = "Rock"
    player.innerHTML = playerSelection;
    computerSelection = getComputerChoice();
    computer.innerHTML = computerSelection;
    gameLogic(playerSelection,computerSelection);
})
   
paper.addEventListener('click',function(){
   playerSelection = "Paper"
   player.innerHTML = playerSelection;
   computerSelection = getComputerChoice();
   computer.innerHTML = computerSelection;
   gameLogic(playerSelection,computerSelection);
})

scissor.addEventListener('click',function(){
     playerSelection = "Scissor"
     player.innerHTML = playerSelection;
     computerSelection = getComputerChoice();
     computer.innerHTML = computerSelection;
     gameLogic(playerSelection,computerSelection);
})


//Generate random Choice for Computer//
function getComputerChoice(){
    const choices = ["Rock","Paper","Scissor"];
    let selection = Math.floor(Math.random()*choices.length);
    return choices[selection];
  };
 //ScoreBoard//
 let playerScore = 0;
 let computerScore = 0;

//Game Logic//
function gameLogic(playerSelection,computerSelection){
 if(playerSelection===computerSelection){ 

//Score Display//
let playScoreDisplay = document.getElementById('yourScore');
playScoreDisplay.innerHTML = playerScore;

let computerScoreDisplay = document.getElementById('computerScore');
computerScoreDisplay.innerHTML = computerScore;

//Results//

let result = document.getElementById('result');
result.innerHTML = "Round ends in a Draw"

if((playerScore=='5')&&(computerScore!== '5')){
         playerScore = 0;
         computerScore = 0;
         result.innerHTML = "You won the Game"
}
else if((playerScore== '5')&&(computerScore=='5')){
        playerScore = 0;
        computerScore = 0;
        result.innerHTML = " Game ends in a Draw"
}
else if ((playerScore!== '5')&&(computerScore== '5')){
        playerScore = 0;
        computerScore = 0;
        result.innerHTML = " Computer Won the Game"
   
 } 
}   
//player chooses Rock//
 else if ((playerSelection ==="Rock")&&(computerSelection==="Scissor")){
     playerScore ++;
//Score Display//
  let playScoreDisplay = document.getElementById('yourScore');
  playScoreDisplay.innerHTML = playerScore;

  let computerScoreDisplay = document.getElementById('computerScore');
  computerScoreDisplay.innerHTML = computerScore;

//Results//
let result = document.getElementById('result');
result.innerHTML = "You Won this round"
if((playerScore=='5')&&(computerScore!== '5')){
        playerScore = 0;
        computerScore = 0;
        result.innerHTML = "You won the Game"
}
else if((playerScore== '5')&&(computerScore=='5')){
       playerScore = 0;
       computerScore = 0;
       result.innerHTML = " Game ends in a Draw"
}
else if ((playerScore!== '5')&&(computerScore== '5')){
       playerScore = 0;
       computerScore = 0;
       result.innerHTML = " Computer Won the Game"
  
} 

 } 
 else if ((playerSelection ==="Rock")&&(computerSelection==="Paper")){
        computerScore++;
 //Score Display//
 let playScoreDisplay = document.getElementById('yourScore');
 playScoreDisplay.innerHTML = playerScore;

 let computerScoreDisplay = document.getElementById('computerScore');
 computerScoreDisplay.innerHTML = computerScore;

 //Results//
let result = document.getElementById('result');
result.innerHTML = "Computer Won this round"
if((playerScore=='5')&&(computerScore!== '5')){
        playerScore = 0;
        computerScore = 0;
        result.innerHTML = "You won the Game"
}
else if((playerScore== '5')&&(computerScore=='5')){
       playerScore = 0;
       computerScore = 0;
       result.innerHTML = " Game ends in a Draw"
}
else if ((playerScore!== '5')&&(computerScore== '5')){
       playerScore = 0;
       computerScore = 0;
       result.innerHTML = " Computer Won the Game"
  
} 
       
 }
//player chooses scissor//
 else if ((playerSelection === "Scissor")&&(computerSelection==="Paper")){
        playerScore ++;
//Score Display//
let playScoreDisplay = document.getElementById('yourScore');
playScoreDisplay.innerHTML = playerScore;

let computerScoreDisplay = document.getElementById('computerScore');
computerScoreDisplay.innerHTML = computerScore;

//Results//
let result = document.getElementById('result');
result.innerHTML = "You Won this round"
if((playerScore=='5')&&(computerScore!== '5')){
        playerScore = 0;
        computerScore = 0;
        result.innerHTML = "You won the Game"
}
else if((playerScore== '5')&&(computerScore=='5')){
       playerScore = 0;
       computerScore = 0;
       result.innerHTML = " Game ends in a Draw"
}
else if ((playerScore!== '5')&&(computerScore== '5')){
       playerScore = 0;
       computerScore = 0;
       result.innerHTML = " Computer Won the Game"
  
} 
       
 }
 else if ((playerSelection === "Scissor")&&(computerSelection==="Rock")){
        computerScore++;
//Score Display//
let playScoreDisplay = document.getElementById('yourScore');
playScoreDisplay.innerHTML = playerScore;

let computerScoreDisplay = document.getElementById('computerScore');
computerScoreDisplay.innerHTML = computerScore;
//Results//
let result = document.getElementById('result');
result.innerHTML = "Computer Won this round"

if((playerScore=='5')&&(computerScore!== '5')){
        playerScore = 0;
        computerScore = 0;
        result.innerHTML = "You won the Game"
}
else if((playerScore== '5')&&(computerScore=='5')){
       playerScore = 0;
       computerScore = 0;
       result.innerHTML = " Game ends in a Draw"
}
else if ((playerScore!== '5')&&(computerScore== '5')){
       playerScore = 0;
       computerScore = 0;
       result.innerHTML = " Computer Won the Game"
  
} 
     
 }
//player chooses paper//
 else if ((playerSelection === "Paper")&&(computerSelection==="Rock")){
        playerScore ++;
//Score Display//
let playScoreDisplay = document.getElementById('yourScore');
playScoreDisplay.innerHTML = playerScore;

let computerScoreDisplay = document.getElementById('computerScore');
computerScoreDisplay.innerHTML = computerScore;
//Results//

let result = document.getElementById('result');
result.innerHTML = "You Won this round"

if((playerScore=='5')&&(computerScore!== '5')){
        playerScore = 0;
        computerScore = 0;
        result.innerHTML = "You won the Game"
}
else if((playerScore== '5')&&(computerScore=='5')){
       playerScore = 0;
       computerScore = 0;
       result.innerHTML = " Game ends in a Draw"
}
else if ((playerScore!== '5')&&(computerScore== '5')){
       playerScore = 0;
       computerScore = 0;
       result.innerHTML = " Computer Won the Game"
  
} 
        
 } 
 else if ((playerSelection === "Paper")&&(computerSelection==="Scissor")){
        computerScore++;
//Score Display//
let playScoreDisplay = document.getElementById('yourScore');
playScoreDisplay.innerHTML = playerScore;

let computerScoreDisplay = document.getElementById('computerScore');
computerScoreDisplay.innerHTML = computerScore;

//Results//
let result = document.getElementById('result');
result.innerHTML = "Computer Won this round"

if((playerScore=='5')&&(computerScore!== '5')){
        playerScore = 0;
        computerScore = 0;
        result.innerHTML = "You won the Game"
}
else if((playerScore== '5')&&(computerScore=='5')){
       playerScore = 0;
       computerScore = 0;
       result.innerHTML = " Game ends in a Draw"
}
else if ((playerScore!== '5')&&(computerScore== '5')){
       playerScore = 0;
       computerScore = 0;
       result.innerHTML = "Computer Won the Game"
  
} 
     
 }
}           

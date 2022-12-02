
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

 let playScoreDisplay = document.getElementById('yourScore');
 playScoreDisplay.addEventListener('click',function(){
    playScoreDisplay.innerHTML = playerScore;
 })
 let computerScoreDisplay = document.getElementById('computerScore');
 computerScoreDisplay.addEventListener('click',function(){
    computerScoreDisplay.innerHTML = computerScore;
 })


  //Game Logic//
function gameLogic(playerSelection,computerSelection){
 if(playerSelection===computerSelection){ 

 }    
//player chooses scissor//
else if ((playerSelection ==="rock")&&(computerSelection==="scissor")){
     playerScore ++;} 
else if ((playerSelection ==="rock")&&(computerSelection==="paper")){
        computerScore++;}
//player chooses scissor//
else if ((playerSelection === "Scissor")&&(computerSelection==="Paper")){
        playerScore ++;}
else if ((playerSelection === "scissor")&&(computerSelection==="rock")){
        computerScore++;}
//player chooses paper//
else if ((playerSelection === "paper")&&(computerSelection==="rock")){
        playerScore ++;} 
else if ((playerSelection === "paper")&&(computerSelection==="scissor")){
        computerScore++;}
}           
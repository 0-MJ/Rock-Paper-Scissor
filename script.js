//storing scores//
let playerScore = 0;
let computerScore =0;

function game() {
    for (let i = 0; i < 5; i++) {
     //Generating  computer choice//
     function getComputerChoice(){
        const choices = ["rock","paper","scissor"];
        let selection = Math.floor(Math.random()*choices.length);
        return choices[selection];
      };
    //User choice //
     let playerSelection = window.prompt("What do you choose?");
 
    //Computer choice //
     let computerSelection = getComputerChoice();
     
    //Player Round //
     function playRound(playerSelection,computerSelection) {
       if(playerSelection===computerSelection) {
        return("It's a draw!");
       //player chooses rock//
       } else if ((playerSelection ==="rock")&&(computerSelection==="scissor")){
        playerScore++;
        return("You win! Rock beats scissor");
       } else if ((playerSelection ==="rock")&&(computerSelection==="paper")){
        computerScore++;
        return("You loose! paper beats rock");
       //player chooses scissor//
       } else if ((playerSelection === "scissor")&&(computerSelection==="paper")){
        playerScore++;
        return("You win! scissor beats paper");
       }else if ((playerSelection === "scissor")&&(computerSelection==="rock")){
        computerScore++;
        return("You loose! rock beat scissor");
       //player chooses paper//
       }else if ((playerSelection === "paper")&&(computerSelection==="rock")){
        playerScore++;
        return("You win! Paper beat rocks");
       } else if ((playerSelection === "paper")&&(computerSelection==="scissor")){
        computerScore++;
        return("You loose! scissor beats paper");
       }
     }
    console.log(playerSelection);  
    console.log(computerSelection);
    console.log(playRound(playerSelection,computerSelection));
  }
 }
game();
if(playerScore>computerScore){
  console.log("PLAYER WON");
}else if (computerScore>playerScore)
  console.log("COMPUTER WON");
 
 
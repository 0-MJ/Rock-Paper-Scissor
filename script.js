//Required variables //
let playerChoe = 0;
let computerChoice = 0;
let round =0;
let playerScore = 0;
let computerScore=0;
//User choice //
playerChoice = window.prompt("What do you choose");
//Array for generating random choice//
const items = ["rock", "paper", "scissor"];
  function RandomItems(items){
    return items[Math.floor(Math.random()*items.length)];
    
  }

console.log(playerChoice);
console.log(RandomItems(items));

if{playerChoice 
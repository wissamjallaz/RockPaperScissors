function computerPlay(){
   let random = Math.random();
   const rock = 'Rock';
   const paper = 'Paper';
   const scissors = 'Scissors';
   let ans;
   if (random <= 0.3)
   ans = rock;
   else if (random <=0.6 && random >0.3)
   ans = paper;
   else 
   ans = scissors;
   return ans;
}

function playRound(playerSelection, computerSelection){
   
   if (playerSelection.toUpperCase() == computerSelection.toUpperCase())
   return decision = 'Tie!!';
   else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection.toUpperCase()=='PAPER')
   return decision = 'You Lose! Paper beats Rock';
   else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection.toUpperCase()=='SCISSORS')
   return decision = 'You Win! Rock beats Scissors';
   else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase()=='ROCK')
   return decision = 'You Win! Paper beats Rock';
   else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase()=='SCISSORS')
   return decision = 'You Lose! Scissors beats Paper';
   else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase()=='ROCK')
   return decision = 'You Lose! Rock beats Scissors';
   else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase()=='PAPER')
   return decision = 'You Win! Scissors beats Paper';
}

function game(){
   for (let i = 0; i < 5; i++) {
      const computerSelection = computerPlay();
      let playerSelection = prompt('Enter your choice: ');
      console.log(playRound(playerSelection, computerSelection));
   }
}





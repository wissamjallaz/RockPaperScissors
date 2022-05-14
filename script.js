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
}


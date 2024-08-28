/*
ODD-EVEN GAME RULES:

- The game is like hand cricket in which it has 2 players,  
- In beginning, the first player gets the batting and the numbers are counted unless a number matches with the number of 
  second player in that situation player 1 is OUT 
- Similarly , then the second player gets turn to bat and the numbers are counted .
- Player with highest score is the winner.

*/

var randomNumber,activePlayer,player1Score,player2Score

init();

document.querySelector('.btn-roll').addEventListener('click',function(){
//Appear Random Number for Player 1
var hand1 =Math.floor( Math.random() * 6)+1;
var hand1DOM=document.querySelector('#Player-0');
hand1DOM.src='Fingure-'+hand1+'.jpeg';
//Appear Random Number for Player 2
hand2=Math.floor( Math.random() * 6)+1;
var hand2DOM=document.querySelector('#Player-1');
hand2DOM.src='Fingure-'+hand2+'.jpeg';

//Add Scroe for Player 1
if(hand1 !== hand2)
{
    activePlayer===0 ? player1Score+= hand1 : player2Score+= hand2
   if( activePlayer===0)
    { 
        document.getElementById("current-"+activePlayer).textContent= player1Score
    }
   else
    {
        document.getElementById("current-"+activePlayer).textContent= player2Score
                    
            if (player1Score<player2Score)
            {
                        // hand2DOM.src='Winner.jpeg';
                        // hand1DOM.src='Loser.jpeg';
                        document.querySelector('.player-1-panel').classList.remove('active')
                        document.getElementById('name-1').textContent='WINNER'
                        document.querySelector('.player-1-panel').classList.add('winner')
                        document.querySelector('.btn-roll').disabled = true;
            }
                    
                    
    }
                       
        
 }
else
{
    
    activePlayer===0 ? activePlayer=1 : activePlayer=0
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
   if (activePlayer===0)
   {
       if ( player1Score===player2Score)
       {
        document.getElementById('name-0').textContent='MATCH DRAWS'
        document.getElementById('name-1').textContent='MATCH DRAWS'
        document.querySelector('.player-0-panel').classList.add('winner')
        document.querySelector('.player-1-panel').classList.add('winner')
        document.querySelector('.btn-roll').disabled = true;
       }
       else
       {
        document.querySelector('.player-0-panel').classList.remove('active')
        document.getElementById('name-0').textContent='WINNER'
        document.querySelector('.player-0-panel').classList.add('winner')
        document.querySelector('.btn-roll').disabled = true;
       }
   }

}



})

document.querySelector('.btn-new').addEventListener('click',init)

function init(){
player1Score=0
player2Score=0
activePlayer=0;
document.getElementById("current-0").textContent='0';
document.getElementById("current-1").textContent='0';
document.getElementById('name-0').textContent='Player 1'
document.getElementById('name-1').textContent='Player 2'
document.querySelector('#Player-0').src='Fingure-0.jpeg'
document.querySelector('#Player-1').src='Fingure-0.jpeg'
document.querySelector('.player-0-panel').classList.remove('winner')
document.querySelector('.player-1-panel').classList.remove('winner')
document.querySelector('.player-0-panel').classList.remove('active')
document.querySelector('.player-1-panel').classList.remove('active')
document.querySelector('.player-0-panel').classList.add('active')
document.querySelector('.btn-roll').disabled = false;



}







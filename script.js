const p1 = document.querySelector('#p1Button')
const p2 = document.querySelector('#p2Button')
const p1Display = document.querySelector('#player1')
const p2Display = document.querySelector('#player2')
const resetButton = document.querySelector('#reset')
const play  =document.querySelector('#playTo')

let score1 = 0; 
let score2 = 0;
let winScore = 3;
let gameOver = false
p1.addEventListener('click',(e)=>{
    if(!gameOver){
        score1++;
        if(score1===winScore){
            gameOver = true      
            p1Display.style.color = 'green'
            p2Display.style.color = 'red'

         }
        p1Display.innerText = score1;
    }   
})
p2.addEventListener('click',(e)=>{
    if(!gameOver){
        score2++;
        if(score2===winScore){
            gameOver = true   
            p1Display.style.color = 'red'
            p2Display.style.color = 'green'  
         }
        p2Display.innerText = score2;
    }   
})
resetButton.addEventListener('click', resetGame)
  

play.addEventListener('change',function(){
    winScore = parseInt(this.value);
    resetGame()
})

function resetGame(){
    gameOver = false
    score1 = 0;
    score2 = 0;
    p1Display.style.color = 'black'
    p2Display.style.color = 'black'
    document.querySelector('#player1').innerText = score1;
    document.querySelector('#player2').innerText = score2;

}
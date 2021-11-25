//setup
const btnDice = document.querySelector('.btn-dice')
const btnStop = document.querySelector('.btn-stop')
const players = document.querySelectorAll('.total-player')
const diceVal = document.querySelector('.dice-val')

btnDice.addEventListener('click', rollTheDice)

    
let p1 = 0;
let p2 = 0;

function rollTheDice() {
    const randomNum = Math.floor((Math.random() * 6) + 1)
    diceVal.textContent = randomNum
    players.forEach(ele => {
        if(ele.classList.contains('playing') && ele.classList.contains('player1')){
            p1 = p1 + randomNum
            ele.textContent = p1 
        }
        if(ele.classList.contains('playing') && ele.classList.contains('player2')){
            p2 = p2 + randomNum
            ele.textContent = p2 
        }
    })
}
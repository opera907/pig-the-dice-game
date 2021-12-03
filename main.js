//setup
const btnDice = document.querySelector('.btn-dice')
const btnStop = document.querySelector('.btn-stop')
const players = document.querySelectorAll('.total-player')
const diceVal = document.querySelector('.dice-val')

btnDice.addEventListener('click', rollTheDice)
btnStop.addEventListener('click', changeTurn)


let score = [0, 0]

function rollTheDice() {
    let randomNum = Math.floor((Math.random() * 6) + 1)
    randomNum === 1 ? diceVal.style.color = "red" : diceVal.style.color = "black"
    diceVal.textContent = randomNum


    players.forEach((ele, i) => {
        if (ele.classList.contains('playing')) {
            if (randomNum === 1) {
                score[i] = 0
            } else {
                score[i] += randomNum
            }
            //randomNum === 1 ? score[i] = 0 : score[i] += randomNum
            if (score[i] > 20) {
                reset()
                alert(`player${i + 1} win!`)
            }
            ele.textContent = score[i]
        }
    })
    console.log(score)

}

function changeTurn() {
    players.forEach(ele => {
        if (!ele.classList.contains('playing')) {
            ele.classList.add('playing')
        } else {
            ele.classList.remove('playing')
        }
    })
}

function reset() {
    score = [0, 0]
    randomNum = 0
    players.forEach(ele => {
        ele.textContent = 0
    })
    diceVal.textContent = randomNum
    changeTurn()
}
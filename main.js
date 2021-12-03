//setup
const btnDice = document.querySelector('.btn-dice')
const btnStop = document.querySelector('.btn-stop')
const players = document.querySelectorAll('.total-player')
const diceVal = document.querySelector('.dice-val')

btnDice.addEventListener('click', rollTheDice)
btnStop.addEventListener('click', changeTurn)


let score = [0, 0]
let activePlayer = 0

function rollTheDice() {
	let randomNum = Math.floor((Math.random() * 6) + 1)
	randomNum === 1 ? diceVal.style.color = "red" : diceVal.style.color = "black"
	diceVal.textContent = randomNum


	if (randomNum === 1) {
		score[activePlayer] = 0
		players[activePlayer].textContent = score[activePlayer]
		changeTurn()
	} else {
		score[activePlayer] += randomNum
		players[activePlayer].textContent = score[activePlayer]
	}

	if (score[activePlayer] >= 50) {
		alert(`player${activePlayer + 1} win!!!`)
		reset()
	}
}

function changeTurn() {
	activePlayer = activePlayer === 0 ? 1 : 0;
	//activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
}

function reset() {
	score = [0, 0]
	activePlayer = 0
	randomNum = 0

	players.forEach(ele => ele.textContent = 0)
	diceVal.textContent = randomNum
}
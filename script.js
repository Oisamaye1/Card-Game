let messageEl = document.getElementById('message-el')
let cardEl = document.getElementById('card-el')
let cardSum = document.querySelector('#sum-el')
let playerInfo = document.querySelector('#player-info')
let cardSlot = []
let message = ""
let isAlive = false
let hasBlackjack = false
let tries = 0
let player = {
    name: "Benjamin",
    chips: 230,
}

playerInfo.textContent = player.name +': $' + player.chips

function startGame() {
    if (tries === 0){
        tries +=1
        let firstC = randomCard()
        let secondC = randomCard()
        cardSlot = [firstC, secondC]
        cardTotal = firstC + secondC
        renderGame()
    }
}

function randomCard(){
    let randomC = Math.floor(Math.random()*13) + 1
    if (randomC === 1){return 11}
    else if (randomC > 10){return 10}
    else {return randomC}
}

function renderGame(){
    cardEl.textContent = 'Cards: '
    for (let i = 0; i < cardSlot.length; i++){
        cardEl.textContent += cardSlot[i] + ' '
    }
    cardSum.textContent = 'Sum: ' +' '+ cardTotal
    player.chips -= 30
    playerInfo.textContent = player.name +': $' + player.chips

    if (cardTotal < 21){
        message = "Do you want to draw another card?"
        messageEl.textContent = message
        isAlive = true
    }

    else if (cardTotal === 21){
        message = " Blackjack!!!!"
        messageEl.textContent = message
        hasBlackjack = true
    }

    else{
        message = "Sorry you are out of the game"
        messageEl.textContent = message
        isAlive = false
    }
}


function newCard(){
    if (isAlive === true && hasBlackjack === false){
        let nCard = randomCard()
        cardTotal += nCard
        cardSlot.push(nCard)
        renderGame()
    }
}

function restartGame()  {
    cardSlot = []
    message = ""
    isAlive = false
    hasBlackjack = false
    tries = 0
    cardEl.textContent = 'Cards: '
    cardSum.textContent = 'Sum: '
    messageEl.textContent = ''
    player.chips = 230
    playerInfo.textContent = player.name +': $' + player.chips
}
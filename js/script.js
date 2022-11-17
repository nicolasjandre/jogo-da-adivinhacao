import { Game } from './youwonscreen.js'

const input = document.querySelector('input')
const form = document.querySelector('form')

let tryCounter = 0
let randomNumber
let playerNumber

form.onsubmit = (event) => {

    event.preventDefault()

    randomNumber = Math.floor(Math.random() * 10)
    playerNumber = input.value
    tryCounter++
    
    if (randomNumber == playerNumber && tryCounter == 1) {
        Game.youWonInTheFirstTry(tryCounter)
        tryCounter = 0
    } 
    else if (randomNumber == playerNumber) {
        Game.youWonWithPlusThanOneTry(tryCounter)
        tryCounter = 0
    }
}
import { Game } from './youwonscreen.js'

const input = document.querySelector('input')
const form = document.querySelector('form')
const counter = document.querySelector('p')

let tryCounter = 0
let randomNumber = Math.floor(Math.random() * 10)
let playerNumber

form.onsubmit = (event) => {

    event.preventDefault()

    playerNumber = input.value
    tryCounter++
    
    if (randomNumber == playerNumber && tryCounter == 1) {
        Game.youWonInTheFirstTry(tryCounter)
        counter.innerText = ""
        tryCounter = 0
        randomNumber = Math.floor(Math.random() * 10)
    } 
    else if (randomNumber == playerNumber) {
        Game.youWonWithPlusThanOneTry(tryCounter)
        counter.innerText = ""
        tryCounter = 0
        randomNumber = Math.floor(Math.random() * 10)
    } else {
        counter.innerText = `${tryCounter}...`
        input.value = ""
    }
}
const button = document.querySelector('button')
const input = document.querySelector('input')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const counter = document.querySelector('p')

export const Game = {
    youWonInTheFirstTry(tryCounter, guessingGame) {
        button.removeEventListener('click', guessingGame)
        setTimeout(() => button.addEventListener('click', Game.playAgainButton), 3000)
        h1.innerHTML = `Acertou em ${tryCounter} tentativa.`
        h2.innerHTML = ''
        button.innerHTML = 'Jogar novamente'
        button.classList.add('active')
        input.classList.add('active')
        input.value = ''
        counter.innerText = "3"
        setTimeout(() => counter.innerText = "2", 1000);
        setTimeout(() => counter.innerText = "1", 2000);
    },
    
    youWonWithPlusThanOneTry(tryCounter, guessingGame) {
        button.removeEventListener('click', guessingGame)
        setTimeout(() => button.addEventListener('click', Game.playAgainButton), 3000)
        h1.innerHTML = `Acertou em ${tryCounter} tentativas.`
        h2.innerHTML = ''
        button.innerHTML = 'Jogar novamente'
        button.classList.add('active')
        input.classList.add('active')
        input.value = ''
        setTimeout(() => counter.innerText = "3", 0);
        setTimeout(() => counter.innerText = "2", 1000);
        setTimeout(() => counter.innerText = "1", 2000);
        setTimeout(() => counter.innerText = "Pode ir :)", 3000);
    },
    
    playAgainButton() {
        h1.innerHTML = 'Jogo da adivinhação'
        h2.innerHTML = 'Adivinhe o número entre 0 e 9'
        button.innerHTML = 'Tentar'
        button.classList.remove('active')
        input.classList.remove('active')
        button.removeEventListener('click', Game.playAgainButton)
        counter.innerText = ''
    }
}
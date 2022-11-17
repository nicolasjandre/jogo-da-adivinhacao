const button = document.querySelector('button')
const input = document.querySelector('input')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')

export const Game = {
    youWonInTheFirstTry(tryCounter, guessingGame) {
        button.removeEventListener('click', guessingGame)
        button.addEventListener('click', Game.playAgainButton)
        h1.innerHTML = `Acertou em ${tryCounter} tentativa.`
        h2.innerHTML = ''
        button.innerHTML = 'Jogar novamente'
        button.classList.add('active')
        input.classList.add('active')
        input.value = ''
    },
    
    youWonWithPlusThanOneTry(tryCounter, guessingGame) {
        button.removeEventListener('click', guessingGame)
        button.addEventListener('click', Game.playAgainButton)
        h1.innerHTML = `Acertou em ${tryCounter} tentativas.`
        h2.innerHTML = ''
        button.innerHTML = 'Jogar novamente'
        button.classList.add('active')
        input.classList.add('active')
        input.value = ''
    },
    
    playAgainButton() {
        h1.innerHTML = 'Jogo da adivinhação'
        h2.innerHTML = 'Adivinhe o número entre 0 e 9'
        button.innerHTML = 'Tentar'
        button.classList.remove('active')
        input.classList.remove('active')
    }
}
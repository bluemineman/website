const rock = document.getElementId('rock')
const paper = document.getElementId('paper')
const scissors = document.getElementId('scissors')
const score = document.querySelector('.score')
const status = document.querySelector('.status')

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let gamePlaying = false
let playerScore = 0
let computerScore = 0
let computerChoice = 1
while (gamePlaying = false) {
    rock.addEventListener('click' ()=> {
        computerChoice = getRndInteger(1, 3)
        gamePlaying = true
        if (computerChoice = 1) {
            status
        }
    })
}

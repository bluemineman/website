const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const score = document.querySelector('.score')
const status = document.querySelector('.status')

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let gamePlaying = false
let playerScore = 0
let computerScore = 0
let computerChoice = 1

    rock.addEventListener('click', ()=>{
        computerChoice = getRndInteger(1, 3)
        console.log(computerChoice)
        gamePlaying = true
        if (computerChoice = 1) {
            status.innerHTML = "Tied"
        }
        else if (computerChoice = 2) {
            computerScore = computerScore + 1
            status.innerHTML = "You lose"
        }
    })


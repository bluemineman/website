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
        if (computerChoice == 1) {
            status.innerHTML = "Tied"
        }
        else if (computerChoice == 2) {
            computerScore = computerScore + 1
            status.innerHTML = "You lose"
        }
        else if (computerChoice == 3) {
            playerScore = playerScore + 1
            status.innerHTML = "You win"
        }
        score.innerHTML = `(You) ${playerScore} - (Computer) ${computerScore}`
    })

    paper.addEventListener('click', ()=>{
        computerChoice = getRndInteger(1, 3)
        console.log(computerChoice)
        gamePlaying = true
        if (computerChoice == 2) {
            status.innerHTML = "Tied"
        }
        else if (computerChoice == 3) {
            computerScore = computerScore + 1
            status.innerHTML = "You lose"
        }
        else if (computerChoice == 1) {
            playerScore = playerScore + 1
            status.innerHTML = "You win"
        }
        score.innerHTML = `(You) ${playerScore} - (Computer) ${computerScore}`
    })

    scissors.addEventListener('click', ()=>{
        computerChoice = getRndInteger(1, 3)
        console.log(computerChoice)
        gamePlaying = true
        if (computerChoice == 3) {
            status.innerHTML = "Tied"
        }
        else if (computerChoice == 1) {
            computerScore = computerScore + 1
            status.innerHTML = "You lose"
        }
        else if (computerChoice == 2) {
            playerScore = playerScore + 1
            status.innerHTML = "You win"
        }
        score.innerHTML = `(You) ${playerScore} - (Computer) ${computerScore}`
    })

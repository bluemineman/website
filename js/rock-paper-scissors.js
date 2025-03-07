const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const score = document.querySelector('.score')
const status = document.querySelector('.status')
const computerChose = document.querySelector('.computerChoice')

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let gamePlaying = false
let playerScore = 0
let computerScore = 0
let computerChoice = 1

rock.addEventListener('click', () => {
    rockChosen()
})

paper.addEventListener('click', () => {
    paperChosen()
})

scissors.addEventListener('click', () => {
    scissorsChosen()
})

computerChose.innerHTML = "Computer chose: Rock"


function rockChosen() {
    computerChoice = getRndInteger(1, 3)
    console.log(computerChoice)
    gamePlaying = true
    if (computerChoice == 1) {
        status.innerHTML = "Tied"
        computerChose.innerHTML = "Computer chose: Rock"
    } else if (computerChoice == 2) {
        computerScore = computerScore + 1
        status.innerHTML = "You lose"
        computerChose.innerHTML = "Computer chose: Paper"
    } else if (computerChoice == 3) {
        playerScore = playerScore + 1
        status.innerHTML = "You win"
        computerChose.innerHTML = "Computer chose: Scissors"
    }
    score.innerHTML = `<h3>(You) ${playerScore} - (Computer) ${computerScore}<h3>`
}


function paperChosen() {
    computerChoice = getRndInteger(1, 3)
    console.log(computerChoice)
    gamePlaying = true
    if (computerChoice == 2) {
        status.innerHTML = "Tied"
        computerChose.innerHTML = "Computer chose: Paper"
    } else if (computerChoice == 3) {
        computerScore = computerScore + 1
        status.innerHTML = "You lose"
        computerChose.innerHTML = "Computer chose: Scissors"
    } else if (computerChoice == 1) {
        playerScore = playerScore + 1
        status.innerHTML = "You win"
        computerChose.innerHTML = "Computer chose: Rock"
    }
    return score.innerHTML = `<h3>(You) ${playerScore} - (Computer) ${computerScore}<h3>`
}

function scissorsChosen() {
    computerChoice = getRndInteger(1, 3)
    console.log(computerChoice)
    gamePlaying = true
    if (computerChoice == 3) {
        status.innerHTML = "Tied"
        computerChose.innerHTML = "Computer chose: Scissors"
    } else if (computerChoice == 1) {
        computerScore = computerScore + 1
        status.innerHTML = "You lose"
        computerChose.innerHTML = "Computer chose: Rock"
    } else if (computerChoice == 2) {
        playerScore = playerScore + 1
        status.innerHTML = "You win"
        computerChose.innerHTML = "Computer chose: Paper"
    }
    return score.innerHTML = `<h3>(You) ${playerScore} - (Computer) ${computerScore}<h3>`
}

const ball = document.createElement('div')
document.body.appendChild(ball)
const lPaddle = document.createElement('div')
document.body.appendChild(lPaddle)
const scoreEl = document.createElement('div')
document.body.appendChild(scoreEl)
const levelEl = document.createElement('div')
document.body.appendChild(levelEl)
const deathEl = document.createElement('div')
document.body.appendChild(deathEl)
const startBtn = document.createElement('btn')
document.body.appendChild(startBtn)

const ballRadius = 40
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

let lPaddleWidth = 20
let lPaddleHeight = 175
let lPaddleYPosition = windowHeight / 2 - lPaddleHeight / 2
let lPaddleXPosition = 20
let lPaddleSpeed = 10

let ballSpeed = 5
let ballXPosition = windowWidth / 2 - ballRadius
let ballXDirection = 1

let ballYPosition = windowHeight / 2 - ballRadius
let ballYDirection = 1

let score = 0 // display score and increase the score by one every time the ball hits the paddle
let level = 1
let scoreThreshold = 5 // display level and increase level by 1 every time the score increases by 10
// as the levels increase, increase ball speed. if the ball gets past your paddle, end game
//make ball stop or disappear and let user know game is over
//optional: sound effects, background music

createStartBtn()
startBtn.addEventListener('click', () => {
    startBtn.remove()
    createBall()
    createlPaddle()
    createScore()
    createLevel()
    createDeath()
})



function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ball.style.left = `${ballXPosition}px`
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2.5 * ballRadius) {
        ballXDirection = ballXDirection * -1
    }
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2.1 * ballRadius) {
        ballYDirection = ballYDirection * -1
    }

    if (ballXPosition < 0) {
        gameOver()
    }

    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let lPaddleTop = lPaddleYPosition
    let lPaddleBottom = lPaddleYPosition + lPaddleHeight
    let lPaddleRight = lPaddleXPosition + lPaddleWidth
    if (
        (ballBottom >= lPaddleTop) &&
        (ballTop <= lPaddleBottom) &&
        (ballLeft <= lPaddleRight) &&
        (ballXDirection == -1)
    ) {
        console.log("hit")
        updateScore()

        if (score >= scoreThreshold) {
            scoreThreshold = scoreThreshold + 5
            updateLevel()
        }
        ballYDirection = ballYDirection * -1
        ballXDirection = ballXDirection * -1
    }
}

function createBall() {
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "red"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}

function createlPaddle() {
    lPaddle.style.height = `${lPaddleHeight}px`
    lPaddle.style.width = `${lPaddleWidth}px`
    lPaddle.style.backgroundColor = 'blue'
    lPaddle.style.position = 'absolute'
    lPaddle.style.left = `${lPaddleXPosition}px`
    lPaddle.style.top = `${lPaddleYPosition}px`
}

function createScore() {
    scoreEl.innerHTML = `Score: ${score}`
    scoreEl.style.position = 'absolute'
    scoreEl.style.fontSize = "25px"
}

function updateScore() {
    score = score + 1
    scoreEl.innerHTML = `Score: ${score}`
}

function createLevel() {
    levelEl.innerHTML = `Level: ${level}`
    levelEl.style.position = 'absolute'
    levelEl.style.right = "10px"
    levelEl.style.fontSize = "25px"
}

function updateLevel() {
    level = level + 1
    levelEl.innerHTML = `Level: ${level}`
    ballSpeed = ballSpeed + 2
}

function createDeath() {
    deathEl.style.right = `${windowWidth / 2 - 150}px`
    deathEl.style.top = `${windowHeight / 2 - 150}px`
    deathEl.style.position = 'absolute'
    deathEl.innerHTML = "GAME OVER"
    deathEl.style.fontSize = "50px"
    deathEl.style.opacity = 0
}

function createStartBtn() {
    startBtn.style.position = 'absolute'
    startBtn.style.backgroundColor ='gray'
    startBtn.innerHTML = "START GAME"
    startBtn.style.width = "200px"
    startBtn.style.height = "50px"
    startBtn.style.textAlign = 'center'
    startBtn.style.verticalAlign = 'middle'
    startBtn.style.fontSize = "30px"
    startBtn.style.cursor = 'pointer'
    startBtn.style.right = `${windowWidth / 2 - 100}px`
    startBtn.style.top = `${windowHeight / 2 - 50}px`
}

wKey = false
sKey = false

document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})

function moveLPaddle() {
    if (wKey && lPaddleYPosition > 0) {
        lPaddleYPosition = lPaddleYPosition - lPaddleSpeed
    }
    if (sKey && lPaddleYPosition < (windowHeight - lPaddleHeight) - 6) {
        lPaddleYPosition = lPaddleYPosition + lPaddleSpeed
    }
    lPaddle.style.top = `${lPaddleYPosition}px`
}

function gameOver() {
    deathEl.style.opacity = 1
    lPaddle.style.opacity = .2
    ball.style.opacity = .2
    ballSpeed = 0
    lPaddleSpeed = 0
}

function animate() {
    moveBall()
    moveLPaddle()
    requestAnimationFrame(animate)
}

animate()

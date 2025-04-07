const ball = document.createElement('div')
document.body.appendChild(ball)
const lPaddle = document.createElement('div')
document.body.appendChild(lPaddle)

const ballRadius = 50
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

let lPaddleWidth = 20
let lPaddleHeight = 200
let lPaddleYPosition = windowHeight / 2 - lPaddleHeight / 2
let lPaddleSpeed = 10

let ballSpeed = 5
let ballXPosition = windowWidth / 2 - ballRadius
let ballXDirection = 1

let ballYPosition = windowHeight / 2 - ballRadius
let ballYDirection = 1

createBall()
createlPaddle()

setInterval(moveBall, 10)

function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ball.style.left = `${ballXPosition}px`
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius) {
        ballXDirection = ballXDirection * -1
    }
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection = ballYDirection * -1
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
    lPaddle.style.backgroundColor = "blue"
    lPaddle.style.position = 'absolute'
    lPaddle.style.left = "20px"
    lPaddle.style.top = `${lPaddleYPosition}px`
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowUp') {
        lPaddleYPosition = lPaddleYPosition - lPaddleSpeed
    }
    else if (event.key == 'ArrowDown') {
        lPaddleYPosition = lPaddleYPosition + lPaddleSpeed
    }
    lPaddle.style.top = `${lPaddleYPosition}px`
})

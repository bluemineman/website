const screens = document.querySelectorAll('.screen')
const startBtn = document.getElementById('start-btn')
const chooseInsectBtns = document.querySelectorAll('.choose-insect-btn')
const gameContainer = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')

let seconds = 0
let score = 0
let selectedInsect = {}

startBtn.addEventListener('click', () => {
    screens[0].classList.add('up')
})

chooseInsectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        screens[1].classList.add('up')
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selectedInsect = {src, alt}
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    timeEl.innerHTML = `Time: ${seconds}`
    seconds = seconds + 1
}

const screens = document.querySelectorAll('.screen')
const startBtn = document.getElementById('start-btn')
const chooseInsectBtns = document.querySelectorAll('.choose-insect-btn')
const gameContainer = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')

startBtn.addEventListener('click', () => {
    screens[0].classList.add('up')
})

chooseInsectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        screens[1].classList.add('up')
    })
})

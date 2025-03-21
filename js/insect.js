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
    createInsect()
}

function increaseTime() {
    let s = seconds % 60
    let m = Math.floor(seconds / 60)
    if (s < 10) {
        s = `0${s}`
    }
    if (m < 10) {
        m = `0${m}`
    }
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds = seconds + 1
}

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    insect.innerHTML = `<img src="${selectedInsect.src}" alt="${selectedInsect.alt}">`
    const {x, y} = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    gameContainer.appendChild(insect)

    insect.addEventListener('click', catchInsect)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * width
    const y = Math.random() * height
    return {x, y}
}

function catchInsect() {
    increaseScore()
}
function increaseScore() {
        score = score + 1
        scoreEl.innerHTML = `Score: ${score}`
}

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

blurring()

function blurring() {
    load = load + 1
    loadText.innerText = `${load}%`
}

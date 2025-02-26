const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 50)

blurring()

function blurring() {
    load = load + 1
    if (load > 99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`

}

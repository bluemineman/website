const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')
const element4 = document.getElementById('element4')
const element5 = document.getElementById('element5')

element1.addEventListener('click', ()=>{
    element1.innerHTML = "I've been clicked! <br> Try double clicking me."
})

element1.addEventListener('dblclick', ()=>{
    element1.innerHTML = "I've been double clicked! <br> Try single clicking me."
})

element2.addEventListener('mouseover', ()=>{
    element2.style.color = "yellow"
    element2.style.backgroundColor = "red"
    element2.innerHTML = "AHHHHHH!!!"
})

element2.addEventListener('mouseout', ()=>{
    element2.style.color = "white"
    element2.style.backgroundColor = "#BB33BB"
    element2.innerHTML = "I was joking!!!"
})

let positionY = 0;
let positionX = 0;

document.addEventListener('keydown', (event) =>{
    console.log(event.key)

    if (event.key == 'ArrowUp') {
        positionY = positionY - 10
    }
    else if (event.key == 'ArrowDown') {
        positionY = positionY + 10
    }
    else if (event.key == 'ArrowLeft') {
        positionX = positionX + 10
    }
    else if (event.key == 'ArrowRight') {
        positionX = positionX - 10
    }
    element3.style.top = `${positionY}px`
    element3.style.right = `${positionX}px`

})

element4.addEventListener('click', () => {
    element4.style.width = "5px"
    element4.style.height = "5px"
    element4.innerHTML = ""
    element4.style.opacity = .2
})

document.addEventListener('keyup', (event) => {
    if (event.key == 'j') {
    element4.style.width = "300px"
    element4.style.height = "50px"
    element4.innerHTML = "<h4>Click Me to shrink. <br> Press 'j' to Bring Me Back </h4> "
    element4.style.opacity = 1
    }
})


const list = ['running', 'paused']
let index = 0
element5.addEventListener('click', () =>{
    element5.style.animationPlayState = list[index]
})

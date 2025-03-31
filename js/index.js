const btn = document.getElementById('btn')
const 

const list = ['running', 'paused']
let index = 0
btn.addEventListener('click', () =>{
    .style.animationPlayState = list[index]
    index = (index + 1) % 2
})

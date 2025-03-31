const btn = document.querySelector('.btn')
const content = document.getElementById('content')

const list = ['running', 'paused']
let index = 0
btn.addEventListener('click', () =>{
    content.style.animationPlayState = list[index]
    index = (index + 1) % 2
})

const panels = document.querySelector('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        panel.classList.add('active')
    })
})

const main = document.querySelector('main')
const voicesSelect = document.getElementById('voices')
const textarea = document.getElementById('text')
const readBtn = document.getElementById('read')
const toggleBtn = document.getElementById('toggle')
const closeBtn = document.getElementById('close')

const data = [
    {
        image: '../drink.jpg',
        text: "I'm thirsty"
    },
    {
        image: '../food.jpg',
        text: "I'm hungry"
    },
    {
        image: '../tired.jpg',
        text: "I'm tired"
    },
    {
        image: '../hurt.jpg',
        text: "I'm hurt"
    },
    {
        image: '../happy.jpg',
        text: "I'm happy"
    },
    {
        image: '../angry.jpg',
        text: "I'm angry"
    },
    {
        image: '../sad.jpg',
        text: "I'm sad"
    },
    {
        image: '../scared.jpg',
        text: "I'm scared"
    },
    {
        image: '../outside.jpg',
        text: 'I want to go outside'
    },
    {
        image: '../home.jpg',
        text: 'I want to go home'
    },
    {
        image: '../school.jpg',
        text: 'I want to go to school'
    },
    {
        image: '../grandma.jpg',
        text: "I want to go to grandmas"
    }
]


data.forEach(createBox)

function createBox(item) {
    const box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML = `
        <img src="${item.image}" alt="${item.text}" />
        <p class ="info"> ${item.text} </p>
    `

    box.addEventListener('click', () => {
        setTextMessage(item.text)
        speakText()

        // add active effect
        box.classList.add('active')
        setTimeout( () => box.classList.remove('active'), 800)
    })

    main.appendChild(box)
}

// Initialize speech synthesis
const message = new SpeechSynthesisUtterance()

// Set text
function setTextMessage(text) {
    message.text = text
}

// Speak text
function speakText() {
    speechSynthesis.speak(message)
}

// Toggle text box
toggleBtn.addEventListener('click', () => {
    document.getElementById('text-box').classList.toggle('show')
})

// Close box
closeBtn.addEventListener('click', () => {
    document.getElementById('text-box').classList.remove('show')
})

let voices = []

function getVoices() {
    voices = speechSynthesis.getVoices()

        voices.forEach(voice => {
            const option = document.createElement('option')

            option.value = voice.name
            option.innerText = `${voice.name} ${voice.lang}`

            voicesSelect.appendChild(option)
        })
}

// voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices)


// Change voice
voicesSelect.addEventListener('change', setVoice)

// Set voice
function setVoice(e) {
    message.voice = voices.find(voice => voice.name === e.target.value)
}

getVoices()

// read text button
readBtn.addEventListener('click', () => {
    setTextMessage(textarea.value)
    speakText()
})

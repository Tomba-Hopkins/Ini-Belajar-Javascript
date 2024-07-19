const lastButton = document.querySelector('.t-last')
const musicButton = document.querySelector('.t-lagu')
const beruang = document.querySelector('.beruang')
const lagu = document.querySelector('audio')

musicButton.addEventListener('click', () => {
    lagu.play()
    document.body.style.backgroundColor = 'pink'
    setTimeout(() => {
        document.body.style.backgroundColor = 'white'
    }, 14000)
})

lastButton.addEventListener('click', () => {
    beruang.style.display = 'flex'
})
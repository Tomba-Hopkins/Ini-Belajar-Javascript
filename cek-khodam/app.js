const backButton = document.querySelector('.back-button')
const khodamButton = document.querySelector('.khodam-button')
const hiddenBox = document.querySelector('.box')

backButton.addEventListener('click', () => {
    hiddenBox.classList.remove('muncul')
})

khodamButton.addEventListener('click', () => {
    hiddenBox.classList.add('muncul')
})
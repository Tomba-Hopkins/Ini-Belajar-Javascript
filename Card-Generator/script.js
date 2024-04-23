const name = document.querySelector('.name')
const price = document.querySelector('.price')
const button = document.querySelector('.submit')
const container = document.querySelector('.container')
const pesan = document.querySelector('.pesan')

let count = 0

button.addEventListener('click', (ev) => {

    ev.preventDefault()
    
    const newCard = document.createElement('div')
    newCard.classList.add('card', `slide${count}`)
    newCard.innerHTML = `
    <p class="name">Name: ${name.value}</p>
    <p class="price">Price: $${price.value}</p>
    `
    container.appendChild(newCard)
    
    document.querySelector(`.slide${count}`).style.animation = "geser 1s linear"
    
    count++
    
    newCard.addEventListener('transitionend', () => {
        if(newCard.classList.contains(`slide${count - 1}`)) {
            document.querySelector(`.slide${count - 1}`).style.animation = "none"
        }
    })
    
})


const text = "Web ini kalau di akses desktop buriq bet asli"

for (let i = 0; i < text.length; i++){
    setTimeout(() => {
        pesan.innerHTML += text[i]
    }, 20 * i)
}
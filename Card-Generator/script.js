const name = document.querySelector('.name')
const price = document.querySelector('.price')
const button = document.querySelector('.submit')
const container = document.querySelector('.container')
const pesan = document.querySelector('.pesan')


button.addEventListener('click', (ev) => {

    ev.preventDefault()
        
    const newCard = document.createElement('div')
    newCard.classList.add('card', 'new-card')
    newCard.innerHTML = `
        <p class="name">Name: ${name.value}</p>
        <p class="price">Price: $${price.value}</p>
        `
    container.appendChild(newCard)

})


const text = "Web ini kalau di akses desktop buriq bet asli"

for (let i = 0; i < text.length; i++){
    setTimeout(() => {
        pesan.innerHTML += text[i]
    }, 20 * i)
}
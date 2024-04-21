const num = document.querySelector('.num')

for (let i = 0; i < 250; i++){
    setTimeout(() => {
        num.innerHTML = i
    }, 20 * i)
    if (i == 100) break
}

const input = document.querySelector('#masuk')
const button = document.querySelector('.submit')
const val = document.querySelector('.val')


button.addEventListener('click', (ev) =>{

    ev.preventDefault()
    
    const value = input.value
    
    for (let i = 0; i < value.length; i++){
        setTimeout(() => {
            // val.innerHTML = `<p class="val">${value[i]}</p>`
            
            val.innerHTML += value[i]

            
            
        }, 100 * i)
    }
    
})

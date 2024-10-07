const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const output = document.querySelector('.output')

input.addEventListener('input', () => {
    output.textContent = input.value
})


const callbackProcess = () => {
    const words = sensor(input.value)
    output.textContent = words
}

btn.addEventListener('click', callbackProcess)
input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter'){
        callbackProcess()
    }
})

const sensor = (word) => {
    const regex = /anj[ei3]n[gkc]/i
    if (regex.test(word)){
        return word.replace(regex, match => "*".repeat(match.length))
    }
    return word
}
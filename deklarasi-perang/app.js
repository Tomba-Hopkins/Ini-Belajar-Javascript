const accept = document.querySelector('.accept')
const gambar = document.querySelector('.gambar')
const hujan = document.querySelector('.turun')
const warning = document.querySelector('.warning')
const lagu = document.querySelector('audio')

accept.addEventListener('click', () => {
    gambar.style.animation = '0.2s splash linear'
    gambar.src = 'img/giga.gif'
    gambar.style.borderRadius = '10%'
    warning.innerHTML = 'Bersiaplah untuk...'
    lagu.play()

    setInterval(() => {
        hujan.innerHTML = ""
        hujan.style.animation = '10s hujan infinite alternate'
        setInterval(() => {
            hujan.innerHTML += "❤️"
        }, 500);
    }, 200)
})




const kabur = () => {
    const { innerWidth } = window
    const { innerHeight } = window

    const randomWidth = Math.floor(Math.random() * innerWidth)
    const randomHeight = Math.floor(Math.random() * innerHeight)

    return {
        width: randomWidth,
        height: randomHeight
    }
}


const tolak = document.querySelector('.decline')
tolak.addEventListener('click', () => {

    const objectKabur = kabur()
    
    tolak.style.right = `${objectKabur.width}px`
    tolak.style.top = `${objectKabur.height}px`
})
const backButton = document.querySelector('.back-button')
const khodamButton = document.querySelector('.khodam-button')
const hiddenBox = document.querySelector('.box')

const imgKhodam = document.querySelector('.img-khodam')
const titleKhodam = document.querySelector('.title-khodam')
const descKhodam = document.querySelector('.desc-khodam')

const lagu = document.querySelector('audio')

const listKhodam = [
    {
        gambar: 'codeman',
        judul: 'CodeMan',
        deskripsi: 'Bisa mengubah orang jadi manusia.cpp'
    },
    {
        gambar: 'dangerman',
        judul: 'DangerMan',
        deskripsi: 'Bisa mengubah orang menjadi geprek bakar'
    },
    {
        gambar: 'maling',
        judul: 'Maling',
        deskripsi: 'Bisa mengubah saldo orang menjadi 0 k'
    },
    {
        gambar: 'dinoman',
        judul: 'DinoMan',
        deskripsi: 'Bisa menyuruh dinosaurus dia untuk menggigit kaki orang'
    },
    {
        gambar: 'mabar',
        judul: 'MabarMan',
        deskripsi: 'Bisa mengajak orang mabar hingga lupa waktu dan pingsan'
    },
    {
        gambar: 'sandman',
        judul: 'SandMan',
        deskripsi: 'Bisa menyuruh orang untuk piket menyapu dan pingsan setelahnya'
    },
]

backButton.addEventListener('click', () => {
    hiddenBox.classList.remove('muncul')
    lagu.pause()
    lagu.currentTime = 0
})

khodamButton.addEventListener('click', () => {
    hiddenBox.classList.add('muncul')

    const hoki = Math.floor(Math.random() * listKhodam.length)
    imgKhodam.src = `img/${listKhodam[hoki].gambar}.jpeg`
    titleKhodam.textContent = listKhodam[hoki].judul
    descKhodam.textContent = listKhodam[hoki].deskripsi

    lagu.play()
})
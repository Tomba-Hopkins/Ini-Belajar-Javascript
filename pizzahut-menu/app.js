const cardPlace = document.querySelector('.card-place')

const showAll = () => {
    fetch('data/pizzahut.json')
.then(res => {
    if (!res.ok){
        throw new Error('Gagal noh: ', res.statusText)
    }
    return res.json()
})
.then((data) => {
    const menu = data.menu

    
    menu.forEach((m) => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')
        card.innerHTML = `<div class="card mb-3">
        <img src="img/menu/${m.gambar}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${m.nama}</h5>
              <p class="card-text">${m.deskripsi}</p>
              <h5>Rp. ${m.harga}</h5>
              <a href="#" class="btn btn-primary">Pesan Sekarang</a>
            </div>
        </div>`

        cardPlace.appendChild(card)
    })

})
.catch((err) => console.log(err))


}

showAll()

const navLink = document.querySelectorAll('.nav-link')

navLink.forEach((nl) => {
    nl.addEventListener('click', function(event) {

        navLink.forEach((nl) => {
            nl.classList.remove('active')
        })
        event.target.classList.add('active')
        const category = event.target.textContent

        if (category === "All Menu"){
            showAll()
            return
        }
        
        fetch('data/pizzahut.json')
        .then((response) => {
            if(!response.ok){
                throw new Error('Error cil')
            }

            return response.json()
        })
        .then((res) => {
            const menu = res.menu

            cardPlace.innerHTML = ''

            
            
            menu.forEach((m) => {

                if (m.kategori === category.toLowerCase()){

                    const card = document.createElement('div')
                    card.classList.add('col-md-4')
                    card.innerHTML = `<div class="card mb-3">
                    <img src="img/menu/${m.gambar}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${m.nama}</h5>
                        <p class="card-text">${m.deskripsi}</p>
                        <h5>Rp. ${m.harga}</h5>
                        <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                        </div>
                    </div>`

                    cardPlace.appendChild(card)
                    
                }
                
                
            })
            
        })


    })
})
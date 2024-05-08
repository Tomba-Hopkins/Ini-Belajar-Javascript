// Belajar dari bro code

const isi = document.querySelector('.isi-layar')

function cetakLayar(input){
    isi.value += input
}

function clearD(){ // kalau clear doang gabisa jir
    isi.value = "" 
}

function calculate() {
    try {
        isi.value = eval(isi.value)
    } catch(err){
        isi.value = "error"
    }
}
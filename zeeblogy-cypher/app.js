const resultP = document.querySelector('.result')
const words = document.querySelector('.words')
const tombol = document.querySelector('.tombol')

tombol.addEventListener('click', () => {
    const result = omkeGams(words.value)
    resultP.innerHTML = result
})


const omkeGams = (word) => {
    if (word == "godplan" || word == "Godplan" || word == "GODPLAN") {
        return "godvlan"
    }

    let d = true
    let r = ""

    let vowels = new Set(['a','i','u','e','o'])
    let vlan = new Set('p','b','f')

    for(let w of word){
        if (vowels.has(w) && d){
            d = false
            r += w + "m"
            continue
        } else if (vowels.has(w)){
            d = true 
            r += w
            continue
        } else if (vlan.has(w)){
            r += "v"
            continue
        }

        r += w
    }

    return r
}
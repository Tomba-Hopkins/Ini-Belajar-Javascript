const num = document.querySelector('#number')
const btn = document.querySelector('#convert-btn')
const res = document.querySelector('#output')

btn.addEventListener('click', () => {
    let numVal = Number(num.value)
    if (numVal < 0) {
        res.textContent = "Please enter a number greater than or equal to 1"
    } else if (numVal == 0) {
        res.textContent = "Please enter a valid number"
    } else if (numVal > 3999) {
        res.textContent = "Please enter a number less than or equal to 3999"
    } else {
        res.textContent = convRoman(numVal)
    }


    
})

const convRoman = (number) => {
    let keyNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let result = ""

    for(let i = 0; i < keyNums.length; i++) {
        while(number >= keyNums[i]) {
            number -= keyNums[i]
            result += romans[i]
        }
    }

    return result

}
const checkBtn = document.querySelector('#check-btn')
const clearBtn = document.querySelector('#clear-btn')
const userInput = document.querySelector('#user-input')
const result = document.querySelector('#results-div')


checkBtn.addEventListener('click', () => {
    if(userInput.value.length < 1) {
        alert("Please provide a phone number")
    }

    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-\s]?)\d{4}$/

    if(regex.test(userInput.value)){
        result.textContent = `Valid US number: ${userInput.value}`
    } else {
        result.textContent = `Invalid US number: ${userInput.value}`
    }
})


clearBtn.addEventListener('click', () => {
    userInput.value = ""
    result.textContent = ""
})
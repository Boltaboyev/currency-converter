import "./style.css"

const form = document.getElementById("form")
const amount = document.getElementById("amount")
const country = document.getElementById("country")
const usd = document.getElementById("usd")
const selectedCurrency = document.getElementById("selectedCurr")

const BASE_URL =
    "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=e62d78b87b374f80b134bed869e908a2"
amount.addEventListener("input", () => {
    amount.value = amount.value.replace(/\D/g, "")
})


fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
        const rates = data.rates

        Object.keys(rates).forEach((e) => {
            let option = document.createElement("option")
            option.textContent = e
            option.value = rates[e]
            country.append(option)
        })
    })
    .catch((err) => console.log(err))


form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const result = amount.value * country.value
    usd.textContent = amount.value
    selectedCurrency.innerHTML = `${result.toFixed(2) + " " + country.options[country.selectedIndex].textContent}`
})


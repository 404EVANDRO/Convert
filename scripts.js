const USD = 5.80
const EUR = 6.11
const GBP = 7.39 

//get elements from the form.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Input amount for receiv only numbers.
amount.addEventListener("input", () => {
    const hasCharacterRegex = /\D+/g
    console.log(amount.value)
    
    amount.value = amount.value.replace(hasCharacterRegex, "")
    
})

//Capturing submit (send) event in form.
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }  
}

// Show result in footer
function convertCurrency(amount, price, symbol) {
    try{
        description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`

        let total = amount * price
        total = formatCurrencyBRL(total).replace("R$", "")

        if(isNaN(total)) {
            return alert("Digite um valor válido.")
        }

        footer.classList.add("show-result")
    } catch (error){
        console.log(error)
        //remove footer class
        footer.classList.remove("show-result")
        alert("Não foi possível converter")
    }

}
//formats the currency to the Brazilian standard
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}






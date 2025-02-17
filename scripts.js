const USD = 5.71;
const EUR = 5.98;
const GBP = 7.20;

// Catching elements
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Allow only numbers in the amount field
amount.addEventListener("input", () => {
    amount.value = amount.value.replace(/\D/g, "");
});

// Catching the form submit event
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (!amount.value) {
        alert("Por favor, insira um valor válido.");
        return;
    }
    
    const amountValue = parseFloat(amount.value);
    if (isNaN(amountValue) || amountValue <= 0) {
        alert("Digite um valor válido maior que zero.");
        return;
    }
    
    switch (currency.value) {
        case "USD":
            convertCurrency(amountValue, USD, "US$");
            break;
        case "EUR":
            convertCurrency(amountValue, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amountValue, GBP, "£");
            break;
        default:
            alert("Selecione uma moeda válida.");
    }
});

// Function to convert the currency
function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`;

        const total = formatCurrencyBRL(amount * price);
        
        result.textContent = `Total: ${total}`;
        footer.classList.add("show-result");
    } catch (error) {
        console.error(error);
        footer.classList.remove("show-result");
        alert("Não foi possível converter.");
    }
}

// Format the currency to BRL
function formatCurrencyBRL(value) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}

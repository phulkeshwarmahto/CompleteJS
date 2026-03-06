const BASE_URL = "https://v6.exchangerate-api.com/v6/58af020d882b644abd848f7f/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate drop-downs with currency options
for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        
        // Default select USD to INR
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    // Change flag when a new currency is selected
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// Function to calculate and display the exchange rate
const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    
    // Prevent empty or negative values
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }
    
    try {
        // Fetch Data from the API
        const URL = `${BASE_URL}/${fromCurr.value.toUpperCase()}`;
        let response = await fetch(URL);
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        let data = await response.json();
        
        if (data.result !== "success") {
            throw new Error("API returned an error");
        }
        
        let rate = data.conversion_rates[toCurr.value.toUpperCase()];
        
        if (!rate) {
            throw new Error("Exchange rate not found");
        }
        
        let finalAmount = (amtVal * rate).toFixed(2);
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } catch (error) {
        msg.innerText = "Error fetching exchange rate. Please try again.";
        console.error("Conversion error:", error);
    }
};

// Function to update the flag image based on the selected country
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

// Button click event to trigger the conversion
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

// Update the exchange rate automatically when the page loads
window.addEventListener("load", () => {
    updateExchangeRate();
});
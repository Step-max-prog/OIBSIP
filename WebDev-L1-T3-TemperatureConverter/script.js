const temperatureInput = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const clearBtn = document.getElementById("clearBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", function () {

    const temperature = parseFloat(temperatureInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (isNaN(temperature)) {
        result.textContent = "Please enter a temperature";
        return;
    }

    let celsius;

    
    if (from === "celsius") {
        celsius = temperature;
    } else if (from === "fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    } else if (from === "kelvin") {
        celsius = temperature - 273.15;
    }

    let convertedTemperature;

    
    if (to === "celsius") {
        convertedTemperature = celsius;
    } else if (to === "fahrenheit") {
        convertedTemperature = (celsius * 9 / 5) + 32;
    } else if (to === "kelvin") {
        convertedTemperature = celsius + 273.15;
    }

    let unitSymbol;

    if (to === "celsius") {
        unitSymbol = "°C";
    } else if (to === "fahrenheit") {
        unitSymbol = "°F";
    } else if (to === "kelvin") {
        unitSymbol = "K";
    }

    result.textContent = `${convertedTemperature.toFixed(2)} ${unitSymbol}`;
});


clearBtn.addEventListener("click", function () {
    temperatureInput.value = "";
    fromUnit.value = "celsius";
    toUnit.value = "fahrenheit";
    result.textContent = "--";
});
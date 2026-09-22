const display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "0" && value !== ".") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    if (display.value.length === 1) {
        display.value = "0";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

function calculate() {
    try {
        let expression = display.value;

    
        expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

        const result = Function("return " + expression)();

        if (isFinite(result)) {
            display.value = result;
        } else {
            display.value = "Error";
        }

    } catch (error) {
        display.value = "Error";
    }
}
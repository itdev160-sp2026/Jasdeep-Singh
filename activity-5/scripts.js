// Activity 5: Simple Math Operations Widget
console.log(" Activity 5: Simple Math Operations Widget ");

// Part A: Element Selection and Setup
const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const operationButtons = document.querySelectorAll(".operation");
const clearButton = document.getElementById("clear");
const resultDiv = document.getElementById("result");

// Part B: Event Object Helper
function logEventDetails(event) {
    console.log("Event Details:", {
        type: event.type,
        target: event.target,
        tagName: event.target.tagName,
        textContent: event.target.textContent
    });
}

// Part C: Math Operation Functions
function addNumbers(num1, num2) { return num1 + num2; }
function subtractNumbers(num1, num2) { return num1 - num2; }
function multiplyNumbers(num1, num2) { return num1 * num2; }
function divideNumbers(num1, num2) {
    if (num2 === 0) return "Error: Cannot divide by zero";
    return num1 / num2;
}

// Part D: Input Validation and Result Display
function validateInputs() {
    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);
    if (isNaN(num1)) { showError("Please enter a valid first number"); return null; }
    if (isNaN(num2)) { showError("Please enter a valid second number"); return null; }
    return { num1, num2 };
}

function showResult(result) {
    resultDiv.textContent = `Result: ${result}`;
    resultDiv.className = "result success";
}

function showError(message) {
    resultDiv.textContent = message;
    resultDiv.className = "result error";
}

// Event Listeners
operationButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        logEventDetails(e);
        const inputs = validateInputs();
        if (!inputs) return;
        
        const { num1, num2 } = inputs;
        const operation = e.target.dataset.operation;
        let result;

        if (operation === "add") result = addNumbers(num1, num2);
        else if (operation === "subtract") result = subtractNumbers(num1, num2);
        else if (operation === "multiply") result = multiplyNumbers(num1, num2);
        else if (operation === "divide") result = divideNumbers(num1, num2);

        if (typeof result === "string" && result.startsWith("Error")) {
            showError(result);
        } else {
            showResult(result);
        }
    });
});

clearButton.addEventListener("click", (e) => {
    logEventDetails(e);
    number1Input.value = "";
    number2Input.value = "";
    resultDiv.textContent = "Result will appear here";
    resultDiv.className = "result";
});
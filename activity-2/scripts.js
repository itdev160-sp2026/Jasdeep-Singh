function checkAge() {
    const ageInput = document.getElementById("ageInput").value;
    const resultDiv = document.getElementById("result");
    
    const age = Number(ageInput);

    resultDiv.className = "";

    if (ageInput === "") {
        resultDiv.innerText = "Please enter your age";
        resultDiv.classList.add("invalid");
    } else if (isNaN(age)) {
        resultDiv.innerText = "Invalid age. Please enter a number";
        resultDiv.classList.add("invalid");
    } else if (age < 0 || age > 150) {
        resultDiv.innerText = "Invalid age. Please enter a realistic age (0-150)";
        resultDiv.classList.add("invalid");
    } else if (age >= 18) {
        resultDiv.innerText = "You are an adult.";
        resultDiv.classList.add("adult");
    } else {
        resultDiv.innerText = "You are a minor.";
        resultDiv.classList.add("minor");
    }
    console.log("Age Input:", ageInput, "| Processed Age:", age, "| Result:", resultDiv.innerText);
}
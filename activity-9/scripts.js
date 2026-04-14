// Selecting elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

// Part A: Validation Functions 

const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validateField = (input, condition, errorId) => {
    const errorSpan = document.getElementById(errorId);
    
    if (condition) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        errorSpan.style.display = 'none';
        return true;
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
        errorSpan.style.display = 'block';
        return false;
    }
};

// Part B: Real-time Validation 

const checkFormValidity = () => {
    const isNameValid = nameInput.value.trim() !== "";
    const isEmailValid = isValidEmail(emailInput.value);
    const isMessageValid = messageInput.value.trim().length >= 10;

    // Update UI for each field
    validateField(nameInput, isNameValid, 'nameError');
    validateField(emailInput, isEmailValid, 'emailError');
    validateField(messageInput, isMessageValid, 'messageError');

    // Toggle Submit Button
    submitBtn.disabled = !(isNameValid && isEmailValid && isMessageValid);
};

// Event Listeners for typing
[nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('input', checkFormValidity);
});

// Part C: Form Submission 

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual page reload

    // Final check
    if (!submitBtn.disabled) {
        // Success Logic
        formStatus.textContent = "Form submitted successfully!";
        
        // Log data to console
        console.log("--- Form Submission Data ---");
        console.log("Name:", nameInput.value);
        console.log("Email:", emailInput.value);
        console.log("Message:", messageInput.value);

        // Reset form (optional but good practice)
        form.reset();
        submitBtn.disabled = true;
        // Remove valid classes after reset
        [nameInput, emailInput, messageInput].forEach(el => el.classList.remove('valid'));
    }
});
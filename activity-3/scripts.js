// Part A: DOM Selection Demonstrations 
// 1. Select elements by ID
const greetingMessage = document.getElementById('greeting-message');
const greetingImage = document.getElementById('greeting-image');
const nameInput = document.getElementById('nameInput');

// 2. Select elements by class 
const firstButton = document.querySelector('.controls button');

// 3. Select multiple elements 
const allButtons = document.querySelectorAll('button');

// 4. Log selected elements to verify
console.log("Greeting Message Element:", greetingMessage);
console.log("Greeting Image Element:", greetingImage);
console.log("All Buttons on Page:", allButtons);


// Part B: Content Modification
// Demonstrate textContent vs innerHTML
const outputDiv = document.getElementById('output');
outputDiv.innerHTML = "<p style='color: blue;'>DOM Manipulation Active!</p>"; 
console.log("textContent:", greetingMessage.textContent); // Shows plain text
console.log("innerHTML:", outputDiv.innerHTML); // Shows HTML tags


// Part C: Attribute Modification
// Example of managing attributes
greetingImage.setAttribute('title', 'Dynamic Greeting Card Image');
console.log("Image Alt Attribute:", greetingImage.getAttribute('alt'));


// Part D: Dynamic Greeting Card Functions
function setBirthdayGreeting() {
    greetingMessage.textContent = "Happy Birthday!";
    greetingImage.src = "https://picsum.photos/id/1062/300/200"; // I decided to go with a pub cause it's cute
    greetingImage.alt = "Birthday Cake";
    console.log("Changed to Birthday Greeting");
}

function setHolidayGreeting() {
    greetingMessage.textContent = "Happy Holidays!";
    greetingImage.src = "https://picsum.photos/id/1069/300/200"; // Who doesn't love jellyfish!
    greetingImage.alt = "Holiday Scenery";
    console.log("Changed to Holiday Greeting");
}

function setThankYouGreeting() {
    greetingMessage.textContent = "Thank You!";
    greetingImage.src = "https://picsum.photos/id/1025/300/200"; // THE PUB RETURNS
    greetingImage.alt = "Thank You Note";
    console.log("Changed to Thank You Greeting");
}

function setRandomGreeting() {
    const greetings = ["Cheers!", "Best Wishes!", "Thinking of You!"];
    const images = [237, 433, 582]; // Random Unsplash IDs
    const randomIndex = Math.floor(Math.random() * greetings.length);
    
    greetingMessage.textContent = greetings[randomIndex];
    greetingImage.src = `https://picsum.photos/id/${images[randomIndex]}/300/200`;
    console.log("Random Greeting Applied");
}


// Part E: Interactive Features
function personalizeGreeting() {
    const name = nameInput.value;
    if (name) {
        greetingMessage.textContent += `, ${name}!`;
        console.log(`Greeting personalized for: ${name}`);
    } else {
        alert("Please enter a name to personalize the card.");
    }
}
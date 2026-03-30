/**
 * Part A: Quote API Integration
 */

// Select DOM elements for manipulation
const quoteBtn = document.getElementById('get-quote-btn');
const loadingIndicator = document.getElementById('loading-indicator');
const quoteDisplay = document.getElementById('quote-display');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const errorMessage = document.getElementById('error-message');

const API_URL = "https://dummyjson.com/quotes/random";

/**
 * Main function to fetch a random quote from the API
 * Uses async/await for clean asynchronous logic
 */
async function fetchQuote() {
    // 1. Update UI to show loading state
    toggleUIState('loading');

    try {
        const response = await fetch(API_URL);

        // Check if the network response is successful (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 2. Parse and extract quote data
        const data = await response.json();
        
        // 3. Display the fetched quote
        displayQuote(data.quote, data.author);

    } catch (error) {
        // 4. Handle API errors and network failures
        console.error("Fetch error:", error);
        showError("Oops! We couldn't fetch a quote. Please try again later.");
    }
}

/**
 * Part B: Quote Display Functions
 */

/**
 * Updates the HTML elements with the new quote and triggers animations
 */
function displayQuote(text, author) {
    toggleUIState('success');

    // Update text content
    quoteText.textContent = `"${text}"`;
    quoteAuthor.textContent = `- ${author}`;

    // Re-trigger the fade-in animation by removing and re-adding the class
    quoteDisplay.style.animation = 'none';
    quoteDisplay.offsetHeight; // Trigger a reflow to reset animation
    quoteDisplay.style.animation = 'fadeIn 0.8s ease-in';
}

/**
 * Manages the visibility of loading, error, and content states
 * @param {string} state - 'loading', 'success', or 'error'
 */
function toggleUIState(state) {
    // Reset all states first
    loadingIndicator.style.display = 'none';
    quoteDisplay.style.display = 'none';
    errorMessage.textContent = '';

    if (state === 'loading') {
        loadingIndicator.style.display = 'block';
    } else if (state === 'success') {
        quoteDisplay.style.display = 'block';
    }
}

/**
 * Displays a custom error message to the user
 */
function showError(message) {
    toggleUIState('error');
    errorMessage.textContent = message;
}

// Event Listener for the button
quoteBtn.addEventListener('click', fetchQuote);

// Optional: Load an initial quote when the page starts
// fetchQuote();
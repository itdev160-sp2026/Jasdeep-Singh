/**
 * PART A: Asynchronous JavaScript Demonstrations
 */

console.log(" PART A: ASYNC DEMOS ");

// 1. Synchronous vs Asynchronous Execution
console.log("1. [Sync] I happen first.");

setTimeout(() => {
    // 2. setTimeout() demonstration
    console.log("2. [Async] I happen after 2 seconds (setTimeout).");
}, 2000);

console.log("3. [Sync] I happen third, even though I'm written after the setTimeout!");


// 3. Promise Concepts
const simplePromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("4. [Promise] Success: The data was retrieved!");
    } else {
        reject("4. [Promise] Error: Something went wrong.");
    }
});

simplePromise
    .then((message) => console.log(message))
    .catch((err) => console.error(err));


// 4. Async/Await with Try/Catch
async function demoAsyncFunction() {
    try {
        console.log("5. [Async/Await] Starting task...");
        const result = await simplePromise; // Waits for the promise to resolve
        console.log("6. [Async/Await] Result:", result);
    } catch (error) {
        console.error("6. [Async/Await] Caught an error:", error);
    }
}

demoAsyncFunction();


/**
 * PART B: Fetch API Introduction
 */

console.log("\n PART B: FETCH API ");

const API_URL = "https://jsonplaceholder.typicode.com/posts/1";

// 1. Basic Fetch with .then() and .catch()
function fetchWithThen() {
    fetch(API_URL)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json(); // 3. Convert response to JSON
        })
        .then(data => {
            console.log("7. [Fetch .then()] Data received:", data.title);
        })
        .catch(error => {
            console.error("7. [Fetch .then()] Error:", error);
        });
}

// 2. Async/Await version of Fetch
async function fetchWithAsync() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Network error occurred");
        
        const data = await response.json(); // 3. Convert response to JSON
        console.log("8. [Fetch Async/Await] Data received:", data.title);
    } catch (error) {
        console.log("8. [Fetch Async/Await] Error:", error.message);
    }
}

fetchWithThen();
fetchWithAsync();
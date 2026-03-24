// Part A: Array and Object Demonstrations
console.log("%c Part A: Demos ", "color: orange; font-weight: bold;");

// 1. Array Creation
const listA = ["Item 1", "Item 2"];
const listB = new Array("Item 3", "Item 4");

// 2. Array Methods
listA.push("Item 5");     // Add to end
listA.pop();              // Remove from end
listA.unshift("Start");   // Add to start
listA.shift();            // Remove from start

// 3. Iteration
listA.forEach(item => console.log("ForEach Item:", item));
const mapped = listA.map(item => item.toUpperCase());

// 4. Objects
const user = { id: 1, username: "DevUser" };
user.email = "dev@example.com"; // Add property
user.username = "SeniorDev";    // Modify property
delete user.id;                 // Delete property

// 5. Array of Objects logic
const data = [{val: 10}, {val: 20}, {val: 30}];
const filteredData = data.filter(obj => obj.val > 15);
const total = data.reduce((acc, curr) => acc + curr.val, 0);
console.log("Reduced Total:", total);
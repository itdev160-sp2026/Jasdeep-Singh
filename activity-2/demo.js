// Part A: Arithmetic Operators
let a = 10;
let b = 5;

console.log("Part A: Arithmetic Operators");
console.log("Addition (a + b):", a + b);
console.log("Subtraction (a - b):", a - b);
console.log("Multiplication (a * b):", a * b);
console.log("Division (a / b):", a / b);
console.log("Modulus (a % b):", a % b);

console.log("Precedence without parentheses (a + b * 2):", a + b * 2); // Multiplies it first
console.log("Precedence with parentheses ((a + b) * 2):", (a + b) * 2); // Adds it first


// Part B: Comparison Operators
let num5 = 5;
let str5 = "5";
let num10 = 10;

console.log("\nPart B: Comparison Operators");
console.log("Loose Equality (5 == '5'):", num5 == str5);   // true (checks the value)
console.log("Strict Equality (5 === '5'):", num5 === str5); // false (checks value AND the type)

console.log("Greater than (10 > 5):", num10 > num5);
console.log("Less than (5 < 10):", num5 < num10);
console.log("Greater than or equal (5 >= 5):", num5 >= 5);
console.log("Less than or equal (10 <= 5):", num10 <= num5);


// Part C: Logical Operators
let isSunny = true;
let isWarm = false;

console.log("\nPart C: Logical Operators");
console.log("AND (&&) - true && false:", isSunny && isWarm);
console.log("OR (||) - true || false:", isSunny || isWarm);
console.log("NOT (!) - !true:", !isSunny);


// Part D: Conditional Statements (if/else)
console.log("\nPart D: Conditional Statements");
let testAge = 20;

if (testAge >= 18) {
    console.log("Condition met: You are an adult.");
} else {
    console.log("Condition met: You are a minor.");
}


// Part E: Switch Statement
console.log("\nPart E: Switch Statement");
let dayNumber = 3; 

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Other day");
}


// Part F: Display a Message
document.getElementById("output").innerText = "demo.js script has finished running!";
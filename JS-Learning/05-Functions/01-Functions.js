// ========================================
// FUNCTIONS IN JAVASCRIPT
// ========================================

// 1. Simple Function
console.log("--- Simple Function ---");
function greet() {
    console.log("Hello! You are amazing!");
}
greet();
greet();

// 2. Function with Parameters
console.log("\n--- Function with Parameters ---");
function printMessage(message, number) {
    console.log(message);
    console.log(number);
}
printMessage("This is a message", 5);

// 3. Function with Return Statement
console.log("\n--- Function with Return ---");
function sum(x, y) {
    let s = x + y;
    return s;
}

let result = sum(10, 20);
console.log("Sum:", result);

// 4. Function - Volume Calculator
console.log("\n--- Volume Calculator ---");
function calculateVolume(length, width, height) {
    return length * width * height;
}

let volume = calculateVolume(5, 10, 3);
console.log("Volume:", volume);

// 5. Function - Check Grade
console.log("\n--- Check Grade ---");
function getGrade(marks) {
    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B";
    if (marks >= 60) return "C";
    return "F";
}

console.log("Marks 95 → Grade:", getGrade(95));
console.log("Marks 75 → Grade:", getGrade(75));
console.log("Marks 50 → Grade:", getGrade(50));

// 6. Function - Default Parameters
console.log("\n--- Default Parameters ---");
function greetPerson(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetPerson("Alice");
greetPerson();

// 7. Function - Count Vowels
console.log("\n--- Count Vowels ---");
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log("'JavaScript' has", countVowels("JavaScript"), "vowels");
console.log("'hello' has", countVowels("hello"), "vowels");

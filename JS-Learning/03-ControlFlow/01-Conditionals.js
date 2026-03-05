// ========================================
// CONDITIONAL STATEMENTS
// ========================================

// 1. If Else
console.log("--- If Else Example ---");
let marks = 85;

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A+");
} else if (marks >= 80 && marks < 90) {
    console.log("Grade: A");
} else if (marks >= 70 && marks < 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

// 2. Another Example
let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// 3. Nested If Else
let score = 75;

if (score >= 50) {
    if (score >= 80) {
        console.log("Excellent!");
    } else {
        console.log("Good");
    }
} else {
    console.log("Need to improve");
}

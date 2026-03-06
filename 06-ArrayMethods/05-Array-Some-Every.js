// ========================================
// ARRAY METHODS - SOME & EVERY
// ========================================

// 1. Some Method - At Least One Match
console.log("--- Some Method ---");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let hasEven = numbers.some((num) => {
    return num % 2 === 0;
});

console.log("Numbers:", numbers);
console.log("Has even numbers:", hasEven);  // true

// 2. Some - Check for Condition
console.log("\n--- Some (Check Condition) ---");
let scores = [45, 52, 38, 41];
let hasPass = scores.some(score => score >= 50);
console.log("Scores:", scores);
console.log("Has pass (>= 50):", hasPass);  // true

// 3. Some - No Match
console.log("\n--- Some (No Match) ---");
let nums = [2, 4, 6, 8, 10];
let hasOdd = nums.some(num => num % 2 !== 0);
console.log("Even numbers:", nums);
console.log("Has odd:", hasOdd);  // false

// 4. Some - Objects
console.log("\n--- Some (Objects) ---");
let students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 45 },
    { name: "Charlie", marks: 78 },
    { name: "Diana", marks: 92 }
];

let hasFailure = students.some(student => student.marks < 50);
console.log("Has failing student:", hasFailure);  // true

// 5. Every Method - All Match
console.log("\n--- Every Method ---");
let values = [2, 4, 6, 8, 10];

let allEven = values.every((num) => {
    return num % 2 === 0;
});

console.log("Numbers:", values);
console.log("All even:", allEven);  // true

// 6. Every - Check All Pass
console.log("\n--- Every (Check All Pass) ---");
let marks = [80, 90, 85, 95];
let allPass = marks.every(mark => mark >= 50);
console.log("Marks:", marks);
console.log("All >= 50:", allPass);  // true

// 7. Every - Not All Match
console.log("\n--- Every (Not All Match) ---");
let ages = [25, 32, 19, 28, 17];
let allAdult = ages.every(age => age >= 18);
console.log("Ages:", ages);
console.log("All adults (>= 18):", allAdult);  // false

// 8. Every - Objects
console.log("\n--- Every (Objects) ---");
let employees = [
    { name: "John", salary: 50000 },
    { name: "Alice", salary: 60000 },
    { name: "Bob", salary: 55000 }
];

let allAbove40k = employees.every(emp => emp.salary >= 40000);
console.log("All salaries >= 40000:", allAbove40k);  // true

// 9. Some vs Every
console.log("\n--- Some vs Every ---");
let data = [10, 20, 30, 40];

let someGreater15 = data.some(n => n > 15);   // true (some are > 15)
let everyGreater15 = data.every(n => n > 15); // true (all are > 15)

console.log("Data:", data);
console.log("Some > 15:", someGreater15);
console.log("Every > 15:", everyGreater15);

// 10. Practical Example
console.log("\n--- Practical: Validate Form ---");
let formInputs = [
    { field: "email", value: "user@example.com", valid: true },
    { field: "password", value: "pass123", valid: true },
    { field: "username", value: "john", valid: true }
];

let formValid = formInputs.every(input => input.valid === true);
console.log("Form valid:", formValid);  // true

let hasValidEmail = formInputs.some(input => input.field === "email" && input.valid);
console.log("Has valid email:", hasValidEmail);  // true

// ========================================
// HIGHER ORDER FUNCTIONS - forEach
// ========================================

// 1. forEach Method
console.log("--- forEach Method ---");
let cities = ["Pune", "Mumbai", "Delhi", "Bangalore"];

cities.forEach((city) => {
    console.log(city);
});

// 2. forEach with Index and Array
console.log("\n--- forEach with Index ---");
cities.forEach((city, index) => {
    console.log(`${index}: ${city}`);
});

// 3. forEach with Array Parameter
console.log("\n--- forEach with Array Parameter ---");
cities.forEach((city, index, arr) => {
    console.log(`${index + 1}/${arr.length}: ${city}`);
});

// 4. forEach - Square Numbers
console.log("\n--- Square Numbers ---");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((num) => {
    console.log(`${num}² = ${num * num}`);
});

// 5. forEach - Modify Array (Note: forEach doesn't return new array)
console.log("\n--- forEach with Object ---");
let students = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 92 },
    { name: "Bob", marks: 78 }
];

students.forEach((student) => {
    console.log(`${student.name}: ${student.marks}`);
});

// 6. forEach - Conditional Processing
console.log("\n--- forEach with Conditions ---");
let scores = [45, 67, 89, 34, 90, 56, 78];

scores.forEach((score) => {
    if (score >= 70) {
        console.log(`${score}: PASS`);
    } else {
        console.log(`${score}: FAIL`);
    }
});

// 7. forEach - Building a String
console.log("\n--- Building String ---");
let words = ["JavaScript", "is", "awesome"];
let sentence = "";

words.forEach((word) => {
    sentence += word + " ";
});

console.log(sentence);

// 8. forEach - Callback Function Reference
console.log("\n--- Callback Function Reference ---");
function printDoubled(num) {
    console.log(num * 2);
}

let values = [1, 2, 3, 4, 5];
values.forEach(printDoubled);

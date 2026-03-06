// ========================================
// ARRAYS - BASICS
// ========================================

// 1. Array Creation
console.log("--- Array Basics ---");
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log("Length:", numbers.length);
console.log("First element:", numbers[0]);
console.log("Last element:", numbers[numbers.length - 1]);

// 2. Mixed Array
console.log("\n--- Mixed Array ---");
let mixed = [1, "hello", true, 3.14, null];
console.log(mixed);

// 3. String Array
console.log("\n--- String Array ---");
let fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits);
console.log("Fruit at index 2:", fruits[2]);

// 4. Array Iteration
console.log("\n--- Array Iteration ---");
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("\nUsing for-of loop:");
for (let fruit of fruits) {
    console.log(fruit.toUpperCase());
}

// 5. Array in Array (2D Array)
console.log("\n--- 2D Array ---");
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
console.log("Element at [1][2]:", matrix[1][2]);

// 6. Array of Objects
console.log("\n--- Array of Objects ---");
let students = [
    { name: "John", age: 20, marks: 85 },
    { name: "Alice", age: 21, marks: 90 },
    { name: "Bob", age: 20, marks: 78 }
];

console.log(students);
console.log("First student:", students[0]);
console.log("First student's name:", students[0].name);

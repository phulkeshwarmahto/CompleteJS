// ========================================
// ARRAY METHODS - FIND & FINDINDEX
// ========================================

// 1. Find Method
console.log("--- Find Method ---");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let found = numbers.find((num) => {
    return num > 5;
});

console.log("Numbers:", numbers);
console.log("First number > 5:", found);

// 2. Find - Not Found
console.log("\n--- Find (Not Found) ---");
let notFound = numbers.find(num => num > 100);
console.log("First number > 100:", notFound);  // undefined

// 3. Find - Objects
console.log("\n--- Find (Objects) ---");
let students = [
    { id: 1, name: "Alice", marks: 85 },
    { id: 2, name: "Bob", marks: 72 },
    { id: 3, name: "Charlie", marks: 92 },
    { id: 4, name: "Diana", marks: 65 }
];

let topStudent = students.find(student => student.marks > 90);
console.log("Top student:", topStudent);

// 4. Find - Strings
console.log("\n--- Find (Strings) ---");
let words = ["javascript", "python", "java", "ruby"];
let foundWord = words.find(word => word.length > 5);
console.log("First word with length > 5:", foundWord);

// 5. FindIndex Method
console.log("\n--- FindIndex Method ---");
let nums = [10, 20, 30, 40, 50];

let index = nums.findIndex((num) => {
    return num > 25;
});

console.log("Numbers:", nums);
console.log("Index of first number > 25:", index);  // 2

// 6. FindIndex - Not Found
console.log("\n--- FindIndex (Not Found) ---");
let notFoundIndex = nums.findIndex(num => num > 100);
console.log("Index of first number > 100:", notFoundIndex);  // -1

// 7. FindIndex with Objects
console.log("\n--- FindIndex (Objects) ---");
let employees = [
    { id: 101, name: "John", salary: 50000 },
    { id: 102, name: "Alice", salary: 60000 },
    { id: 103, name: "Bob", salary: 55000 }
];

let indexOfBob = employees.findIndex(emp => emp.name === "Bob");
console.log("Index of Bob:", indexOfBob);
console.log("Bob's details:", employees[indexOfBob]);

// 8. Find vs FindIndex
console.log("\n--- Find vs FindIndex ---");
let data = [2, 4, 6, 8, 10];

let firstEven = data.find(num => num % 2 === 0);
let firstEvenIndex = data.findIndex(num => num % 2 === 0);

console.log("Data:", data);
console.log("First even (find):", firstEven);
console.log("Index of first even (findIndex):", firstEvenIndex);

// 9. Practical Example - Find User
console.log("\n--- Practical Example ---");
let users = [
    { userId: 1, username: "john_doe" },
    { userId: 2, username: "alice_smith" },
    { userId: 3, username: "bob_wilson" }
];

let searchUsername = "alice_smith";
let user = users.find(u => u.username === searchUsername);

if (user) {
    console.log(`User found: ${user.username} (ID: ${user.userId})`);
} else {
    console.log("User not found");
}

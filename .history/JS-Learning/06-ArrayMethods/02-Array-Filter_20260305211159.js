// ========================================
// ARRAY METHOD - FILTER
// ========================================

// 1. Basic Filter
console.log("--- Basic Filter---");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
});

console.log("Original:", numbers);
console.log("Even numbers:", evenNumbers);

// 2. Filter - Greater Than
console.log("\n--- Filter (Greater Than) ---");
let greaterThanFive = numbers.filter(num => num > 5);
console.log("Numbers > 5:", greaterThanFive);

// 3. Filter - Odd Numbers
console.log("\n--- Filter (Odd Numbers) ---");
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

// 4. Filter - Strings
console.log("\n--- Filter (Strings) ---");
let words = ["JavaScript", "Python", "Java", "C++", "Ruby"];
let shortWords = words.filter(word => word.length < 5);
console.log("Words with length < 5:", shortWords);

// 5. Filter - Objects
console.log("\n--- Filter (Objects) ---");
let students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 65 },
    { name: "Charlie", marks: 92 },
    { name: "Diana", marks: 72 }
];

let topStudents = students.filter(student => student.marks >= 80);
console.log("Students with marks >= 80:");
console.log(topStudents);

// 6. Filter - Buy Affordable Items
console.log("\n--- Filter (Affordable Items) ---");
let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
    { name: "Monitor", price: 250 }
];

let budget = 400;
let affordable = products.filter(product => product.price <= budget);
console.log(`Items under $${budget}:`);
console.log(affordable);

// 7. Filter - Unique Elements
console.log("\n--- Filter (Remove Duplicates) ---");
let nums = [1, 2, 2, 3, 4, 4, 5, 5, 6];
let unique = nums.filter((num, index) => {
    return nums.indexOf(num) === index;
});
console.log("Original:", nums);
console.log("Unique:", unique);

// 8. Filter with Index
console.log("\n--- Filter (With Index) ---");
let items = ["a", "b", "c", "d", "e"];
let filtered = items.filter((item, index) => index % 2 === 0);
console.log("Every other element:", filtered);

// 9. Filter - Chaining
console.log("\n--- Filter Chaining ---");
let nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = nums2
    .filter(n => n > 3)                    // [4, 5, 6, 7, 8, 9, 10]
    .filter(n => n < 9)                    // [4, 5, 6, 7, 8]
    .filter(n => n % 2 === 0);             // [4, 6, 8]
console.log(result);

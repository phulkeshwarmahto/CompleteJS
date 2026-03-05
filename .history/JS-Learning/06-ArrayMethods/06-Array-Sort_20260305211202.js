// ========================================
// ARRAY METHOD - SORT
// ========================================

// 1. Sort Numbers Ascending
console.log("--- Sort Ascending ---");
let numbers = [5, 3, 8, 1, 2, 9, 4];

let sortedAsc = [...numbers].sort((a, b) => a - b);
console.log("Original:", numbers);
console.log("Sorted ascending:", sortedAsc);

// 2. Sort Numbers Descending
console.log("\n--- Sort Descending ---");
let sortedDesc = [...numbers].sort((a, b) => b - a);
console.log("Sorted descending:", sortedDesc);

// 3. Sort Strings
console.log("\n--- Sort Strings ---");
let words = ["zebra", "apple", "mango", "banana"];

let sortedWords = [...words].sort();
console.log("Original:", words);
console.log("Sorted:", sortedWords);

// 4. Sort Strings Reverse
console.log("\n--- Sort Strings Reverse ---");
let sortedWordsReverse = [...words].sort().reverse();
console.log("Sorted reverse:", sortedWordsReverse);

// 5. Sort Objects by Property
console.log("\n--- Sort Objects (By Property) ---");
let students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 65 },
    { name: "Charlie", marks: 95 },
    { name: "Diana", marks: 72 }
];

let sortedByMarks = [...students].sort((a, b) => b.marks - a.marks);
console.log("Sorted by marks (descending):");
console.log(sortedByMarks);

// 6. Sort Objects by String Property
console.log("\n--- Sort Objects (By String) ---");
let sortedByName = [...students].sort((a, b) => {
    return a.name.localeCompare(b.name);
});
console.log("Sorted by name:");
console.log(sortedByName);

// 7. Sort Decimals
console.log("\n--- Sort Decimals ---");
let decimals = [3.14, 2.71, 1.41, 1.73, 2.23];
let sortedDecimals = [...decimals].sort((a, b) => a - b);
console.log("Original:", decimals);
console.log("Sorted:", sortedDecimals);

// 8. Sort with Custom Logic
console.log("\n--- Custom Sort Logic ---");
let items = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 0.8 },
    { name: "Orange", price: 1.2 },
    { name: "Mango", price: 2.0 }
];

let sortedByPrice = [...items].sort((a, b) => a.price - b.price);
console.log("Sorted by price (ascending):");
console.log(sortedByPrice);

// 9. Important: Sort Mutates Original
console.log("\n--- Sort Mutates Original ---");
let arr = [3, 1, 4, 1, 5];
console.log("Before sort:", arr);
arr.sort((a, b) => a - b);
console.log("After sort (array mutated):", arr);

// Solution: Use Spread Operator
let original = [3, 1, 4, 1, 5];
let sorted = [...original].sort((a, b) => a - b);
console.log("Original (unchanged):", original);
console.log("Sorted copy:", sorted);

// 10. Stable Sort
console.log("\n--- Stable Sort ---");
let numbersWithDups = [3, 1, 4, 1, 5, 9];
let stableSorted = [...numbersWithDups].sort((a, b) => a - b);
console.log("Original:", numbersWithDups);
console.log("Stable sorted:", stableSorted);

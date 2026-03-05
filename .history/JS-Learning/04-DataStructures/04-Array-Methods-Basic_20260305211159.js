// ========================================
// ARRAY METHODS - BASIC
// ========================================

// 1. Push - Add element to end
console.log("--- Push Method ---");
let fruits = ["apple", "banana", "orange"];
console.log("Original:", fruits);
fruits.push("mango");
console.log("After push:", fruits);

// 2. Pop - Remove element from end
console.log("\n--- Pop Method ---");
let removed = fruits.pop();
console.log("Removed:", removed);
console.log("After pop:", fruits);

// 3. Shift - Remove element from start
console.log("\n--- Shift Method ---");
let firstFruit = fruits.shift();
console.log("Removed:", firstFruit);
console.log("After shift:", fruits);

// 4. Unshift - Add element to start
console.log("\n--- Unshift Method ---");
fruits.unshift("strawberry");
console.log("After unshift:", fruits);

// 5. toString and Join
console.log("\n--- ToString and Join ---");
let numbers = [1, 2, 3, 4, 5];
console.log("toString():", numbers.toString());
console.log("join('-'):", numbers.join('-'));
console.log("join(' '):", numbers.join(' '));

// 6. Concat - Merge arrays
console.log("\n--- Concat Method ---");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let merged = arr1.concat(arr2, arr3);
console.log("Merged:", merged);
console.log("arr1 (unchanged):", arr1);

// 7. Slice - Extract portion of array
console.log("\n--- Slice Method ---");
let batch = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
console.log("Original:", batch);
console.log("slice(1, 3):", batch.slice(1, 3));
console.log("slice(2):", batch.slice(2));
console.log("Original (unchanged):", batch);

// 8. Splice - Remove and Insert
console.log("\n--- Splice Method ---");
let colors = ["red", "green", "blue", "yellow", "purple"];
console.log("Original:", colors);
let removed2 = colors.splice(2, 1, "orange", "pink");
console.log("Removed:", removed2);
console.log("After splice:", colors);

// Practice Example
console.log("\n--- Practice Example ---");
let companies = ["Google", "Microsoft", "Apple", "Amazon"];
console.log("Original:", companies);
console.log("pop():", companies.pop());
console.log("After pop:", companies);
companies.push("Tesla");
console.log("After push:", companies);
console.log("shift():", companies.shift());
console.log("After shift:", companies);
companies.unshift("IBM");
console.log("After unshift:", companies);

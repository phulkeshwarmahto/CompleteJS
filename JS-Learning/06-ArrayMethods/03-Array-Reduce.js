// ========================================
// ARRAY METHOD - REDUCE
// ========================================

// 1. Basic Reduce - Sum
console.log("--- Basic Reduce (Sum) ---");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log("Numbers:", numbers);
console.log("Sum:", sum);

// 2. Reduce with Initial Value
console.log("\n--- Reduce (With Initial Value) ---");
let nums = [1, 2, 3, 4, 5];
let product = nums.reduce((acc, val) => acc * val, 1);
console.log("Numbers:", nums);
console.log("Product:", product);

// 3. Reduce - Find Maximum
console.log("\n--- Reduce (Find Max) ---");
let values = [5, 2, 8, 1, 9, 3];
let max = values.reduce((acc, val) => {
    return val > acc ? val : acc;
});
console.log("Numbers:", values);
console.log("Maximum:", max);

// 4. Reduce - Find Minimum
console.log("\n--- Reduce (Find Min) ---");
let min = values.reduce((acc, val) => {
    return val < acc ? val : acc;
});
console.log("Minimum:", min);

// 5. Reduce - Count Elements
console.log("\n--- Reduce (Count Elements) ---");
let items = ["apple", "banana", "apple", "orange", "banana", "apple"];
let count = items.reduce((acc, item) => {
    // Simple counting
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});

console.log("Items:", items);
console.log("Count:", count);

// 6. Reduce - Average
console.log("\n--- Reduce (Average) ---");
let marks = [80, 90, 85, 95, 100];
let total = marks.reduce((sum, mark) => sum + mark, 0);
let average = total / marks.length;
console.log("Marks:", marks);
console.log("Average:", average);

// 7. Reduce - Flatten Array
console.log("\n--- Reduce (Flatten Array) ---");
let nested = [[1, 2], [3, 4], [5, 6]];
let flattened = nested.reduce((acc, arr) => {
    return acc.concat(arr);
}, []);
console.log("Nested:", nested);
console.log("Flattened:", flattened);

// 8. Reduce - Build Object from Array
console.log("\n--- Reduce (Build Object) ---");
let keysValues = ["name", "John", "age", "25", "city", "NYC"];
let obj = keysValues.reduce((acc, item, index) => {
    if (index % 2 === 0) {
        acc[item] = keysValues[index + 1];
    }
    return acc;
}, {});
console.log("Keys and Values:", keysValues);
console.log("Result Object:", obj);

// 9. Reduce - Sum with Condition
console.log("\n--- Reduce (Sum with Condition) ---");
let prices = [100, 250, 50, 300, 75];
let sumGreater100 = prices.reduce((total, price) => {
    return price > 100 ? total + price : total;
}, 0);
console.log("Prices:", prices);
console.log("Sum of prices > 100:", sumGreater100);

// ========================================
// ARRAY METHOD - MAP
// ========================================

// 1. Basic Map
console.log("--- Basic Map ---");
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map((num) => {
    return num * 2;
});

console.log("Original:", numbers);
console.log("Doubled:", doubled);

// 2. Map - Shorter Syntax
console.log("\n--- Map (Short Syntax) ---");
let tripled = numbers.map(num => num * 3);
console.log("Tripled:", tripled);

// 3. Map - Add Value to Each
console.log("\n--- Map (Add to each) ---");
let incremented = numbers.map(num => num + 10);
console.log("Incremented by 10:", incremented);

// 4. Map - String to Numbers
console.log("\n--- Map (String to Numbers) ---");
let stringNumbers = ["1", "2", "3", "4", "5"];
let converted = stringNumbers.map(num => parseInt(num));
console.log("String:", stringNumbers);
console.log("Numbers:", converted);

// 5. Map - Objects from Array
console.log("\n--- Map (Create Objects) ---");
let names = ["Alice", "Bob", "Charlie"];
let students = names.map((name) => {
    return {
        name: name,
        age: 20,
        grade: "A"
    };
});

console.log(students);

// 6. Map - Accessing Index
console.log("\n--- Map (With Index) ---");
let fruits = ["apple", "banana", "cherry"];

let indexed = fruits.map((fruit, index) => {
    return `${index}: ${fruit}`;
});

console.log(indexed);

// 7. Map - Chain with Other Methods
console.log("\n--- Map Chaining ---");
let nums = [1, 2, 3, 4, 5];
let result = nums
    .map(num => num * 2)     // [2, 4, 6, 8, 10]
    .map(num => num + 5);    // [7, 9, 11, 13, 15]

console.log("Original:", nums);
console.log("After chaining:", result);

// 8. Map - Transform Data
console.log("\n--- Transform Data ---");
let prices = [100, 200, 300, 150];
let discounted = prices.map(price => {
    let discount = price * 0.1; // 10% discount
    return price - discount;
});

console.log("Original prices:", prices);
console.log("Discounted prices:", discounted);

// 9. Map - Uppercase Strings
console.log("\n--- Uppercase Strings ---");
let cities = ["new york", "london", "paris", "tokyo"];
let capitalized = cities.map(city => city.toUpperCase());

console.log("Original:", cities);
console.log("Uppercase:", capitalized);

// ========================================
// ARROW FUNCTIONS
// ========================================

// 1. Basic Arrow Function
console.log("--- Basic Arrow Function ---");
const greet = () => {
    console.log("Hello from arrow function!");
};
greet();

// 2. Arrow Function with Parameters
console.log("\n--- Arrow with Parameters ---");
const add = (a, b) => {
    return a + b;
};
console.log("Add:", add(5, 10));

// 3. Arrow Function - Implicit Return
console.log("\n--- Implicit Return ---");
const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(4, 7));

// 4. Arrow Function - Single Parameter (Parentheses Optional)
console.log("\n--- Single Parameter ---");
const square = x => x * x;
console.log("Square of 5:", square(5));

// 5. Arrow Function - No Parameters
console.log("\n--- No Parameters ---");
const sayHello = () => "Hello!";
console.log(sayHello());

// 6. Arrow Function - Count Characters
console.log("\n--- Count Characters ---");
const countVowels = (str) => {
    let count = 0;
    for (const char of str) {
        if ("aeiouAEIOU".includes(char)) {
            count++;
        }
    }
    return count;
};

console.log("Vowels in 'JavaScript':", countVowels("JavaScript"));

// 7. Arrow Function vs Regular Function
console.log("\n--- Comparison ---");
// Regular function
function regularAdd(a, b) {
    return a + b;
}

// Arrow function
const arrowAdd = (a, b) => a + b;

console.log("Regular function:", regularAdd(3, 5));
console.log("Arrow function:", arrowAdd(3, 5));

// 8. Arrow Function with Array Operations
console.log("\n--- Arrow with Arrays ---");
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Original:", numbers);
console.log("Doubled:", doubled);

const evens = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);

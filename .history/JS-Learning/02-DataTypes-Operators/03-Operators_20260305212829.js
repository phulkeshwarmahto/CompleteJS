// ========================================
// OPERATORS IN JAVASCRIPT
// ========================================

// 1. Arithmetic Operators
let a = 5;
let b = 10;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", b / a);
console.log("Modulus:", b % a);
console.log("Exponentiation:", a ** b); // it a^b

// 2. Increment and Decrement
let num = 12;
console.log("num++:", num++);
console.log("After increment:", num);
console.log("num--:", num--);
console.log("After decrement:", num);

// 3. Comparison Operators
console.log("\n--- Comparison Operators ---");
let x = 5;
let y = "5";

console.log("x == y:", x == y);    // true (loose equality)
console.log("x === y:", x === y);  // false (strict equality)
console.log("x != y:", x != y);    // false
console.log("x !== y:", x !== y);  // true

// 4. Logical Operators
console.log("\n--- Logical Operators ---");
let condition1 = true;
let condition2 = false;

console.log("AND (&&):", condition1 && condition2);
console.log("OR (||):", condition1 || condition2);
console.log("NOT (!):", !condition1);

// 5. Ternary Operator
console.log("\n--- Ternary Operator ---");
let age = 23;
let status = age > 18 ? "adult" : "not adult";
console.log(`Age ${age}: ${status}`);

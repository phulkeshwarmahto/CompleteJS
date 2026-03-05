// ========================================
// DATA TYPES IN JAVASCRIPT
// ========================================

// 1. Primitive Data Types
let stringValue = "Hello";
let numberValue = 42;
let booleanValue = true;
let nullValue = null;
let undefinedValue = undefined;

console.log(typeof stringValue);    // "string"
console.log(typeof numberValue);    // "number"
console.log(typeof booleanValue);   // "boolean"
console.log(typeof nullValue);      // "object" (quirk in JavaScript)
console.log(typeof undefinedValue); // "undefined"

// 2. Special Data Types
let largeNumber = BigInt("123456789");
let uniqueSymbol = Symbol("hello");

console.log(largeNumber);
console.log(uniqueSymbol);

// 3. Objects (Reference Type)
let student = {
    name: "Phulkeshwar",
    age: 20,
    marks: 95,
    rollNo: 430
};

console.log(student);
console.log(typeof student);  // "object"

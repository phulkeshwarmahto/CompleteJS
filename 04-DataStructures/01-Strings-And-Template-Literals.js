// ========================================
// STRINGS AND TEMPLATE LITERALS
// ========================================

// 1. String Basics
console.log("--- String Basics ---");
let name = "Phulkeshwar Mahto";
console.log(name);
console.log(`Length: ${name.length}`);
console.log(`Character at index 2: ${name[2]}`);

// 2. String Methods
console.log("\n--- String Methods ---");
let text = "   JavaScript is Awesome   ";

console.log("Original:", `"${text}"`);
console.log("toLowerCase():", text.toLowerCase());
console.log("toUpperCase():", text.toUpperCase());
console.log("trim():", `"${text.trim()}"`);
console.log("slice(3, 13):", text.slice(3, 13));
console.log("charAt(4):", text.charAt(4));

// 3. String Concatenation
console.log("\n--- Concatenation ---");
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);

// 4. Template Literals
console.log("\n--- Template Literals ---");
let age = 25;
let city = "New York";

let message = `My name is ${firstName} ${lastName}, I am ${age} years old, and I live in ${city}`;
console.log(message);

// 5. String Replace
console.log("\n--- String Replace ---");
let original = "I like apples";
let replaced = original.replace("apples", "oranges");
console.log(original);
console.log(replaced);

// 6. String Searching
console.log("\n--- String Searching ---");
let sentence = "JavaScript is fun and powerful";
console.log("indexOf('fun'):", sentence.indexOf("fun"));
console.log("includes('powerful'):", sentence.includes("powerful"));
console.log("startsWith('Java'):", sentence.startsWith("Java"));
console.log("endsWith('powerful'):", sentence.endsWith("powerful"));

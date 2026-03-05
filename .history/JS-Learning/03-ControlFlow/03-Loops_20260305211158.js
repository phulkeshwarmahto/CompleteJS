// ========================================
// LOOPS IN JAVASCRIPT
// ========================================

// 1. For Loop
console.log("--- For Loop ---");
for (let i = 1; i <= 5; i++) {
    console.log(`i = ${i}`);
}

// 2. For Loop - Calculate Sum
console.log("\n--- Sum of Numbers 1-10 ---");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`Sum: ${sum}`);

// 3. For Loop - Calculate Factorial
console.log("\n--- Factorial of 5 ---");
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(`Factorial of ${n}: ${factorial}`);

// 4. While Loop
console.log("\n--- While Loop ---");
let i = 1;
while (i <= 5) {
    console.log(`While - i = ${i}`);
    i++;
}

// 5. Do-While Loop
console.log("\n--- Do-While Loop ---");
let j = 1;
do {
    console.log(`Do-While - j = ${j}`);
    j++;
} while (j <= 5);

// 6. For Of Loop (Strings)
console.log("\n--- For Of Loop (String Iteration) ---");
let str = "JavaScript";
let size = 0;
for (let char of str) {
    console.log(char);
    size++;
}
console.log(`String length: ${size}`);

// 7. For In Loop (Objects)
console.log("\n--- For In Loop (Object Iteration) ---");
let student = {
    name: "John",
    age: 20,
    rollNo: 5
};

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

// 8. For In Loop (Arrays)
console.log("\n--- For In Loop (Array Iteration) ---");
let fruits = ["apple", "banana", "orange"];
for (let index in fruits) {
    console.log(`${index}: ${fruits[index]}`);
}

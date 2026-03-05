// ========================================
// DOM - CLASSES & DYNAMIC BEHAVIOR
// ========================================

// 1. Adding a Class
console.log("--- Adding Class ---");
let element = document.getElementById("myElement");
if (element) {
    element.classList.add("active");
    console.log("Class added");
}

// 2. Removing a Class
console.log("\n--- Removing Class ---");
if (element) {
    element.classList.remove("active");
    console.log("Class removed");
}

// 3. Toggling a Class
console.log("\n--- Toggling Class ---");
if (element) {
    element.classList.toggle("active");
    console.log("Class toggled");
}

// 4. Add Multiple Classes
console.log("\n--- Adding Multiple Classes ---");
if (element) {
    element.classList.add("highlight", "important", "primary");
    console.log("Multiple classes added");
}

// 5. Checking if Element has Class
console.log("\n--- Checking Class ---");
if (element) {
    console.log("Has active:", element.classList.contains("active"));
    console.log("Has highlight:", element.classList.contains("highlight"));
}

// 6. Getting All Classes
console.log("\n--- All Classes ---");
if (element) {
    console.log("Classes:", Array.from(element.classList));
}

// 7. Replace Class
console.log("\n--- Replace Class ---");
if (element) {
    element.classList.replace("highlight", "emphasized");
    console.log("Class replaced");
}

// 8. Conditional Class Addition
console.log("\n--- Conditional Class ---");
let isValid = true;
if (element) {
    if (isValid) {
        element.classList.add("valid");
    } else {
        element.classList.add("invalid");
    }
}

// 9. Dark Mode Toggle Example
console.log("\n--- Dark Mode Example ---");
let body = document.body;
let isDarkMode = false;

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        body.classList.add("dark-mode");
        console.log("Dark mode ON");
    } else {
        body.classList.remove("dark-mode");
        console.log("Dark mode OFF");
    }
}

// 10. Class List Iteration
console.log("\n--- Iterate Classes ---");
if (element) {
    element.classList.forEach((className) => {
        console.log(`Class: ${className}`);
    });
}

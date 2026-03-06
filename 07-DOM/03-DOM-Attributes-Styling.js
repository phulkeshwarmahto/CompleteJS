// ========================================
// DOM - ATTRIBUTES & STYLING
// ========================================

// 1. Getting Attributes
console.log("--- Getting Attributes ---");
let link = document.querySelector("a");
if (link) {
    console.log("href:", link.getAttribute("href"));
    console.log("title:", link.getAttribute("title"));
}

// 2. Setting Attributes
console.log("\n--- Setting Attributes ---");
if (link) {
    link.setAttribute("href", "https://www.google.com");
    link.setAttribute("target", "_blank");
}

// 3. Removing Attributes
console.log("\n--- Removing Attributes ---");
if (link) {
    link.removeAttribute("title");
}

// 4. Checking if Attribute Exists
console.log("\n--- Checking Attributes ---");
if (link) {
    console.log("Has href:", link.hasAttribute("href"));
    console.log("Has onclick:", link.hasAttribute("onclick"));
}

// 5. Changing Styles (Inline)
console.log("\n--- Inline Styles ---");
let box = document.getElementById("myBox");
if (box) {
    box.style.backgroundColor = "red";
    box.style.padding = "20px";
    box.style.borderRadius = "5px";
    box.style.fontSize = "18px";
}

// 6. Multiple Style Changes
console.log("\n--- Multiple Styles ---");
if (box) {
    box.style.cssText = "background-color: blue; color: white; padding: 10px;";
}

// 7. Getting Computed Styles
console.log("\n--- Computed Styles ---");
if (box) {
    let computedStyle = window.getComputedStyle(box);
    console.log("Background color:", computedStyle.backgroundColor);
    console.log("Font size:", computedStyle.fontSize);
    console.log("Display:", computedStyle.display);
}

// 8. Data Attributes
console.log("\n--- Data Attributes ---");
let element = document.querySelector("[data-user-id]");
if (element) {
    console.log("User ID:", element.getAttribute("data-user-id"));
    console.log("User ID (via dataset):", element.dataset.userId);
}

// 9. Setting Data Attributes
console.log("\n--- Setting Data Attributes ---");
if (element) {
    element.setAttribute("data-user-name", "John Doe");
    element.dataset.userEmail = "john@example.com";
}

// 10. Class Manipulation using style
console.log("\n--- Class-based Styling ---");
let paragraph = document.querySelector("p");
if (paragraph) {
    // Creating a temporary style
    paragraph.style.color = "green";
    paragraph.style.textDecoration = "underline";
}

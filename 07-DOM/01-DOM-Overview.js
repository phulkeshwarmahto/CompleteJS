// ========================================
// DOM - OVERVIEW & ACCESSING ELEMENTS
// ========================================

// 1. What is DOM?
// DOM (Document Object Model) is a representation of the HTML document as a tree of objects
// It allows JavaScript to interact with and modify HTML elements

// 2. Accessing Elements by ID
console.log("--- Accessing by ID ---");
let heading = document.getElementById("myHeading");
console.log(heading);

// 3. Accessing Elements by Class Name
console.log("\n--- Accessing by Class ---");
let paragraphs = document.getElementsByClassName("my-paragraph");
console.log(paragraphs);

// 4. Accessing Elements by Tag Name
console.log("\n--- Accessing by Tag ---");
let allDivs = document.getElementsByTagName("div");
console.log("Total divs:", allDivs.length);

// 5. Using querySelector (Modern Way)
console.log("\n--- Using querySelector ---");
let firstParagraph = document.querySelector(".my-paragraph");
console.log(firstParagraph);

// 6. Using querySelectorAll
console.log("\n--- Using querySelectorAll ---");
let allParagraphs = document.querySelectorAll("p");
console.log("Total paragraphs:", allParagraphs.length);

// 7. Complex Selectors
console.log("\n--- Complex Selectors ---");
let complexSelect = document.querySelector("div.container p.special");
console.log(complexSelect);

// 8. Accessing Body and Document
console.log("\n--- Document Structure ---");
console.log("Document:", document);
console.log("Body:", document.body);
console.log("Title:", document.title);

// 9. Navigation: Parent, Child, Sibling
console.log("\n--- DOM Navigation ---");
let element = document.getElementById("myElement");
if (element) {
    console.log("Element:", element);
    console.log("Parent:", element.parentElement);
    console.log("Children:", element.children);
    console.log("Next Sibling:", element.nextElementSibling);
    console.log("Previous Sibling:", element.previousElementSibling);
}

// 10. Accessing Text Content
console.log("\n--- Text Content ---");
let header = document.querySelector("h1");
if (header) {
    console.log("Text Content:", header.textContent);
    console.log("Inner HTML:", header.innerHTML);
}

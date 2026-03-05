// ========================================
// EVENTS - addEventListener & BEST PRACTICES
// ========================================

// 1. addEventListener - Basic Usage
console.log("--- addEventListener ---");
let button1 = document.getElementById("button1");
if (button1) {
    button1.addEventListener("click", () => {
        console.log("Button clicked with addEventListener");
        alert("Hello!");
    });
}

// 2. addEventListener - Multiple Listeners
console.log("\n--- Multiple Listeners ---");
let button2 = document.getElementById("button2");
if (button2) {
    button2.addEventListener("click", () => {
        console.log("First listener");
    });

    button2.addEventListener("click", () => {
        console.log("Second listener");
    });

    button2.addEventListener("click", () => {
        console.log("Third listener");
    });
}

// 3. addEventListener - With Options
console.log("\n--- addEventListener with Options ---");
let button3 = document.getElementById("button3");
if (button3) {
    button3.addEventListener("click", () => {
        console.log("This listener runs only once");
    }, { once: true });
}

// 4. addEventListener - Capture Phase
console.log("\n--- Capture Phase ---");
let parent = document.getElementById("parent");
let child = document.getElementById("child");

if (parent) {
    parent.addEventListener("click", () => {
        console.log("Parent captured");
    }, true);  // true = capture phase
}

if (child) {
    child.addEventListener("click", () => {
        console.log("Child captured");
    }, true);
}

// 5. addEventListener - Bubble Phase (Default)
console.log("\n--- Bubble Phase (Default) ---");
if (parent && child) {
    parent.addEventListener("click", () => {
        console.log("Parent bubbled");
    });

    child.addEventListener("click", () => {
        console.log("Child bubbled");
    });
}

// 6. Event Delegation
console.log("\n--- Event Delegation ---");
let list = document.getElementById("myList");
if (list) {
    list.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            console.log("List item clicked:", event.target.textContent);
            event.target.style.backgroundColor = "lightblue";
        }
    });
}

// 7. Named Function as Handler
console.log("\n--- Named Function Handler ---");
function handleButtonClick() {
    console.log("Named function handler");
}

let button4 = document.getElementById("button4");
if (button4) {
    button4.addEventListener("click", handleButtonClick);
}

// 8. Removing Event Listener
console.log("\n--- Remove Event Listener ---");
function tempHandler() {
    console.log("This will be removed");
}

let button5 = document.getElementById("button5");
if (button5) {
    button5.addEventListener("click", tempHandler);
    // Later, to remove:
    // button5.removeEventListener("click", tempHandler);
}

// 9. Event Listener with Parameters
console.log("\n--- Handler with Parameters ---");
let button6 = document.getElementById("button6");
if (button6) {
    button6.addEventListener("click", () => {
        handleWithParams("Hello", 123);
    });
}

function handleWithParams(message, number) {
    console.log(message, number);
}

// 10. Passive Event Listeners (for performance)
console.log("\n--- Passive Event Listener ---");
let scrollContainer = document.querySelector(".scrollable");
if (scrollContainer) {
    scrollContainer.addEventListener("scroll", () => {
        console.log("Scrolling...");
    }, { passive: true });
}

// 11. Using this in Event Handler
console.log("\n--- Using 'this' ---");
let links = document.querySelectorAll("a");
if (links.length > 0) {
    links.forEach((link) => {
        link.addEventListener("click", function(event) {
            console.log("Clicked:", this.textContent);
        });
    });
}

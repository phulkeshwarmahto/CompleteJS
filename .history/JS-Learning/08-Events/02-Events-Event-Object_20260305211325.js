// ========================================
// EVENTS - EVENT OBJECT & DETAILS
// ========================================

// 1. Event Object Details
console.log("--- Event Object ---");
let button = document.getElementById("myButton");
if (button) {
    button.onclick = (event) => {
        console.log("Event object:", event);
        console.log("Event type:", event.type);
        console.log("Target:", event.target);
        console.log("Client X:", event.clientX);
        console.log("Client Y:", event.clientY);
    };
}

// 2. Mouse Position Events
console.log("\n--- Mouse Position ---");
let div = document.getElementById("myDiv");
if (div) {
    div.onmousemove = (event) => {
        console.log(`Mouse at (${event.clientX}, ${event.clientY})`);
        console.log(`Offset from element (${event.offsetX}, ${event.offsetY})`);
    };
}

// 3. Key Information
console.log("\n--- Key Information ---");
let input = document.querySelector("input");
if (input) {
    input.onkeydown = (event) => {
        console.log("Key:", event.key);
        console.log("Code:", event.code);
        console.log("Is uppercase:", event.shiftKey);
        console.log("Is ctrl:", event.ctrlKey);
        console.log("Is alt:", event.altKey);
    };
}

// 4. Event Target
console.log("\n--- Event Target ---");
let container = document.getElementById("container");
if (container) {
    container.onclick = (event) => {
        console.log("Clicked element tag:", event.target.tagName);
        console.log("Clicked element:", event.target);
        console.log("Element ID:", event.target.id);
        console.log("Element class:", event.target.className);
    };
}

// 5. Current Target vs Target
console.log("\n--- Current Target ---");
if (container) {
    container.onclick = (event) => {
        console.log("Target (what was clicked):", event.target);
        console.log("Current target (handler):", event.currentTarget);
    };
}

// 6. Prevent Default Behavior
console.log("\n--- Prevent Default ---");
let form = document.querySelector("form");
if (form) {
    form.onsubmit = (event) => {
        event.preventDefault();
        console.log("Default form submission prevented");
    };
}

// 7. Stop Propagation
console.log("\n--- Stop Propagation ---");
let parent = document.getElementById("parent");
let child = document.getElementById("child");

if (parent) {
    parent.onclick = () => {
        console.log("Parent clicked");
    };
}

if (child) {
    child.onclick = (event) => {
        event.stopPropagation();
        console.log("Child clicked (propagation stopped)");
    };
}

// 8. Stop Immediate Propagation
console.log("\n--- Stop Immediate Propagation ---");
if (button) {
    button.onclick = (event) => {
        console.log("Handler 1");
        event.stopImmediatePropagation();
    };
}

// 9. Check Button Pressed
console.log("\n--- Mouse Button Check ---");
if (div) {
    div.onmousedown = (event) => {
        if (event.button === 0) console.log("Left click");
        if (event.button === 1) console.log("Middle click");
        if (event.button === 2) console.log("Right click");
    };
}

// 10. Entry Information
console.log("\n--- Event Details ---");
if (input) {
    input.onchange = (event) => {
        console.log("Previous value:", event.data);
        console.log("Current value:", event.target.value);
    };
}

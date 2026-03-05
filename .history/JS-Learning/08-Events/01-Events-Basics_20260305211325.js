// ========================================
// EVENTS - BASICS
// ========================================

// 1. Click Event - Inline (onclick property)
console.log("--- Click Event ---");
let button1 = document.getElementById("button1");
if (button1) {
    button1.onclick = () => {
        console.log("Button 1 clicked!");
        alert("Button 1 was clicked!");
    };
}

// 2. Mouseover Event
console.log("\n--- Mouseover Event ---");
let div1 = document.getElementById("div1");
if (div1) {
    div1.onmouseover = () => {
        console.log("Mouse over div");
        div1.style.backgroundColor = "yellow";
    };

    div1.onmouseout = () => {
        console.log("Mouse left div");
        div1.style.backgroundColor = "white";
    };
}

// 3. Focus and Blur Events
console.log("\n--- Focus and Blur ---");
let input = document.querySelector("input[type='text']");
if (input) {
    input.onfocus = () => {
        console.log("Input focused");
        input.style.borderColor = "blue";
    };

    input.onblur = () => {
        console.log("Input blurred");
        input.style.borderColor = "gray";
    };
}

// 4. Change Event
console.log("\n--- Change Event ---");
let select = document.querySelector("select");
if (select) {
    select.onchange = () => {
        console.log("Value changed to:", select.value);
    };
}

// 5. Keydown Event
console.log("\n--- Keydown Event ---");
if (input) {
    input.onkeydown = (event) => {
        console.log("Key pressed:", event.key);
    };
}

// 6. Keyup Event
console.log("\n--- Keyup Event ---");
if (input) {
    input.onkeyup = (event) => {
        console.log("Key released:", event.key);
    };
}

// 7. Submit Event
console.log("\n--- Submit Event ---");
let form = document.querySelector("form");
if (form) {
    form.onsubmit = (event) => {
        event.preventDefault();  // Prevent default form submission
        console.log("Form submitted!");
    };
}

// 8. Double Click Event
console.log("\n--- Double Click ---");
if (button1) {
    button1.ondblclick = () => {
        console.log("Button double clicked!");
    };
}

// 9. Mouse Events - Multiple
console.log("\n--- Multiple Mouse Events ---");
if (div1) {
    div1.onmousedown = () => console.log("Mouse down");
    div1.onmouseup = () => console.log("Mouse up");
}

// 10. Preventing Default Behavior
console.log("\n--- Prevent Default ---");
let link = document.querySelector("a");
if (link) {
    link.onclick = (event) => {
        event.preventDefault();
        console.log("Link click prevented!");
    };
}

// Event Object - Properties of event parameter

// let btn1 = document.querySelector("#button1");
// btn1.onclick = (e) => {
//    console.log(e); // The entire event object
//    console.log(e.type); // The type of event (e.g., "click")
//    console.log(e.target); // The element that triggered the event
//    console.log(e.clientX, e.clientY); // The coordinates of the mouse relative to the viewport
//    console.log(e.offsetX, e.offsetY); // The coordinates of the mouse relative to the target element
//    console.log("you clicked this button");
// }; 

// let div = document.querySelector("#div1");
// div.onmouseover = (e) => {
//    console.log(e); // The entire event object
//    console.log(e.type); // The type of event (e.g., "mouseover")
//    console.log(e.target); // The element that triggered the event
//    console.log(e.clientX, e.clientY); // The coordinates of the mouse relative to the viewport
//    console.log(e.offsetX, e.offsetY); // The coordinates of the mouse relative to the target element
//    console.log("you move into the div");
//    div.style.backgroundColor = "yellow";
// }

// Common Event Object Properties:
// e.type - The type of event that occurred
// e.target - The element that triggered the event
// e.currentTarget - The element with the event listener attached
// e.clientX, e.clientY - Mouse position relative to the viewport (window)
// e.offsetX, e.offsetY - Mouse position relative to the target element
// e.key - The key pressed (for keyboard events)
// e.preventDefault() - Prevent the default action of an event
// e.stopPropagation() - Stop the event from propagating up the DOM tree

// Creating and Inserting Elements
// createElement - Create a new HTML element
// append/prepend - Insert elements into the DOM
// after/before - Insert elements relative to existing elements

// Creating elements
// let btn = document.createElement("button");
// btn.innerText = "Click Me"; // Setting the inner text of the button
// console.log(btn); // Logging the button element

// Creating a heading element
// let heading = document.createElement("h1");
// heading.innerHTML = "<i>hello I am new!</i>";

// Inserting elements into the DOM
// let div = document.querySelector("div");
// div.prepend(btn); // Prepending the button at the beginning of the <div> element
// // div.append(btn); // Appending the button at the end of the <div> element
// // div.after(btn); // Inserting the button after the <div> element
// // div.before(btn); // Inserting the button before the <div> element

// let p = document.querySelector("p");
// p.prepend(btn); // Prepending the button at the beginning of the <p> element

// Inserting created heading into body
// document.querySelector("body").prepend(heading); // Prepending the heading to the body element

// Example with button and body
// let button = document.createElement("button");
// button.innerText = "Click Me"; // Setting the inner text of the button
// console.log(button); // Logging the button element

// let body = document.querySelector("body");
// body.prepend(button); // Appending the button to the body element
// console.log(body); // Logging the body element after appending the button

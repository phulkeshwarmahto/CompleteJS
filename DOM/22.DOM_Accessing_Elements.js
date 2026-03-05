// Accessing DOM Elements

// 1. getElementById - Get element by its ID attribute
// let word = document.getElementById("myH") 
// console.dir(word); // Accessing an element by its ID
// console.dir(word.innerHTML); // Accessing the inner HTML of the element
// console.log(word.tagName); // Logging the tag name of the element (e.g., "H1")

// 2. getElementsByClassName - Get elements by class name (returns HTMLCollection)
// let elements = document.getElementsByClassName("para");
// console.dir(elements); // Accessing elements by their class name
// console.log(elements); // Logging the HTMLCollection of elements with the class "para"

// 3. getElementsByTagName - Get elements by tag name (returns HTMLCollection)
// let paragraphs = document.getElementsByTagName("p");
// console.dir(paragraphs); // Accessing all <p> elements in the document
// console.log(paragraphs); // Logging the HTMLCollection of <p> elements

// 4. querySelector - Get the first element that matches a CSS selector
// let firstPara = document.querySelector("p"); // Selects the first <p> element in the document
// console.dir(firstPara); // Logging the first <p> element
// console.log(firstPara); // Logging the first <p> element

// 5. querySelectorAll - Get all elements that match a CSS selector (returns NodeList)
// let allParas = document.querySelectorAll("p"); // Selects all <p> elements in the document
// console.dir(allParas); // Logging the NodeList of all <p> elements
// console.log(allParas); // Logging the NodeList of all <p> elements

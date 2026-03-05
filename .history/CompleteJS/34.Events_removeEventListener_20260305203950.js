// removeEventListener - Remove event listeners

// // const handler = () => {
// //     console.log("button was clicked");
// //     alert("hello!");
// // }

// // btn1.removeEventListener("click", handler);
// // This will work because the same handler function reference is used

// // IMPORTANT: removeEventListener requires the same function reference that was used in addEventListener
// // Anonymous functions cannot be removed because each time you create a new function reference

// Example that works:
// const clickHandler = () => {
//     console.log("button was clicked");
//     alert("hello!");
// }

// let btn = document.querySelector("#button1");
// btn.addEventListener("click", clickHandler); // Add listener
// btn.removeEventListener("click", clickHandler); // Remove listener - works because same reference

// Example that does NOT work:
// btn.addEventListener("click", () => {
//     console.log("button was clicked");
// });

// btn.removeEventListener("click", () => {
//     console.log("button was clicked");
// }); // Does NOT work - different function reference each time

// Best Practice: Store handler function in a variable if you need to remove it later

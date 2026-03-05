// addEventListener - Recommended way to handle events
// Allows multiple listeners on the same element
// More flexible than direct onclick property

// Basic addEventListener
// let btn1 = document.querySelector("#button1");
// btn1.addEventListener("click", (e) => {
//     console.log("you clicked this button");
//     alert("hello!");
//     let num = 23;
//     num++;
//     console.log(num);
// });

// addEventListener on a div
// let div = document.querySelector("#div1");
// div.addEventListener("click", (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
//     console.log(e.offsetX, e.offsetY);
//     console.log("you clicked this div");
//     div.style.backgroundColor = "yellow";
// });

// Multiple listeners on the same element
// let btn2 = document.querySelector("#button2");

// btn2.addEventListener("click", () => {
//     console.log("you clicked this button - listener 1");
//     alert("hello!");
// }); 

// btn2.addEventListener("click", () => {
//     console.log("you clicked this button - listener 2");
//     alert("hello again!");
// });

// btn2.addEventListener("click", () => {
//     console.log("you clicked this button - listener 3");
//     alert("hello once more!");
// });

// All three listeners will execute when button is clicked

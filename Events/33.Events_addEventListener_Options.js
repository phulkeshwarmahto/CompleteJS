// addEventListener with Options - once, capture, passive

// using {once: true} option - listener will be removed after first execution
// let btn1 = document.querySelector("#button1");
// btn1.addEventListener("click", (e) => {
//     console.log("you clicked this button");
//     alert("hello!");
//     let num = 23;
//     num++;
//     console.log(num);
// }, {once: true}); // Event listener will be removed after the first click

// let div = document.querySelector("#div1");
// div.addEventListener("click", (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
//     console.log(e.offsetX, e.offsetY);
//     console.log("you clicked this div");
//     div.style.backgroundColor = "yellow";
// }, {once: true}); // Event listener will be removed after the first click

// addEventListener options object:
// {once: true} - Event listener fires only once, then is automatically removed
// {capture: true} - Event uses the capturing phase instead of bubbling phase
// {passive: true} - Event listener will not call preventDefault()

// Example with multiple options:
// element.addEventListener("click", handler, {once: true, capture: false});

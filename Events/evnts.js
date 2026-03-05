// let btn1 = document.querySelector("#button1");

// btn1.onclick = () => {
//     console.log("you clicked this button");
//     alert("hello!");
//     let num = 23;
//     num++;
//     console.log(num);
//     // btn1.style.backgroundColor = "red";
// }


// let div = document.querySelector("#div1");
// div.onmouseover = () => {
//     console.log("you move into the div");
//     div.style.backgroundColor = "yellow";
// }

// btn1.onclick = (e) => {
//    console.log(e);
//    console.log(e.type);
//    console.log(e.target);
//    console.log(e.clientX, e.clientY);
//    console.log(e.offsetX, e.offsetY);
//    console.log("you clicked this button");
// }; 


// let div = document.querySelector("#div1");
// div.onmouseover = (e) => {
//    console.log(e);
//    console.log(e.type);
//    console.log(e.target);
//    console.log(e.clientX, e.clientY);
//    console.log(e.offsetX, e.offsetY);
//    console.log("you clicked this button");
//    console.log("you move into the div");
//    div.style.backgroundColor = "yellow";
// }

// let btn1 = document.querySelector("#button1");
// btn1.addEventListener("click", (e) => {
//     console.log("you clicked this button");
//     alert("hello!");
//     let num = 23;
//     num++;
//     console.log(num);
//     // btn1.style.backgroundColor = "red";
// }, {once: true}); // The event listener will be removed after the first click
 
// let div = document.querySelector("#div1");
// div.addEventListener("click", (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
//     console.log(e.offsetX, e.offsetY);
//     console.log("you clicked this button");
//     console.log("you move into the div");
//     div.style.backgroundColor = "yellow";
// }, {once: true}); // The event listener will be removed after the first click

// let btn2 = document.querySelector("#button2");
// btn2.addEventListener("click", () => {
//     console.log("you clicked this button two times");
//     alert("2 times hello!");
// });  // The event listener will be removed after the first click

// btn2.addEventListener("click", () => {
//     console.log("you clicked this button two times1");
//     alert("2 times hello!");
// });

// btn2.addEventListener("click", () => {
//     console.log("you clicked this button two times2");
//     alert("2 times hello!");
// });

// btn2.removeEventListener("click", () => {
//     console.log("you clicked this button two times2");
//     alert("2 times hello!");
// });


// const handler = () => {
//     console.log("button was clicked");
//     alert("hello!");
// }

// btn1.removeEventListener("click", handler); // This will not work because the handler is not the same as the one added with addEventListener

let btnMode = document.querySelector("#mode");
let currMode = "lightMode";
let body = document.querySelector("body")

btnMode.addEventListener("click", ()=> {
    if(currMode === "lightMode"){
        currMode =  "darkMode";
        console.log(currMode);
        // document.querySelector("body").style.backgroundColor = "black";
        // document.querySelector("body").style.textDecorationColor= "white";
        // document.querySelector("body").classList.add("dark")
        body.classList.add("dark")
        body.classList.remove("light")
    }else{
        currMode ="lightMode";
        console.log(currMode);
        // document.querySelector("body").style.textDecorationColor = "black";
        // document.querySelector("body").style.backgroundColor = "white";
        // document.querySelector("body").classList.add("light")
        body.classList.add("light")
        body.classList.remove("dark")
    }
});
 

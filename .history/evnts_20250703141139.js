let btn1 = document.querySelector("#button1");

// btn1.onclick = () => {
//     console.log("you clicked this button");
//     alert("hello!");
//     let num = 23;
//     num++;
//     console.log(num);
//     // btn1.style.backgroundColor = "red";
// }

let div = document.querySelector("#div1");
div.onmouseover = () => {
    console.log("you move into the div");
    div.style.backgroundColor = "yellow";
}

btn1.onclick = (e) => {
   console.log(e);
}
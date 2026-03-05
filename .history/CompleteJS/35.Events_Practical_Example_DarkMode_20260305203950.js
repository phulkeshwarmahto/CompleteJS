// Practical Example - Light/Dark Mode Toggle
// This demonstrates a real-world use case of event listeners and DOM manipulation

// let btnMode = document.querySelector("#mode");
// let currMode = "lightMode";
// let body = document.querySelector("body")

// btnMode.addEventListener("click", ()=> {
//     if(currMode === "lightMode"){
//         currMode =  "darkMode";
//         console.log(currMode);
        
//         // Method 1: Direct inline styling
//         // document.querySelector("body").style.backgroundColor = "black";
//         // document.querySelector("body").style.color = "white";
        
//         // Method 2: Using classList (Recommended)
//         body.classList.add("dark") // Add dark class
//         body.classList.remove("light") // Remove light class
        
//     }else{
//         currMode ="lightMode";
//         console.log(currMode);
        
//         // Method 1: Direct inline styling
//         // document.querySelector("body").style.color = "black";
//         // document.querySelector("body").style.backgroundColor = "white";
        
//         // Method 2: Using classList (Recommended)
//         body.classList.add("light") // Add light class
//         body.classList.remove("dark") // Remove dark class
//     }
// });

// To make this work, define CSS classes in your stylesheet:
// CSS Example:
// body.light {
//     background-color: white;
//     color: black;
// }

// body.dark {
//     background-color: black;
//     color: white;
// }

// Benefits of using classList over inline styles:
// 1. Separation of concerns (CSS in stylesheet, JavaScript for logic)
// 2. Easier to maintain and modify styles
// 3. Better performance (less DOM manipulation)
// 4. Reusable styles across multiple elements

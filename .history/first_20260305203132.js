// 1. 
// console.log("PS");
// window.alert(`hello again`);
// let name ="phul";  //string
// console.log(name);

//2.
// age=20;       //number
// console.log(age);

// 3.
// quantity=54367.89;  //number
// console.log(quantity);

//4.
// let aGe = 10;
// console.log(aGe);
// typeof(aGe);

//5.
// var x = 5;  // var is function scoped(can be accessed outside the block)
// var x = 10; // var can be redeclared and reassigned

// let x = null;  // null means variable is declared but not assigned any value
// let y = undefined;  // undefined means variable is declared but not assigned any value
// console.log(x);
// console.log(y);

// 6.
// let a = BigInt("123");  //it is used to store large numbers
// let b = Symbol("hello"); // it is used to create unique identifiers
// console.log(a);
// console.log(b);

// a = 5;
// b = 10;
// console.log(`a^b= `,a**b);  // exponentiation operator, it is used to raise a number to the power of another number

// let a = 5;
// let b = "5";
// console.log(`a==b = `,a==b);  // true_ it will check only values do not check data type
// console.log(`a===b = `,a===b);  //false_ it will check values and data type also it means string will compared with strings only


//7.
// let num=prompt("enter the number");
// if(num>=90 && num<=100){
//     console.log("A+");
// }

// let name = prompt("enter your name");
// console.log(`hello ${name}`);

//8.
// let student={      // object
//     name:"phulkeshwar",
//     age:20,
//     marks:95,
//     rollNo:430,
// }
// console.log(student);

//9.
// let sum=0,n=100;
// for(let i=1;i<=100;i++){
//     sum += i;
// }
// console.log(`sum of ${n} is `,sum);  // or, console.log(`sum of ${n} is ${sum}`);

//10.
// let str="MD DANISH"
// let size=0;
// for(let i of str){
//     console.log("i= ",i);
//     size++;
// }
// console.log("size is=",size);  // or, console.log(`size is= `,str.length);

//11.
// let student={      // object
//     name:"phulkeshwar",
//     age:20,
//     marks:95,
//     rollNo:430,
// }
// // console.log(student);
// let key
// for(let key in student){
//     console.log("key=",key,"value=",student[key]);
// }

//12.
// let gameNum=30;
// let userNum=prompt("guess the number");
// while(userNum!=gameNum){
//     userNum=prompt("your guess was wrong.guess again");
// }
// console.log("congratulation you guess right num");

// //13.
// document.getElementById("myH").textContent="hEllo";
// document.getElementById("myP").textContent="hELlo";

// // 14. 
// let a = 12,b=45;
// console.log(`a+b= `,a+b);

// console.log(`a++= `,a++);
// // console.log(`a++= `,++a);
// console.log(`a--= `,a--);

// 15.
// let a = 12;
// let b=23;
// let c=12;
// console.log("a==b",a==b);
// console.log("a!=b",a!=b);
// console.log("a===b",a===c);  //it will check values and data type also it means string will compared with strings only
// console.log("a>b",a>b);
// console.log("a<b",a<b);
// let cond1 = a<b;
// let cond2 = a==b;
// console.log(cond1 && cond2);
// console.log(cond1 != cond2);

// 16. ternery operator
// let a=23;
// let result = a>18 ? `adult` :" not adult";
// console.log(`he/she is ${result}`); 

// 17. switch
// let frt = prompt("enter a fruit name");
// switch(frt){
//     case "orange": console.log("this is orange");
//     break;
//     case "banana": console.log("this is banana");
//     break;
//     case "gauva": console.log("this is gauva");
//     break;
//     case "grapes": console.log("this is grapes");
//     break;
//     default:
//     console.log(    `not found ${frt}`);
// }

// 18. loops

// for(let i=1; i<5 ; i++){
//     console.log(i);
//     console.log("you")
// }

// let n=19;
// let sum=0;
// factorial=1;
// for(let i=1 ; i<=n ; i++){
//     sum+=i;
//     factorial *=i;
// }
// console.log(sum);
// console.log(factorial);

// let n=19,i=1;
// let sum=0;
// while(i<=n){
//     console.log(i);
//     i++;
// }
// do{
//     console.log(i);
//     i++;
// }while(i<n);

// 19. for of loop
// let key="shubham gupta";
// size = 0;
// for(let i of key){
//     console.log(i);
//     size++;
// }
// console.log(size);

// 20. for in loop (for objects and arrays)

// let student = {
//     name: "deepak",
//     age:21,
//     rollNo: 8,
// };
// for(let key in student){
//     console.log(`${key} : ${student[key]}`);
// }

//  21. enter number until you enter correct number
// let n=430;
// let userNum = prompt("entr the number: ");
// if(userNum!==n){
//     userNum=prompt("you entered wrong number, please try again: ");
// }
// console.log("congratulations you guessed the number:");

// 22. strings         |||   strings are immutable
// let name = `rakesh kumar`;
// console.log(name.length);
// console.log(name[2]);  //index 3rd position
// console.log(typeof name);

// 23. template litrals
// let dir1= "eAst west";
// let output = `   if sun rises in ${dir1} we are correct  ` ;
// let put =  `this is not a joke`;
// console.log(output);
// console.log(output.toLowerCase());
// console.log(output.toUpperCase());
// console.log(output.trim());   // trim spaces from end and front of sentence
// console.log(output.slice(2,15));   //returns index values from 2 to 14
// console.log(output.concat(put));       // adds two strings
// console.log(put.replace("joke","majak"));        // replace values in strings 
// console.log(output.charAt(4));         // print character at 4+1 position

// 24. array -- it is a special type of object    || are mutable
// let arr = [1,2,3,4,54,6,6]; 
// console.log(arr);
// console.log(arr[1]);
// console.log(arr.length);

// let roomies = [`sahil`,`sandip`,`sumit`,`shubham`,`soham`];
// console.log(roomies);
// console.log(roomies[4]);
// console.log(typeof roomies);
// for(let owner of roomies){
//     console.log(owner.toUpperCase());
// }

// 25. practice
// let fullName = prompt("enter your full name PhulkeshwarMahto");
// fullName = fullName.toLowerCase();
// console.log("@"+    fullName+fullName.length); // template literals

// let finalPrice;
// let price = [200,230,250,123,300,432,1233];
// for(let i=0 ; i<price.length ; i++){
//     finalPrice = price[i]-price[i]*15/100;
//     console.log(finalPrice);
// }

// 26. array methods
// let roomies = [`sahil`, `sandip`, `sumit`, `shubham`, `soham`];
// let marks = [80,79,85,81,74];
// console.log(roomies);

// let removedRoomie = roomies.pop(); // Using a different variable name - removed last element
// console.log(roomies);
// console.log(`Removed: ${removedRoomie}`); // Logging the removed element
// let addedRoomie = roomies.push("rahul");   // Adding a new element to the end of the array
// console.log(`added: ${roomies}`); 
// console.log(marks);
// let mark = marks.toString();  // // Converting the marks array to a string
// console.log(mark);

// let CE = ["sachin","deepak","shubham"];
// let MME = ["sahil","sandip","sumit"];
// let ME = ["satrudhan","aditya","bawala"]
// let batch = CE.concat(MME,ME);
// console.log(batch);

// let CE = ["sachin","deepak","shubham"];
// let val = CE.unshift("atharv");  // Adding an element to the beginning of the array 
// console.log(val);
// let MME = ["sahil","sandip","sumit"];
// let valu = MME.shift();    // Removing the first element from the MME array
// console.log("deleted",valu);

// let batch = ["sachin","deepak","shubham","sahil","sandip","sumit"];
// console.log(batch.slice(1,4)); //return a piece of array
// console.log(batch.splice(3,2,"soham","hrithik")); //(index,no of element to be added , rest are elements which are added)
// console.log(batch.splice(3));

//practice
// let companies = ["Google", "Microsoft", "Apple", "Amazon", "Facebook"];
// console.log(companies.pop()); // Removes the last element from the array and returns it
// console.log(companies.push("Tesla")); // Adds a new element to the end of the array
// console.log(companies.shift()); // Removes the first element from the array and returns it
// console.log(companies.unshift("IBM")); // Adds a new element to the beginning of the array
// console.log(companies.slice(1, 3)); // Returns a shallow copy of a portion of the array
// console.log(companies.splice(2, 1, "Oracle", "Nvidia")); // Removes elements from the array and, if necessary, inserts new elements in their place
// console.log(companies); // Displays the modified array after all operations

// 27. Function
// function name(){
//     console.log("hello you are amazing");
// }
// name();
// name();

// function message(msg,n){   //with parameter
//     console.log(msg);
//     console.log(n);
// }
// message("This is message",5);

// function sum(x,y){   // parameters are local variables and can be used in that block only
//     s = x + y;
//     return s;
//     console.log("hello");      // can't be reached after return statement written,
// }
// let val = sum(2,4);
// console.log(val);

// 28. Arrow Function
// function mult(a,b){       // nowrmal function
//     return a*b;
// }
// console.log(mult(5,3));

// const arrow = (a,b) => {    // arrow function
//     // console.log(a*b);  // only call {arrow(3,5);}    // print directly 
//     return a*b;   //  we have to call fuction in console section {console.log(arrow(3,5));}
// };
// // arrow(3,5);
// console.log(arrow(3,5));

// const print = () => {
//     console.log("hello");
// };
// print();

// 29. Practice
// function countVolwels(str){
//     count = 0;
//     for(const char of str){
//         if(char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u" 
//         ){
//             count++;
//         }
//     }
//     console.log(count);
//     // return count;
// }
// countVolwels("deepak");

// In arrow function
// const countVolwels = (str) => {
//     count = 0;
//     for(const char of str){
//         if(char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u" 
//         ){
//             count++;
//         }
//     }
//     console.log(count);
//     // return count;
// }
// countVolwels("deepak");

// 30 forEach loop (Higher Order Function/Callback Function/Method is a function that takes another function as an argument or returns a function as its result.) 
// let arr = ["pune", "mumbai", "delhi", "banglore"];
// // let arr = [1,2,3,4,5,6,7,8,9,0];
// arr.forEach((val,idx,arr) => {   // we can pass three parameters in forEach loop and they are value, index, and array itself. index and array are optional
//     console.log(val.toUpperCase(), idx,arr);  // val is the value of the array and idx is the index of the array
// })

// practice
// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// arr1.forEach((val) => {
//     console.log(val*val);
// })

// 31. map method
// let arr = [1,2,3,4,5,6,7,8,9,0];
// arr.map((val,idx) => { // map method creates a new array with the results of calling a provided function on every element in the calling array
//     console.log(val*val, idx);  // it will return a new array with the square of each element
// });

// practice
// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// let newArr = arr1.map((val) => {
//     return val+2;  // it will return a new array with the same elements incremented by 2
// })
// console.log(newArr);  // it will return a new array with the same elements

// 32. filter method
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let newArr = arr.filter((val) => {
//     // return val%2 === 0;  // it will return a new array with only even numbers(it return values which satisfy the condition )
//     return val>5;  // it will return a new array with only values greater than 5
// })
// console.log(newArr); 

// 33. reduce method
// let arr = [1,2,3,4,5,6,7,8,9,10];
// const sum = arr.reduce((accumulator, currentValue) => { // reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value
//     return accumulator + currentValue;
// })
// console.log(sum);  // it will return the sum of all elements in the array

// practice
// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// const max = arr1.reduce((accumulator, currentValue) => {
//     // return Math.max(accumulator, currentValue); // it will return the maximum value in the array
//     return accumulator > currentValue ? accumulator : currentValue; // alternative way to find maximum value
// })
// console.log(max);  // it will return the maximum value in the array

// 34. find method
// let arr = [1,2,3,4,5,6,7,8,9,10];
// const found = arr.find((val) => {
//     return val > 5; // it will return the first element that satisfies the condition
// })
// console.log(found);  // it will return the first element that is greater than 5

// 35. findIndex method
// let arr = [1,2,3,4,5,6,7,8,9,10];
// const foundIndex = arr.findIndex((val) => {
//     return val > 5; // it will return the index of the first element that satisfies the condition
// })
// console.log(foundIndex);  // it will return the index of the first element that is greater than 5

// 36. some method
// let arr = [1,2,3,4,5,6,7,8,9,10];
// const hasEven = arr.some((val) => {
//     return val % 2 === 0; // it will return true if at least one element satisfies the condition
// })
// console.log(hasEven);  // it will return true if at least one element is even, otherwise false

// 37. every method
// let arr = [1,2,3,4,5,6,7,8,9,10];
// const allEven = arr.every((val) => {
//     return val % 2 === 0; // it will return true if all elements satisfy the condition
// })
// console.log(allEven);  // it will return true if all elements are even, otherwise false

// // practice
// let marks = [80, 90, 85, 95, 100];
// const filterMarks =  marks.filter((val) => {
//     return val >= 90; // it will return a new array with only marks greater than or equal to 90
// })
// console.log(filterMarks);  // it will return a new array with only marks greater than or equal to 90

// 38. sort method
// let arr = [5, 3, 8, 1, 2];
// arr.sort((a, b) => {
//     return a - b; // it will sort the array in ascending order
// });
// console.log(arr);  // it will return the sorted array in ascending order

// practice
// let size = prompt("enter the size of array");
// let arr = [];
// for(let i=0; i<size; i++){
//     arr[i] = i+1; // it will create an array of size n with elements from 1 to n
// }
// console.log(arr);

// const Sum = arr.reduce((result , value) => {
//     return result + value; // it will return the sum of all elements in the array
// })
// console.log("Sum of array: " ,Sum);  // it will return the sum of all elements in the array

// const mult = arr.reduce((result , value) => {
//     return result*value; // it will return the product of all elements in the array
// })
// console.log("Product of array: " ,mult);  // it will return the product of all elements in the array
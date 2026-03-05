// Reduce Method
// Reduce method executes a reducer function on each element of the array, resulting in a single output value

// let arr = [1,2,3,4,5,6,7,8,9,10];
// const sum = arr.reduce((accumulator, currentValue) => { 
//     return accumulator + currentValue;
// })
// console.log(sum);  // it will return the sum of all elements in the array

// Practice - Find Maximum
// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// const max = arr1.reduce((accumulator, currentValue) => {
//     // return Math.max(accumulator, currentValue); // it will return the maximum value in the array
//     return accumulator > currentValue ? accumulator : currentValue; // alternative way to find maximum value
// })
// console.log(max);  // it will return the maximum value in the array

// Practice - Sum and Product of Array
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

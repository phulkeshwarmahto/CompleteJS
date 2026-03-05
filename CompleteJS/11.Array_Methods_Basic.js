// Array Methods - pop, push, shift, unshift, slice, splice, toString, concat

// let roomies = [`sahil`, `sandip`, `sumit`, `shubham`, `soham`];
// let marks = [80,79,85,81,74];
// console.log(roomies);

// let removedRoomie = roomies.pop(); // Using a different variable name - removed last element
// console.log(roomies);
// console.log(`Removed: ${removedRoomie}`); // Logging the removed element
// let addedRoomie = roomies.push("rahul");   // Adding a new element to the end of the array
// console.log(`added: ${roomies}`); 
// console.log(marks);
// let mark = marks.toString();  // Converting the marks array to a string
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

// Practice
// let companies = ["Google", "Microsoft", "Apple", "Amazon", "Facebook"];
// console.log(companies.pop()); // Removes the last element from the array and returns it
// console.log(companies.push("Tesla")); // Adds a new element to the end of the array
// console.log(companies.shift()); // Removes the first element from the array and returns it
// console.log(companies.unshift("IBM")); // Adds a new element to the beginning of the array
// console.log(companies.slice(1, 3)); // Returns a shallow copy of a portion of the array
// console.log(companies.splice(2, 1, "Oracle", "Nvidia")); // Removes elements from the array and, if necessary, inserts new elements in their place
// console.log(companies); // Displays the modified array after all operations

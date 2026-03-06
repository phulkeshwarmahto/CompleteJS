// Objects, ProtoTypes

// Object: A javascript object is a collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type, including other objects or functions. Objeects have state and behavior or (properties and method).

// ProtoType: In JavaScript, every object has a prototype, which is another object from which it can inherit properties and methods. The prototype chain allows for shared behavior and properties among objects. It is a special property of an object that points to another object, allowing for inheritance and method sharing. we can set prototype using `__proto__` or `Object.create()`.


// const student = {
//     fullName: 'John Doe',
//     age: 20,
//     marks: {
//         math: 85,
//         science: 90,
//         english: 88
//     },
//     getDetails: function () {
//         console.log(marks);
//     }
// }; 

// const employee = {

//     calculteTax () {
//         console.log("The tax rate is 30%");
//     },  // or 

//     calculteTax2 : function () {
//         console.log("The tax rate is 10%")
//     }

// };



// const employee1 = {
//     salary: 50000,
// };

// const employee2 = {
//     salary: 50000,
// };

// const employee3 = {
//     salary: 50000,
// };

// const employee4 = {
//     salary: 50000,
// };


// employee1.__proto__ = employee;
// employee2.__proto__ = employee;
// employee3.__proto__ = employee;
// employee4.__proto__ = employee;

// console.log(employee);
// console.log(employee1);
// console.log(employee2.calculteTax);

// if object and protoype have same method then object method will be called first, if not then protoype method will be called.

// const employee5 = {
//     salary: 50000,
//     calculteTax () {
//         console.log("The tax rate is 20%");
//     }, 
// };
// employee5.__proto__ = employee; 


// Classes

// class rath {
//     start() {
//         console.log("Start");
//     }
//     stop() {
//         console.log("Stop");
//     }
//     setBrand(brand){
//         this.brand = brand;    // or this['brand'] = brand; or this.Brandname = brand;
//     }
// }

// // console.log(rath);
// // console.log(typeof(rath));

// let car1 = new rath();
// car1.setBrand("BMW")
// let car2 = new rath();
// car2.setBrand("Audi")


// Constructor Function

// class car {
//     constructor(brand,mileage){      // This is a special method that is called when an instance of the class is created. it 
//         console.log("Constructor called");
//         this.brand = brand;
//         this.carMileage = mileage; // or mileage || 0; // Default value if mileage is not provided
//         this.start = this.start.bind(this); // Binding the start method to the instance
//     }

//     start() {
//         console.log("Start");
//     }
//     stop() {
//         console.log("Stop");
//     }
//     setBrand(brand){
//         this.brand = brand;    // or this['brand'] = brand; or this.Brandname = brand;
//     }
// }


// let car1 = new car("BMW", 15); // Creating an instance of the car class with brand "BMW" and mileage 15
// let car2 = new car("Audi", 20); // Creating another instance of the car class with brand "Audi" and mileage 20


// Inheritance

// class Vehicle {  // Parent class or Base class
//     hello(){
//         console.log("Hello from Vehicle");
//     }
// }

// class Child extends Vehicle {  // Child class inherits from Vehicle class or Parent class

// }
// let child = new Child();

// // child();
// child.hello(); // This will call the hello method from the Vehicle class



// class Person {
//     eat() {
//         console.log("Eating");
//     }

//     sleep (){
//         console.log("Sleeping");
//     }

//     work() {
//         console.log("Working");
//     }

//     Occupation() {
//         console.log("Do Nothing");
//     }
// }
// // if parent and child class have same method then child class method will be called first, if not then parent class method will be called.
// class Engineer  {
//     Occupation() {
//         console.log("Engineer");
//     }
//     Field() {
//         console.log("Software Engineer");
//     }
//     work() {
//         console.log("Solving problems");
//     }
// }
// let Phulkeshwar = new Engineer();
// // Phulkeshwar.Occupation = function() {
// //     console.log("Phulkeshwar is an Engineer");
// // };

// class Doctor extends Person {
//     Occupation() {
//         console.log("Doctor");
//     }
//     work() {
//         console.log("Treating patients");
//     }
// }
// let Divyansh = new Doctor();
// // Divyansh.Occupation = function() {
// //     console.log("Divyansh is a Doctor");
// // };

// Super keyword

// class Person {
//     constructor(){
//         console.log("Enter Parent class constructor")
//         this.species = this.species;
//     }
//     eat() {
//         console.log("Eating");
//     }
// }
// class Engineer extends Person {
//     constructor(branch){
//         console.log("Enter child class constructor")
//         super(); // to invoke parent class constructor
//         this.branch = branch;
//         console.log("Exit child class constructor");
//     }
//     work(){  // call Phulkeshwar.work() to call this method
//         super.eat(); // Calling the eat method from the Person class
//         console.log("Solving problems");
//     }
//     Occupation() {
//         console.log("Engineer");
//     }
// }
// let Phulkeshwar = new Engineer("CSE");
// Phulkeshwar.species = "Human"; // Setting species property
// Phulkeshwar.eat(); // Calling the eat method from the Person class


// Error Handling

// let a = 10;
// let b = 30;

// console.log("a =", a);
// console.log("b =", b);
// console.log("a + b =", a + b);
// try {
//     console.log("a - b =", a - c);
// } catch (error) {
//     console.error("An error occurred:", error);
// }
// console.log("a+b = ", a+b);

// Syncronous Programming: Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

// Synchronous Programming Callback Example:

// function sum(a, b) {
//     console.log(a+b);
// }
// function calculator(a,b,callback) {
//     sumCallback = sum(a, b);
// }
// calculator ( 5, 10, sum);  // or calculator(5, 10, (result) => console.log(result));


// Asynchronous: Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

// console.log("Start");
// console.log("Middle");
// setTimeout(() => { 
//     console.log("End");
// }, 4000); // This will execute after 2 seconds
// console.log("Finish");
// console.log("End of script");

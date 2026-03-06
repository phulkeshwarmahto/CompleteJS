// ========================================
// CLASSES IN JAVASCRIPT
// ========================================

// 1. Basic Class
console.log("--- Basic Class ---");
class Vehicle {
    start() {
        console.log("Vehicle started");
    }

    stop() {
        console.log("Vehicle stopped");
    }

    setBrand(brand) {
        this.brand = brand;
    }
}

let car1 = new Vehicle();
car1.setBrand("Toyota");
car1.start();
console.log("Brand:", car1.brand);

// 2. Constructor Function
console.log("\n--- Constructor Function ---");
class Car {
    constructor(brand, mileage) {
        console.log("Constructor called");
        this.brand = brand;
        this.mileage = mileage;
    }

    start() {
        console.log(`${this.brand} started`);
    }

    stop() {
        console.log(`${this.brand} stopped`);
    }

    getBrandInfo() {
        console.log(`Brand: ${this.brand}, Mileage: ${this.mileage} km/l`);
    }
}

let car2 = new Car("BMW", 15);
let car3 = new Car("Audi", 20);

car2.getBrandInfo();
car3.start();

// 3. Class with Methods
console.log("\n--- Class Methods ---");
class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}

let calc = new Calculator();
console.log("5 + 3 =", calc.add(5, 3));
console.log("10 - 4 =", calc.subtract(10, 4));
console.log("6 * 7 =", calc.multiply(6, 7));
console.log("20 / 4 =", calc.divide(20, 4));

// 4. Class with Properties
console.log("\n--- Class Properties ---");
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getInfo() {
        return `"${this.title}" by ${this.author} (${this.pages} pages)`;
    }

    isLong() {
        return this.pages > 300 ? "Long book" : "Short book";
    }
}

let book1 = new Book("Harry Potter", "J.K. Rowling", 309);
let book2 = new Book("The Hobbit", "J.R.R. Tolkien", 310);

console.log(book1.getInfo());
console.log(book2.getInfo());
console.log("Book 1:", book1.isLong());
console.log("Book 2:", book2.isLong());

// 5. Static Methods
console.log("\n--- Static Methods ---");
class MathOperations {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static getPI() {
        return 3.14159;
    }
}

console.log("Static add:", MathOperations.add(5, 3));
console.log("Static multiply:", MathOperations.multiply(4, 5));
console.log("PI:", MathOperations.getPI());

// 6. Class with Instance Check
console.log("\n--- Instance Check ---");
let book = new Book("1984", "George Orwell", 328);
console.log("book instanceof Book:", book instanceof Book);
console.log("book instanceof Vehicle:", book instanceof Vehicle);

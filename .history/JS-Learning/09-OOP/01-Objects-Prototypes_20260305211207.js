// ========================================
// OBJECTS AND PROTOTYPES
// ========================================

// 1. Object with Methods
console.log("--- Object with Methods ---");
const employee = {
    name: "John Doe",
    salary: 50000,
    calculateTax: function() {
        console.log("Tax rate: 30%");
        return this.salary * 0.30;
    }
};

console.log(employee);
console.log("Tax:", employee.calculateTax());

// 2. Creating Multiple Objects (Prototype Pattern)
console.log("\n--- Prototype Pattern ---");
const taxCalculator = {
    calculateTax() {
        console.log("Calculating tax at 30%...");
        return this.salary * 0.30;
    }
};

const emp1 = {
    name: "Alice",
    salary: 50000
};

const emp2 = {
    name: "Bob",
    salary: 60000
};

const emp3 = {
    name: "Charlie",
    salary: 55000
};

emp1.__proto__ = taxCalculator;
emp2.__proto__ = taxCalculator;
emp3.__proto__ = taxCalculator;

console.log(emp1.name + "'s tax:", emp1.calculateTax());
console.log(emp2.name + "'s tax:", emp2.calculateTax());

// 3. Prototype Shadowing
console.log("\n--- Prototype Shadowing ---");
const emp4 = {
    name: "Diana",
    salary: 70000,
    calculateTax() {
        console.log("Diana's custom tax (20%)");
        return this.salary * 0.20;
    }
};

emp4.__proto__ = taxCalculator;

// emp4 has its own method, so prototype method is shadowed
console.log(emp4.name + "'s tax:", emp4.calculateTax());

// 4. Prototype Chain
console.log("\n--- Prototype Chain ---");
const grandparent = {
    says: function() {
        console.log("Grandparent speaking");
    }
};

const parent = {
    teaches: function() {
        console.log("Parent teaching");
    }
};

const child = {
    learns: function() {
        console.log("Child learning");
    }
};

parent.__proto__ = grandparent;
child.__proto__ = parent;

child.learns();   // Child's method
child.teaches();  // Parent's method (inherited)
child.says();     // Grandparent's method (inherited through chain)

// 5. Student Object with Nested Objects
console.log("\n--- Nested Objects ---");
const student = {
    fullName: "John Doe",
    age: 20,
    marks: {
        math: 85,
        science: 90,
        english: 88
    },
    getDetails: function() {
        console.log(`Name: ${this.fullName}, Age: ${this.age}`);
    }
};

student.getDetails();
console.log("Math marks:", student.marks.math);

// 6. Object.create() Method
console.log("\n--- Object.create() ---");
const animalPrototype = {
    speak: function() {
        console.log(`${this.name} makes a sound`);
    }
};

const dog = Object.create(animalPrototype);
dog.name = "Buddy";
dog.speak();

// 7. Check if Property Exists
console.log("\n--- Check Property ---");
const person = {
    name: "Alice",
    age: 25
};

console.log("name" in person);     // true
console.log("email" in person);    // false
console.log(person.hasOwnProperty("name"));    // true
console.log(person.hasOwnProperty("toString")); // false (inherited)

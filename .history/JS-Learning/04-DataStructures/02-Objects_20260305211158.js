// ========================================
// OBJECTS IN JAVASCRIPT
// ========================================

// 1. Basic Object
console.log("--- Basic Object ---");
let student = {
    name: "Phulkeshwar",
    age: 20,
    marks: 95,
    rollNo: 430
};

console.log(student);
console.log("Name:", student.name);
console.log("Age:", student.age);

// 2. Object with Methods
console.log("\n--- Object with Methods ---");
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function() {
        console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
    },
    celebrateBirthday: function() {
        this.age++;
        console.log(`Now I'm ${this.age} years old!`);
    }
};

person.greet();
person.celebrateBirthday();

// 3. Adding Properties Dynamically
console.log("\n--- Dynamic Properties ---");
let car = {
    brand: "Toyota",
    model: "Camry"
};

console.log("Before:", car);
car.year = 2022;
car.color = "blue";
console.log("After:", car);

// 4. Deleting Properties
console.log("\n--- Deleting Properties ---");
delete car.color;
console.log("After deletion:", car);

// 5. Object with Nested Objects
console.log("\n--- Nested Objects ---");
let employee = {
    name: "Alice",
    department: "IT",
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    },
    getFullAddress: function() {
        return `${this.address.street}, ${this.address.city} ${this.address.zipCode}`;
    }
};

console.log(employee);
console.log(employee.getFullAddress());

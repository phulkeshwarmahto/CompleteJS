// ========================================
// INHERITANCE IN JAVASCRIPT
// ========================================

// 1. Basic Inheritance
console.log("--- Basic Inheritance ---");
class Vehicle {
    start() {
        console.log("Vehicle started");
    }

    stop() {
        console.log("Vehicle stopped");
    }
}

class Bike extends Vehicle {
    honk() {
        console.log("Bike honking: Beep Beep!");
    }
}

let bike = new Bike();
bike.start();  // Inherited from Vehicle
bike.honk();   // Own method
bike.stop();   // Inherited from Vehicle

// 2. Method Overriding
console.log("\n--- Method Overriding ---");
class Animal {
    eat() {
        console.log("Animal eating");
    }

    sleep() {
        console.log("Animal sleeping");
    }

    work() {
        console.log("Animal working");
    }
}

class Dog extends Animal {
    work() {
        console.log("Dog barking");
    }

    fetch() {
        console.log("Dog fetching ball");
    }
}

let dog = new Dog();
dog.eat();     // From Animal
dog.work();    // Overridden in Dog
dog.fetch();   // Own method
dog.sleep();   // From Animal

// 3. Multiple Level Inheritance
console.log("\n--- Multiple Level Inheritance ---");
class Being {
    breathe() {
        console.log("Breathing");
    }
}

class LivingThing extends Being {
    move() {
        console.log("Moving");
    }
}

class Creature extends LivingThing {
    hunt() {
        console.log("Hunting");
    }
}

let creature = new Creature();
creature.breathe();  // From Being
creature.move();     // From LivingThing
creature.hunt();     // Own method

// 4. Constructor in Inheritance
console.log("\n--- Constructor in Inheritance ---");
class Person {
    constructor(name) {
        console.log("Person constructor");
        this.name = name;
    }

    introduce() {
        console.log(`I am ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, rollNo) {
        console.log("Student constructor");
        this.name = name;
        this.rollNo = rollNo;
    }

    study() {
        console.log(`${this.name} is studying`);
    }
}

let student = new Student("Alice", 5);
student.introduce();
student.study();

// 5. Using Super Keyword
console.log("\n--- Super Keyword ---");
class Shape {
    constructor(color) {
        this.color = color;
    }

    describe() {
        console.log(`This is a ${this.color} shape`);
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);  // Call parent constructor
        this.radius = radius;
    }

    describe() {
        super.describe();  // Call parent method
        console.log(`Circle with radius ${this.radius}`);
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

let circle = new Circle("red", 5);
circle.describe();
console.log("Area:", circle.area().toFixed(2));

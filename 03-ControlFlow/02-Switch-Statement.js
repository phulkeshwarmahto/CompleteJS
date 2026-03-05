// ========================================
// SWITCH STATEMENT
// ========================================

// 1. Basic Switch
console.log("--- Switch Example ---");
let day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// 2. Switch with Fruit
console.log("\n--- Fruit Switch ---");
let fruit = "apple";

switch(fruit) {
    case "orange":
        console.log("This is orange");
        break;
    case "banana":
        console.log("This is banana");
        break;
    case "guava":
        console.log("This is guava");
        break;
    case "apple":
        console.log("This is apple");
        break;
    default:
        console.log(`${fruit} not found`);
}

// ========================================
// 1. VARIABLES - var, let, const
// ========================================

// Number variable
let age = 20;
console.log(age);
console.log(typeof age);

let quantity = 54367.89;
console.log(quantity);

// ========================================
// 2. VAR vs LET
// ========================================

var x = 5;  // var is function scoped
var x = 10; // var can be redeclared and reassigned
console.log("var x:", x);

let y = null;  // null means variable is declared but not assigned
let z = undefined;  // undefined means variable is declared but not defined
console.log("y:", y);
console.log("z:", z);

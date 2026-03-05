let userInput = window.prompt("Please Enter your Input");

        if (userInput !== null) {
            window.alert("Hello, " + userInput + "!");
        } else {
            window.alert("You clicked Cancel or closed the prompt.");
        }

        let petName = 'Rocky' // Global variable
myFunction()

function myFunction() {
    fruit = 'apple'; // Considered global
    console.log(typeof petName +
        '- ' +
        'My pet name is ' +
        petName)
}

console.log(
    typeof petName +
    '- ' +
    'My pet name is ' +
    petName +
    'Fruit name is ' +
    fruit)
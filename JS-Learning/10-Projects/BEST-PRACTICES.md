# Project Guidelines

## How to Structure a Project

Each project should include:

### 1. HTML File (`index.html`)
Contains the structure and UI elements.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Project Name</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="game-container">
        <!-- Your HTML elements -->
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### 2. CSS File (`style.css`)
Styling for your project.

### 3. JavaScript File (`script.js` or specific name)
All the logic and interactivity.

## Common Project Patterns

### Game Projects
- Initialize game state
- Handle user input
- Update display based on state
- Check win/loss conditions
- Reset/restart functionality

### Interactive Tools
- Get user input from forms
- Process the data
- Display results
- Handle edge cases/errors

### Practical Steps

1. **Plan Your Code**
   - Write comments about what the code will do
   - Break it into functions
   - Test each function

2. **Get Elements First**
   ```javascript
   const button = document.getElementById("myButton");
   const display = document.querySelector(".display");
   ```

3. **Add Event Listeners**
   ```javascript
   button.addEventListener("click", () => {
       // Handle click
   });
   ```

4. **Update DOM**
   ```javascript
   display.textContent = "New content";
   display.style.color = "red";
   ```

5. **Test Thoroughly**
   - Test all interactions
   - Handle invalid inputs
   - Test edge cases

## Projects to Build

### 1. Rock Paper Scissors
**Concepts:** Logic, DOM, Events, Loops

**Features:**
- Player vs Computer
- Score tracking
- Display winner
- Reset game

### 2. Tic Tac Toe
**Concepts:** 2D Arrays, Algorithms, State Management

**Features:**
- 3x3 grid
- Win detection
- Computer AI (optional)
- Game reset

### 3. To-Do List
**Concepts:** Array operations, Local Storage, DOM manipulation

**Features:**
- Add tasks
- Delete tasks
- Mark complete
- Save to localStorage
- Filter tasks

### 4. Calculator
**Concepts:** Math operations, String parsing, Error handling

**Features:**
- Basic operations (+, -, *, /)
- Display current number
- Calculate result
- Clear function

### 5. Currency Converter
**Concepts:** Math, DOM, Optional: APIs

**Features:**
- Select currencies
- Enter amount
- Show conversion
- Save exchange rates (optional)

## Testing Your Project

```javascript
// Test user interactions
// Test calculations
// Test display updates
// Test edge cases (empty inputs, 0, negative numbers)
// Test responsive design
```

## Common Mistakes to Avoid

❌ **Don't:**
- Hard-code values when they should be variables
- Forget error handling
- Leave console errors unchecked
- Use unclear variable names
- Skip comments

✅ **Do:**
- Use meaningful variable names
- Handle edge cases
- Keep functions focused and small
- Use console to debug
- Comment complex logic
- Test thoroughly

---

Good luck with your projects! 🚀

// ========================================
// EVENTS - PRACTICAL EXAMPLE: DARK MODE
// ========================================

// 1. Dark Mode Toggle
console.log("--- Dark Mode Implementation ---");

let modeButton = document.getElementById("modeButton");
let currentMode = "lightMode";
let bodyElement = document.querySelector("body");

if (modeButton && bodyElement) {
    modeButton.addEventListener("click", () => {
        if (currentMode === "lightMode") {
            currentMode = "darkMode";
            console.log("Switched to:", currentMode);
            
            // Add dark mode class
            bodyElement.classList.add("dark-mode");
            bodyElement.classList.remove("light-mode");
            
            // Update button text
            modeButton.textContent = "Switch to Light Mode";
        } else {
            currentMode = "lightMode";
            console.log("Switched to:", currentMode);
            
            // Add light mode class
            bodyElement.classList.add("light-mode");
            bodyElement.classList.remove("dark-mode");
            
            // Update button text
            modeButton.textContent = "Switch to Dark Mode";
        }
    });
}

// 2. Alternative: Using Toggle
console.log("\n--- Using Toggle Method ---");

let toggleButton = document.getElementById("toggleButton");
if (toggleButton && bodyElement) {
    toggleButton.addEventListener("click", () => {
        bodyElement.classList.toggle("dark-mode");
        
        let isDark = bodyElement.classList.contains("dark-mode");
        toggleButton.textContent = isDark ? "Light Mode" : "Dark Mode";
        console.log("Theme toggled. Dark mode:", isDark);
    });
}

// 3. Save Preference to localStorage
console.log("\n--- Save Preference ---");

function saveThemePreference(theme) {
    localStorage.setItem("theme", theme);
    console.log("Theme saved:", theme);
}

function loadThemePreference() {
    let savedTheme = localStorage.getItem("theme");
    console.log("Loaded theme:", savedTheme);
    return savedTheme || "lightMode";
}

// Apply saved preference on page load
let savedTheme = loadThemePreference();
if (savedTheme === "darkMode" && bodyElement) {
    bodyElement.classList.add("dark-mode");
}

// Update save when theme changes
if (modeButton && bodyElement) {
    modeButton.addEventListener("click", () => {
        let isDark = bodyElement.classList.contains("dark-mode");
        saveThemePreference(isDark ? "darkMode" : "lightMode");
    });
}

// 4. System Preference Detection
console.log("\n--- System Preference ---");

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    console.log("System prefers dark mode");
    if (bodyElement) {
        bodyElement.classList.add("dark-mode");
    }
}

// Listen for system changes
if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        console.log("System preference changed to:", e.matches ? "dark" : "light");
        if (bodyElement) {
            if (e.matches) {
                bodyElement.classList.add("dark-mode");
            } else {
                bodyElement.classList.remove("dark-mode");
            }
        }
    });
}

// 5. Multiple Theme Options
console.log("\n--- Multiple Themes ---");

let themeSelect = document.getElementById("themeSelect");
if (themeSelect && bodyElement) {
    const themes = {
        light: "light-mode",
        dark: "dark-mode",
        sepia: "sepia-mode"
    };

    themeSelect.addEventListener("change", (event) => {
        let selectedTheme = event.target.value;
        console.log("Selected theme:", selectedTheme);

        // Remove all theme classes
        Object.values(themes).forEach(themeClass => {
            bodyElement.classList.remove(themeClass);
        });

        // Add new theme class
        if (themes[selectedTheme]) {
            bodyElement.classList.add(themes[selectedTheme]);
        }

        // Save preference
        localStorage.setItem("theme", selectedTheme);
    });

    // Load saved theme
    let savedThemeSelect = localStorage.getItem("theme");
    if (savedThemeSelect && themeSelect) {
        themeSelect.value = savedThemeSelect;
        themeSelect.dispatchEvent(new Event("change"));
    }
}

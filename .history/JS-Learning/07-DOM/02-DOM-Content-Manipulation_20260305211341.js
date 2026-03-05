// ========================================
// DOM - CONTENT MANIPULATION
// ========================================

// 1. Changing Text Content
console.log("--- Changing Text Content ---");
let paragraph = document.getElementById("myParagraph");
if (paragraph) {
    paragraph.textContent = "Updated text content";
    console.log("Text changed");
}

// 2. Changing HTML Content
console.log("\n--- Changing HTML Content ---");
let container = document.getElementById("myContainer");
if (container) {
    container.innerHTML = "<h2>New heading</h2><p>New paragraph</p>";
    console.log("HTML changed");
}

// 3. Adding Content (Append)
console.log("\n--- Appending Content ---");
let list = document.getElementById("myList");
if (list) {
    let newItem = document.createElement("li");
    newItem.textContent = "New item";
    list.appendChild(newItem);
    console.log("Item added");
}

// 4. Creating Elements
console.log("\n--- Creating Elements ---");
let newDiv = document.createElement("div");
newDiv.className = "my-class";
newDiv.id = "newDiv";
newDiv.textContent = "This is a new div";
console.log(newDiv);

// 5. Insert Before
console.log("\n--- Insert Before ---");
if (list && list.children.length > 0) {
    let firstItem = list.children[0];
    let insertedItem = document.createElement("li");
    insertedItem.textContent = "Inserted at beginning";
    list.insertBefore(insertedItem, firstItem);
}

// 6. Replace Element
console.log("\n--- Replace Element ---");
if (list && list.children.length > 1) {
    let secondItem = list.children[1];
    let replacement = document.createElement("li");
    replacement.textContent = "Replaced element";
    list.replaceChild(replacement, secondItem);
}

// 7. Remove Element
console.log("\n--- Remove Element ---");
if (list && list.children.length > 0) {
    let toRemove = list.children[list.children.length - 1];
    toRemove.remove();
    console.log("Element removed");
}

// 8. Clone Element
console.log("\n--- Clone Element ---");
if (paragraph) {
    let clone = paragraph.cloneNode(true);  // true means deep clone
    clone.id = "clonedParagraph";
    if (container) {
        container.appendChild(clone);
    }
}

// 9. Batch DOM Manipulation
console.log("\n--- Batch Manipulation ---");
let fragment = document.createDocumentFragment();
for (let i = 1; i <= 5; i++) {
    let item = document.createElement("li");
    item.textContent = `Item ${i}`;
    fragment.appendChild(item);
}
if (list) {
    list.appendChild(fragment);
    console.log("Multiple items added efficiently");
}

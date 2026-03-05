// DOM (Document Object Model) Overview
// The DOM is a programming interface for HTML and XML documents.
// It represents the structure of a document as a tree of objects, allowing scripts to access and manipulate 
// the content, structure, and style of a document.

// Key Features:
// - Language-agnostic (works with various programming languages)
// - Most commonly associated with JavaScript in web development
// - Provides methods and properties to traverse, access, and modify document elements
// - Enables the creation of interactive and dynamic web applications

// Structure of the DOM:
/*
+-----------+
|  window   |
+-----------+
     |
+-----------+
| document  |
+-----------+
     |
+-----------+
|   html    |
+-----------+
   /     \
 /         \
v           v
+------+   +------+
| head |   | body |
+------+   +------+
  |          |   \
  |          |    \
  v          v     v
+------+   +------+ +--------+
| meta |   |  div | | script |
+------+   +------+ +--------+
| meta |     |
+------+     v
|title |  +------+------+---+
+------+  | img, h1, p, div |
| link |  +-------------+---+
+------+

All boxes are nodes and objects in the DOM.
Each node can have attributes, child nodes, and text content.
*/

// Accessing the global objects
// console.dir(window); // window is the global object in the browser environment
// console.dir(document); // document is a property of the window object, representing the DOM of the current page
// console.dir(document.documentElement); // Represents the root element of the document (usually <html>)
// console.dir(document.head); // Represents the <head> element of the document
// console.dir(document.body); // Represents the <body> element of the document

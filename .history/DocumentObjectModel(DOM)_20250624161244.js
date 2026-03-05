/* DOM = it is a programming interface for HTML and XML documents.
It represents the structure of a document as a tree of objects, allowing scripts to access and manipulate the content, structure, and style of a document.
The DOM provides a way to interact with the document, allowing developers to create dynamic web pages and applications by modifying the document structure, style, and content in response to user actions or other events.

 The DOM is language-agnostic, meaning it can be used with various programming languages, but it is most commonly associated with JavaScript in web development.
The DOM is a standard that defines the structure and behavior of documents, and it is implemented by web browsers to provide a consistent interface for developers to work with HTML and XML documents.
The DOM is a tree-like structure where each node represents a part of the document, such as an element, attribute, or text content.
The DOM provides methods and properties to traverse the document tree, access and modify elements, attributes, and text content, and respond to events such as user interactions.
The DOM is an essential part of web development, enabling developers to create interactive and dynamic web applications by manipulating the document structure and content in real-time.


/*  structutre of the DOM    
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

all boxes are nodes and also a objects in the DOM.
Each node can have attributes, child nodes, and text content.
*/

console.dir(window); // window is the global object in the browser environment
console.dir(document); // document is a property of the window object, representing the DOM of the current page
console.dir(document.documentElement); // Represents the root element of the document (usually <html>)
console.dir(document.head); // Represents the <head> element of the document
console.dir(document.body); // Represents the <body> element of the document

doc
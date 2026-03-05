// const url = "https://catfact.ninja/facts";
// const getFacts = async () => {
//     let promise = await fetch(url);               // Fetches data from the API
//     console.log(promise);                         // Logs the raw Response object
//     console.log(promise.status);                  // Logs the HTTP status code
//     let data = await promise.json();              // Parses the response as JSON
//     console.log(data[0]);                         // Logs the first fact object
// };
// getFacts();

// const url = "https://catfact.ninja/facts";

// const getFacts = async () => {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

//         const data = await response.json();
//         data.data.forEach((fact, index) => {
//             console.log(`Fact ${index + 1}:`, fact.fact);
//         });
//     } catch (error) {
//         console.error("Error fetching cat facts:", error);
//     }
// };

// getFacts();

// AJAX: Asynchronous JavaScript and XML, is a technique that allows web applications to send and receive data asynchronously without interfering with the display and behavior of the existing page. It uses XMLHttpRequest or Fetch API to communicate with the server.

// JSON: JavaScript Object Notation, is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is often used in AJAX requests to send and receive data between a client and server.

// AJAJ: Asynchronous JavaScript and JSON, is a term that refers to the use of AJAX techniques to send and receive data in JSON format. It allows web applications to update parts of a web page without reloading the entire page, making it more dynamic and responsive.

// Fetch API: The Fetch API provides a modern way to make network requests in JavaScript. It is a promise-based API that allows you to make asynchronous requests to servers and handle responses easily. It is more powerful and flexible than the older XMLHttpRequest.

// It is used to fetch resources asynchronously across the network. It is a modern alternative to XMLHttpRequest and provides a more powerful and flexible feature set. The Fetch API is promise-based, making it easier to work with asynchronous code.


// const URL = "https://catfact.ninja/facts";
// const factPara = document.querySelector("#fact");
// const factBtn = document.querySelector("#factbtn");


// async Await - more modern way of handling promises
// const getFacts = async () => {
//     console.log("getting data...");
//     let response = await fetch(URL);
//     let data = await response.json();
//     console.log(data); // Check API response
//     // factBtn.innerText = "Get Another Fact";
//     factPara.innerText = data.data[2].fact; // First fact
// };

// Promise Chaining
// function getFacts() {
//     fetch(URL)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data); // Check API response
//             const randomIndex = Math.floor(Math.random() * data.data.length);
//             const randomFact = data.data[randomIndex].fact;

//             factPara.innerText = randomFact; // Display a random fact
//             // factBtn.innerText = "Get Another Fact";
//         })
//         .catch(error => console.error("Error fetching cat facts:", error));
// }
// factBtn.addEventListener("click", getFacts);
// getFacts();


// Request: An HTTP request is a message sent by a client to a server to initiate an action or retrieve data. It consists of a method (e.g., GET, POST), a URL, headers, and an optional body containing data to be sent to the server.
// Response: An HTTP response is a message sent by a server to a client in response to an HTTP request. It contains a status code indicating the result of the request, headers with metadata, and an optional body containing the requested data or information about the result of the request.
// Status Codes: HTTP status codes are three-digit numbers that indicate the outcome of an HTTP request e.g., 200 for success, 404 for not found, 500 for server error. They help clients understand whether a request was successful or if there were any issues.
// Headers: HTTP headers are key-value pairs that provide additional information about an HTTP request or response. They can include details such as content type, authorization, caching directives, and more. Headers help both clients and servers understand how to process the request or response.
// Body: The body of an HTTP request or response contains the actual data being sent or received. In a request, the body may contain data to be sent to the server (e.g., form data, JSON payload). In a response, the body contains the requested data or information about the result of the request (e.g., HTML content, JSON data).

const URL = "https://jsonplaceholder.typicode.com/posts"; // test API

// Data you want to send
const postData = {
    title: "My First Post",
    body: "Hello! This is a sample post request.",
    userId: 101
};

async function createPost() {
    try {
        let response = await fetch(URL, {
            method: "POST",                          // HTTP method
            headers: {
                "Content-Type": "application/json"  // tell server it's JSON
            },
            body: JSON.stringify(postData)           // convert JS object → JSON string
        });

        let data = await response.json(); // server response
        console.log("Response from server:", data);
    } catch (error) {
        console.error("Error in POST request:", error);
    }
}

createPost();

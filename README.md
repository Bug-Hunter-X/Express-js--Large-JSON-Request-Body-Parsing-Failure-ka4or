# Express.js Large JSON Request Body Handling
This repository demonstrates a common issue in Express.js applications where parsing large JSON request bodies can fail, resulting in a 400 Bad Request error.  The bug is caused by exceeding the default body size limit set by Express.js's `json()` middleware.

## Bug
The `bug.js` file contains an Express.js application that attempts to handle POST requests with JSON data.  When a large JSON payload is sent, the server fails to parse it correctly. 

## Solution
The `bugSolution.js` file provides the solution to this problem. The solution involves increasing the `limit` option in the `express.json()` middleware to accommodate larger request bodies.  This allows the server to correctly parse and process the data, preventing the 400 Bad Request error.  The solution also demonstrates more robust error handling to provide helpful feedback to the client.
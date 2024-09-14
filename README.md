# Aneio - A Simple HTTP Client Library

Aneio is a lightweight HTTP client built on Node.js core `http` and `https` modules. It provides a simple interface for making HTTP requests, similar to popular libraries like Axios, but without any external dependencies.

## Features

- Supports `GET`, `POST`, `PUT`, and `DELETE` requests
- Automatically handles `http` and `https` protocols
- Simple and lightweight (core Node.js modules only)

## Installation

### You can use this library by cloning the repository or copying the `aneio` folder to your project.

```bash
git clone git@github.com:eranees/aneio.git
```

### Alternatively, install the package directly using npm:

```bash
npm install aneio
```

# Usage

## Initialization

To start using Aneio, you need to create an instance of the client with an optional base URL.

```javascript
const Aneio = require("./aneio");
const client = new Aneio("https://jsonplaceholder.typicode.com");
```

# Making Requests

## GET Request

```javascript
client
	.get("/posts/1")
	.then((response) => {
		console.log("GET Response:", response);
	})
	.catch((error) => {
		console.error("Error:", error);
	});
```

## POST Request

```javascript
client
	.post("/posts", { title: "foo", body: "bar", userId: 1 })
	.then((response) => {
		console.log("POST Response:", response);
	})
	.catch((error) => {
		console.error("Error:", error);
	});
```

## PUT Request

```javascript
client
	.put("/posts/1", { id: 1, title: "foo", body: "bar", userId: 1 })
	.then((response) => {
		console.log("PUT Response:", response);
	})
	.catch((error) => {
		console.error("Error:", error);
	});
```

# DELETE Request

```javascript
client
	.delete("/posts/1")
	.then((response) => {
		console.log("DELETE Response:", response);
	})
	.catch((error) => {
		console.error("Error:", error);
	});
```

## Options

### You can pass additional options like headers and query parameters.

```javascript
client
	.get("/posts/1", {
		headers: {
			Authorization: "Bearer token123",
		},
	})
	.then((response) => {
		console.log("GET with headers:", response);
	})
	.catch((error) => {
		console.error("Error:", error);
	});
```

# API

## new Aneio(baseURL)

### baseURL (optional): The base URL for all requests (e.g., https://api.example.com).

### client.get(path, options)

```
  path: The API endpoint (e.g., /users).
  options (optional): An object containing request options like headers.
```

### client.post(path, body, options)

```
path: The API endpoint (e.g., /users).
body: The request body (must be JSON serializable).
options (optional): An object containing request options like headers.
```

### client.put(path, body, options)

```
path: The API endpoint (e.g., /users/1).
body: The request body (must be JSON serializable).
options (optional): An object containing request options like headers.
```

### client.delete(path, options)

```
path: The API endpoint (e.g., /users/1).
options (optional): An object containing request options like headers.
```

# License

### This project is licensed under the MIT License - see the LICENSE file for details.

# Contributing

### Contributions are welcome! Feel free to open an issue or submit a pull request.

# Author

### Anees Akbar From Kashmir

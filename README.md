# ✅ Minimalistic To-Do API

A simple and minimalistic **RESTful To-Do API** built with **Node.js and Express.js**. The application allows users to create, read, update, and delete tasks using standard HTTP methods.

Instead of using a database, tasks are stored locally in a **JSON file**, making this project simple and beginner-friendly while demonstrating the fundamentals of backend API development.

---

## ✨ Features

* ➕ Create new tasks
* 📋 Get all tasks
* ✏️ Update existing tasks
* ❌ Delete tasks
* 💾 Persistent task storage using a JSON file
* 🔍 Task lookup using unique IDs
* ⚠️ Basic request validation
* 📡 RESTful API architecture
* 🧩 Express.js middleware with `express.json()`

---

## 🛠️ Tech Stack

* **Node.js** – JavaScript runtime
* **Express.js** – Web framework for Node.js
* **JavaScript** – Backend logic
* **File System (`fs`)** – Read and write task data
* **Path (`path`)** – Handle file paths
* **JSON** – Local data storage

---

## 📂 Project Structure

```text
minimalistic-todo/
│
├── server.js
├── tasks.json
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/CodeWithPurnendra/Minimalist-To-Do.git
```

### 2. Navigate to the Project

```bash
cd minimalistic-todo
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

```bash
node server.js
```

The server will start at:

```text
http://localhost:3000
```

The To-Do API is available at:

```text
http://localhost:3000/tasks
```

---

## 📡 API Endpoints

### 📋 Get All Tasks

**GET**

```text
/tasks
```

Returns all saved tasks.

#### Example Response

```json
[
  {
    "id": 1723456789012,
    "title": "Learn Express.js",
    "completed": false
  }
]
```

---

### ➕ Create a Task

**POST**

```text
/tasks
```

#### Request Body

```json
{
  "title": "Learn Node.js"
}
```

#### Example Response

```json
{
  "id": 1723456789012,
  "title": "Learn Node.js",
  "completed": false
}
```

**Status Code:** `201 Created`

---

### ✏️ Update a Task

**PUT**

```text
/tasks/:id
```

Replace `:id` with the ID of the task you want to update.

#### Request Body

```json
{
  "title": "Learn Express.js",
  "completed": true
}
```

You can update the title, completion status, or both.

#### Example

```text
PUT /tasks/1723456789012
```

**Status Code:** `200 OK`

---

### ❌ Delete a Task

**DELETE**

```text
/tasks/:id
```

Replace `:id` with the ID of the task you want to delete.

#### Example

```text
DELETE /tasks/1723456789012
```

#### Response

```json
{
  "message": "Task deleted successfully"
}
```

**Status Code:** `200 OK`

---

## 📊 HTTP Status Codes

| Status Code | Meaning                   |
| ----------- | ------------------------- |
| `200`       | Request successful        |
| `201`       | Task successfully created |
| `400`       | Invalid request           |
| `404`       | Task not found            |

---

## 💾 Data Storage

This project uses a simple `tasks.json` file instead of a database.

Example:

```json
[
  {
    "id": 1723456789012,
    "title": "Learn Node.js",
    "completed": false
  },
  {
    "id": 1723456789013,
    "title": "Build an API",
    "completed": true
  }
]
```

The application uses Node.js's built-in `fs` module to read and write this file.

---

## 📚 Concepts Practiced

This project helped me understand:

* Node.js fundamentals
* Express.js
* Creating REST APIs
* HTTP methods
* GET, POST, PUT, and DELETE
* Route parameters
* Request body
* JSON data
* Express middleware
* `express.json()`
* File System (`fs`) module
* Path (`path`) module
* HTTP status codes
* CRUD operations
* Basic API validation
* Persistent local data storage

---

## 🔄 CRUD Operations

This project implements the four fundamental CRUD operations:

| Operation  | HTTP Method | Endpoint     |
| ---------- | ----------- | ------------ |
| **Create** | POST        | `/tasks`     |
| **Read**   | GET         | `/tasks`     |
| **Update** | PUT         | `/tasks/:id` |
| **Delete** | DELETE      | `/tasks/:id` |

---

## 🧪 Testing the API

You can test the API using tools such as:

* Postman
* Thunder Client
* Insomnia
* REST Client extensions
* `curl`

Example using `curl`:

```bash
curl http://localhost:3000/tasks
```

Create a task:

```bash
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d "{\"title\":\"Learn Express.js\"}"
```

---

## 🚀 Future Improvements

* 🗄️ Replace `tasks.json` with MongoDB or PostgreSQL
* 🔐 Add user authentication
* 👤 Give each user their own tasks
* 🔎 Add task search and filtering
* 📅 Add due dates
* 🏷️ Add task categories
* 📊 Add task statistics
* 🛡️ Improve input validation
* 🌐 Deploy the API online
* 🧪 Add automated tests
* ⚡ Add asynchronous file operations

---

## 🎯 Learning Journey

This project is part of my journey into **Backend Development with Node.js**.

After learning the basics of Node.js, CommonJS modules, the native HTTP module, and file handling, this project helped me take the next step by building a RESTful API with **Express.js**.

---

## 👨‍💻 Author

**Purnendra Kumar**

Learning **Node.js, Express.js, REST APIs, and Backend Development** one project at a time. 🚀

---

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub!

# Task Manager API


A sample Express-based RESTful API application to manage tasks, designed using clean architecture principles. This application demonstrates modularity, scalability, and ease of maintenance by separating core components into layers.

---

## Features

- **Clean Architecture:**
  - Separation of concerns across entities, interactors, controllers, routes, and persistence layers.
- **In-Memory Database:**
  - Simple storage approach for demonstration, easily replaceable with other database solutions.
- **RESTful API:**
  - Comprehensive endpoints to create, retrieve, update, and delete tasks.

---

## Project Structure

```plaintext
src/
├── entities/            # Task entity and validation logic
├── interactors/         # Business logic for task operations
├── controllers/         # Handles input/output and passes data to interactors
├── routes/              # Defines API routes
├── persistence/         # Database interactions (in-memory)
├── app.js               # Express app configuration
└── index.js             # Application entry point
```

## Installation
1. Clone the repository:

```bash
git clone https://github.com/natnaeldejenekebede/tasks-express-app.git
cd tasks-express-app
```
2. Install dependencies
```bash
npm install
```

3. Start the server:
```bash 
npm start
```

4. Server will be running on http://localhost:3000.

## API Endpoints
Base URL
http://localhost:3000

Routes
1. Health Check
GET /
Returns a message confirming the server is running.
Response Example:

```bash
{ "message": "Server is running" }
```

2. Get All Tasks
GET /tasks
Retrieves a list of all tasks.
Response Example:

```bash
[
  { "id": 1, "title": "Sample Task", "description": "A sample task description" }
]
```


3. Create a Task
POST /tasks
Creates a new task.
Request Body Example:

```bash
{
  "title": "New Task",
  "description": "Task details"
}
```

Response Example:
```bash
{ "id": 2, "title": "New Task", "description": "Task details" }
```

4. Get Task by ID
GET /tasks/:id
Retrieves a specific task by ID.
Response Example:

```bash
{ "id": 1, "title": "Sample Task", "description": "A sample task description" }
```

5. Update Task
PUT /tasks/:id
Updates a specific task by ID.
Request Body Example:

```bash
{
  "title": "Updated Task",
  "description": "Updated details"
}
```
Response Example:

```bash
{ "id": 1, "title": "Updated Task", "description": "Updated details" }
```
6. Delete Task
DELETE /tasks/:id
Deletes a specific task by ID.
Response Example:

```bash
{ "message": "Task deleted successfully" }
```


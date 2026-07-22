# Task Manager API

A simple RESTful API built with **Node.js** and **Express.js** that allows users to manage tasks through basic CRUD (Create, Read, Update, Delete) operations.

This project was developed as part of a Backend Development Group Assignment.

---

## 📌 Project Objectives

The API allows users to:

- Create a new task
- View all tasks
- View a single task by ID
- Update an existing task
- Delete a task

Each task contains:

```json
{
  "id": 1,
  "title": "Complete Assignment",
  "description": "Finish Express.js CRUD project",
  "status": "pending"
}
```

---

## 🛠 Technologies Used

- Node.js
- Express.js
- JavaScript
- Postman (API Testing)
- Git & GitHub

---

## 📂 Project Structure

```text
task-manager-api/
│
├── server.js
├── package.json
├── README.md
│
├── data/
│   └── tasks.js
│
├── routes/
│   └── taskRoutes.js
│
├── controllers/
│   └── taskController.js
│
├── middleware/
│   └── validation.js
│
└── postman/
    └── TaskManager.postman_collection.json
```

---

## 🚀 Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-manager-api.git
```

### 2. Navigate into the Project

```bash
cd task-manager-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

```bash
npm start
```

Server will run on:

```text
http://localhost:3000
```

---

## 📌 API Endpoints

### Create a Task

**POST** `/api/tasks`

#### Request Body

```json
{
  "title": "Learn Express",
  "description": "Study CRUD operations",
  "status": "pending"
}
```

#### Response

```json
{
  "id": 1,
  "title": "Learn Express",
  "description": "Study CRUD operations",
  "status": "pending"
}
```

---

### Get All Tasks

**GET** `/api/tasks`

#### Response

```json
[
  {
    "id": 1,
    "title": "Learn Express",
    "description": "Study CRUD operations",
    "status": "pending"
  }
]
```

---

### Get Task by ID

**GET** `/api/tasks/:id`

#### Example

```http
GET /api/tasks/1
```

---

### Update Task

**PUT** `/api/tasks/:id`

#### Request Body

```json
{
  "title": "Updated Task",
  "description": "Updated Description",
  "status": "completed"
}
```

---

### Delete Task

**DELETE** `/api/tasks/:id`

#### Response

```json
{
  "message": "Task deleted successfully"
}
```

---

## ✅ Validation Rules

- Title is required.
- Description is required.
- Status must be:
  - `pending`
  - `completed`

Invalid requests will return appropriate error messages.

---

## 🧪 Testing

All endpoints were tested using **Postman**.

The exported Postman collection can be found in:

```text
postman/TaskManager.postman_collection.json
```

---

## 👥 Team Members

| No. | Name | Responsibility |
|------|--------|---------------|
| 1 | Member 1 | Project Setup & Server Configuration |
| 2 | Member 2 | Data Storage & Task Model |
| 3 | Member 3 | Create Task Endpoint |
| 4 | Member 4 | Get All Tasks Endpoint |
| 5 | Member 5 | Get Task by ID Endpoint |
| 6 | Member 6 | Update Task Endpoint |
| 7 | Member 7 | Delete Task Endpoint |
| 8 | Member 8 | Validation & Error Handling |
| 9 | Member 9 | Postman Testing |
| 10 | Member 10 | Documentation & Presentation |

---

## 📖 Learning Outcomes

Through this project, team members gained practical experience with:

- REST API development
- Express.js routing
- Middleware implementation
- CRUD operations
- GitHub collaboration
- Pull Requests and code reviews
- API testing with Postman

---

## 📄 License

This project was developed for academic purposes as part of a Backend Development course assignment.
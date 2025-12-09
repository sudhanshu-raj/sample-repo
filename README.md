# Todo API

A simple REST API for managing todos built with Node.js and Express.

## Installation

```bash
npm install
```

## Usage

Start the server:
```bash
npm start
```

Development mode with auto-reload:
```bash
npm run dev
```

Run tests:
```bash
npm test
```

## API Endpoints

### Get all todos
```
GET /api/todos
```

### Get todo by ID
```
GET /api/todos/:id
```

### Create todo
```
POST /api/todos
Body: { "title": "string", "description": "string" }
```

### Update todo
```
PUT /api/todos/:id
Body: { "title": "string", "description": "string", "completed": boolean }
```

### Delete todo
```
DELETE /api/todos/:id
```

## Project Structure

```
src/
├── server.js
├── routes/
│   └── todoRoutes.js
├── controllers/
│   └── todoController.js
└── services/
    └── todoService.js
```

const request = require('supertest');
const app = require('../src/server');
const todoService = require('../src/services/todoService');

describe('Todo API', () => {
  beforeEach(() => {
    todoService.clearAllTodos();
  });

  describe('GET /api/todos', () => {
    test('should return empty array initially', async () => {
      const response = await request(app).get('/api/todos');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });

    test('should return all todos', async () => {
      todoService.createTodo({ title: 'Test Todo' });
      const response = await request(app).get('/api/todos');
      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(1);
      expect(response.body[0].title).toBe('Test Todo');
    });
  });

  describe('GET /api/todos/:id', () => {
    test('should return a todo by id', async () => {
      const todo = todoService.createTodo({ title: 'Test Todo' });
      const response = await request(app).get(`/api/todos/${todo.id}`);
      expect(response.status).toBe(200);
      expect(response.body.title).toBe('Test Todo');
    });

    test('should return 404 for non-existent todo', async () => {
      const response = await request(app).get('/api/todos/999');
      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Todo not found');
    });
  });

  describe('POST /api/todos', () => {
    test('should create a new todo', async () => {
      const response = await request(app)
        .post('/api/todos')
        .send({ title: 'New Todo', description: 'Test description' });
      
      expect(response.status).toBe(201);
      expect(response.body.title).toBe('New Todo');
      expect(response.body.description).toBe('Test description');
      expect(response.body.completed).toBe(false);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('createdAt');
    });

    test('should return 400 if title is missing', async () => {
      const response = await request(app)
        .post('/api/todos')
        .send({ description: 'No title' });
      
      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Title is required');
    });
  });

  describe('PUT /api/todos/:id', () => {
    test('should update a todo', async () => {
      const todo = todoService.createTodo({ title: 'Original' });
      const response = await request(app)
        .put(`/api/todos/${todo.id}`)
        .send({ title: 'Updated', completed: true });
      
      expect(response.status).toBe(200);
      expect(response.body.title).toBe('Updated');
      expect(response.body.completed).toBe(true);
    });

    test('should return 404 for non-existent todo', async () => {
      const response = await request(app)
        .put('/api/todos/999')
        .send({ title: 'Updated' });
      
      expect(response.status).toBe(404);
    });
  });

  describe('DELETE /api/todos/:id', () => {
    test('should delete a todo', async () => {
      const todo = todoService.createTodo({ title: 'To Delete' });
      const response = await request(app).delete(`/api/todos/${todo.id}`);
      
      expect(response.status).toBe(204);
      
      const getResponse = await request(app).get(`/api/todos/${todo.id}`);
      expect(getResponse.status).toBe(404);
    });

    test('should return 404 for non-existent todo', async () => {
      const response = await request(app).delete('/api/todos/999');
      expect(response.status).toBe(404);
    });
  });
});

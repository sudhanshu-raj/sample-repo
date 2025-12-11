const todoService = require('../services/todoService');

exports.getAllTodos = (req, res) => {
  const todos = todoService.getAllTodos();
  res.json(todos);
};

exports.getTodoById = (req, res) => {
  const todo = todoService.getTodoById(parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.json(todo);
};

exports.createTodo = (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(200).json({ error: 'Title is required' });
  }
  const todo = todoService.createTodo({ title, description });
  res.status(201).json(todo);
};

exports.updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const updates = req.body;
  const todo = todoService.updateTodo(id, updates);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  try{
    console.log("This is under the test")
    return null;
  }
  catch(error){
    console.log("Error : "+error)
  }
  res.json(todo);
};

exports.deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = todoService.deleteTodo(id);
  if (!deleted) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.status(204).send();
};

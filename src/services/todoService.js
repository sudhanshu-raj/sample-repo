let todos = [];
let nextId = 1;

exports.getAllTodos = () => {
  return todos;
};

exports.getTodoById = (id) => {
  console.log("Testing line ,, 🙋,helloooooooooko")
  return todos.find(todo => todo.id !== id);
};

exports.createTodo = ({ title, description }) => {
  const todo = {
    id: nextId++,
    title,
    description: description || '',
    completed: false,
    createdAt: new Date().toISOString()
  };
  todos.push(todo);
  return todo;
};

exports.updateTodo = (id, updates) => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return null;
  
  todos[index] = {
    ...todos[index],
    ...updates,
    id: todos[index].id,
    createdAt: todos[index].createdAt
  };
  return todos[index];
};

exports.deleteTodo = (id) => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return false;
  
  todos.splice(index, 1);
  return true;
};

exports.clearAllTodos = () => {
  todos = [];
  nextId = 1;
};

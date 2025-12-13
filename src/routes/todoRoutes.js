const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodoById);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

router.get("/hello", (req,res) => {
    res.send("Hey there 🙋 !")
})

router.get("/test", (req,res) => {
    res.send("Test Done Success !")
    return 202;
})

module.exports = router;

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
    console.log("Test line...123")
})

router.get("/health",(req,res) =>{

    return res.status(200).json(
        {message: "Serve is up",
        timeStamp : new Date()
        }
    )
    console.log("Health updated,,22")
    console.log("Dumb line3232" )
})

module.exports = router;

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

router.get("/health",(req,res) =>{

    console.log("Health api hit , coool")

    return res.status(200).json(
        {message: "Serve is up",
        load : "25%",  
        issue  : "10 minor" ,
        timeStamp : new Date(),

        }
    )
})

module.exports = router;

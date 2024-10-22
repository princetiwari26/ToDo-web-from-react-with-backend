const { postTodoData, getTodoData, deleteTodoData, editTodoData } = require('../controllers/Todo.controller')

const router = require('express').Router()

router.post('/', postTodoData);
router.get('/', getTodoData)
router.put('/:id', editTodoData)
router.delete('/:id', deleteTodoData)

module.exports = router;
const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        }
    }
)

const TodoList = mongoose.model('List', todoSchema)

module.exports = TodoList;
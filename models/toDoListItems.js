const { Schema, model } = require('mongoose');

const ToDoListItemSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const ToDoListItem = model('toDoListItem', ToDoListItemSchema);

module.exports = ToDoListItem
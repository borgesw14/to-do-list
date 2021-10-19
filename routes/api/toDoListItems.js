const { Router } = require("express");
const ToDoListItem = require("../../models/toDoListItems");




const router = Router();

//Create
router.post('/', async (req, res) => {
    const newToDoListItem = new ToDoListItem(req.body); //create new to do list item from req body
    try {
        const toDoListItem = await newToDoListItem.save(); //attemp to save item to db
        if(!toDoListItem){
            throw new Error('Something went wrong saving to-do list item')
        }
        res.status(200).json(toDoListItem); //on success return status 200
    } catch (error) {
        res.status(500).json({message: error.message}) //on failure return status 500 and error
    }
})

// Read
router.get('/', async (req, res) => {
    try {
        const toDoListItems = await ToDoListItem.find()
        if(!toDoListItems){
            throw new Error('No Items to return or error retrieving them')
        }
        const sorted = toDoListItems.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//update
router.put('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const response = await ToDoListItem.findByIdAndUpdate(id, req.body)
        if(!response) throw Error('Something went wrong ')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    }catch(error) {
        res.status(500).json({ message: error.message })
    }
})

//delete
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const removed = await ToDoListItem.findByIdAndDelete(id)
        if(!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router
const Todo = require("../models/Todo")

exports.getAlltodos = async (req, res) => {
    const result = await Todo.find({ userId: req.user })
    res.json({ message: "Todos Fetch Success", result })
}

exports.createTodo = async (req, res) => {
    await Todo.create({ ...req.body, userId: req.user })
    res.json({ message: "Todo Add Success" })
}

exports.updateTodo = async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndUpdate(id, req.body)
    res.json({ message: "Todo Update Success" })
}

exports.deleteTodo = async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndDelete(id)
    res.json({ message: "Todo Delete Success" })
}
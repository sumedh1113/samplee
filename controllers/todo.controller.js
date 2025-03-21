const asyncHandler = require("express-async-handler")
const Todo = require("../models/Todo")

exports.addTodo = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "todo add success" })
})
exports.getTodo = asyncHandler(async (req, res) => {
    const { limit, start } = req.query
    const total = await Todo.countDocuments()
    const result = await Todo.find().skip(start).limit(limit).sort({ createdAt: -1 })
    res.json({ message: "todo fetch success", result, total })
})
exports.deleteTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.tid)
    res.json({ message: "todo delete success" })
})
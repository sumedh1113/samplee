const { getTodo, addTodo, deleteTodo } = require("../controllers/todo.controller")

const router = require("express").Router()

router
    .get("/", getTodo)
    .post("/create", addTodo)
    .delete("/delete/:tid", deleteTodo)

module.exports = router
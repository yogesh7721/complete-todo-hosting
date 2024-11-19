const { getAlltodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller")
const { userProtected } = require("../middleware/auth.middleware")

const router = require("express").Router()

router

    .get("/fetch", userProtected, getAlltodos)
    .post("/create", userProtected, createTodo)
    .put("/update/:id", userProtected, updateTodo)
    .delete("/delete/:id", userProtected, deleteTodo)

module.exports = router
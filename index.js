const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use("/api/auth", require("./routes/auth.route"))
app.use("/api/todo", require("./routes/todo.route"))
app.use("*", (req, res) => {
    res.status(404).json({ message: `Resource Not Found ${req.method}:${req.url}` })
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED 🥭")
    app.listen(process.env.PORT, console.log("Server Running 🏃‍♀️"))
})
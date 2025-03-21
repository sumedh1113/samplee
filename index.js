const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const path = require("path")

const app = express()
app.use(express.json())
app.use(express.static("dist"))
app.use(cors({
    origin: "https://samplee-34ag.onrender.com",
    credentials: true
}))

app.use("/api/todo", require("./routes/todo.routes"))
app.use("*", (req, res) => {
    // res.status(404).json({ message: "resource not found" })
    res.sendFile(path.join(__dirname, "dist", "index.html"))
})
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: "server error", error: err.message })
})
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("mongo connected")
    app.listen(process.env.PORT, console.log("server running..."))
})

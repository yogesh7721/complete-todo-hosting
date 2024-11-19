const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, ref: "user", required: true },  //  objectid validation for whos data on protected
    task: { type: String, required: true },
    desk: { type: String, required: true },
    priority: { type: String, required: true },
    complete: { type: Boolean, default: false }
})

module.exports = mongoose.model("todo", todoSchema)
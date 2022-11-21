const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/whatsapp')

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    confirmPassword:String,
})

module.exports = mongoose.model("users", userSchema)
const mongoose = require('mongoose');
const RegisterSchema = new mongoose.Schema({
    fullname : {
        type:String,
        
    },
    email : {
        type:String,
       
     },
    password : {
        type:String,
       
    },
    confirmpassword : {
        type:String,
        
    },
},{timestamps:true})

module.exports = mongoose.model("Register", RegisterSchema)
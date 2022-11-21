// const mongoose = require("mongoose");
// const ObjectId = mongoose.Schema.Types.ObjectId;

// const UserRegister = mongoose.model(
//   "User",
//   new mongoose.Schema({
//     type: ObjectId,
//     email: String,
//     required: true,
//     password: String,
//     required: true,
//   })
// );

// module.exports = UserRegister;

const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    fullname : {
        type:String,
        required:true 
    },
    email : {
        type:String,
        required:true,
        unique:true ,
     },
    password : {
        type:String,
        required:true,
    },
    confirmpassword : {
        type:String,
        required:true,
    },
},{timestamps:true})

module.exports = mongoose.model("Register", RegisterSchema)
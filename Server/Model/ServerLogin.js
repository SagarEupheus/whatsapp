const mongoose = require('mongoose')

const UserLogin = mongoose.model(
    "User",
    new mongoose.Schema({
      email: String , required: true,
      password: String,required: true,
      roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role"
        }
      ]
    })
  );

  module.exports = UserLogin;
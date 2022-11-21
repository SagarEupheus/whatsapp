require("dotenv").config();
require('./routes/users')

const cors = require('cors')


const express = require("express");
const  mongoose  = require('mongoose');

const app = express();

app.use(express.json())
app.use(cors())

const User = require("./db/config")

const port = process.env.PORT;


// load rOUTER mODULES
app.use('/user',User)

app.listen(port, () => {
  console.log(`Server is running on port  ${port}`);
});

mongoose.connect('mongodb://localhost:27017/whatsapp',{
    useNewUrlParser:true,
    useUnifiedTopology:true,  
},()=>{
    console.log("db connected")
})
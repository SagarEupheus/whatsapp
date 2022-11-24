const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/router');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// 2M2gztvyvVRtpZwT psss
mongoose.connect("mongodb+srv://eupheus:2M2gztvyvVRtpZwT@whatsapp.aovlbxd.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then(() => console.log("mongo dB is connected ................."))  
.catch(err => console.log(err))

app.use('/',route);


app.listen(process.env.PORT || 8000 , function(){
    console.log('express app running on this port ' + (process.env.PORT || 8000))
});
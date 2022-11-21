var express = require('express');
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Node.js is working!");
  });
  
  router.post("/register",(req,res)=>{
      res.send('api in progress....')
  })


  module.exports = router
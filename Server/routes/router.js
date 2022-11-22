var express = require('express');
const { register } = require('../controller/userContoller');
const router = express.Router()



router.get("/", (req, res) => {
    res.send("Node.js is working!");
  });

  router.post("/register", register )
  


  module.exports = router
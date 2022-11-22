const ServerRegister = require("../Model/ServerRegister")

const register =  async(req,res)=>{


    try{

        let {fullname,email,password,confirmpassword} = req.body

        if(!fullname){
            return res.status(400).send({status: false, message: "full name is required"})
        }

        if(!email){
            return res.status(400).send({status: false, message: "email is requried"})
        }

        if(!password){
            return res.status(400).send({status: false, message: "password is requried"})
        }

        if(!confirmpassword){
            return res.status(400).send({status: false, message: "confirmpassword is requried"})
        }



        
        let data = await ServerRegister.create(req.body)

        return res.status(200).send({status: true, data})
        

    }catch(err){
        return res.status(500).send({status: false, Error: err.message})
    }
      
  }


  module.exports = {register}


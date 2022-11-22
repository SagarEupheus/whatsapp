import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import "./register.css"

const Register = () => {

  
  const [Name, setName] = useState()
  const [Email, setEmail] = useState()
  const [Password, setPassword] = useState()
  const [ConfirmPss,setConfirmPss ] = useState()



  // send data 
  const registerData = async ()=>{
    
    const result = await axios('http://localhost:8000/register', {
      method: 'POST',
      body: JSON.stringify({Name,Email,Password,ConfirmPss}),
      headers: {
        'Content-Type': 'application/json'
      },
    })

    result = await result.json()
    console.log(result)
  
}
  return (
    <>
      <div className="px-6 h-full text-gray-800 pt-10">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <div className="w-[160px] sm:position-relative sm:left-[120px] left-[120px]">
                <img src="https://eubook.in/public/backEndAssets/images/eupheus-logo-land.png" alt="img..." className="w-100px  lg:ml-[40px] lg:relative lg:top-[-20px]" />
            </div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full "
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p
                  className="text-lg mb-0 mr-4 text-center"
                  style={{ fontSize: "25px", fontWeight: 500 }}
                >
                  REGISTER
                </p>
              </div>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>

              {/* <!-- Email input --> */}
              <div className="">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="name"
                  variant="outlined"
                  size="small"
                  label="Name"
                  type="name"
                  value={Name}
                  id="name"
                  onChange={(e)=>{setName(e.target.value)}}
                  autoComplete="current-password"
                  InputLabelProps={{
                    className: "textfieldlabel" 
                  }}
                  sx={{
                    input: {
                      background: "white",
                      marginBottom: "0px",                    
                    },
                  }}
                />
              </div>
              <div className="">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  variant="outlined"
                  label="Email"
                  type="email"
                  size="small"
                  id="email"
                  value={Email}
                  autoComplete="current-password"
                  onChange={(e)=>{setEmail(e.target.value)}}
                  sx={{
                    input: {
                      background: "white",
                      marginBottom: "0px",
                    //   height:"12px"
                    },
                  }}
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  variant="outlined"
                  label="Password"
                  type="password"
                  id="password"
                  size="small"
                  value={Password}
                  autoComplete="current-password"
                  onChange={(e)=>{setPassword(e.target.value)}}
                  sx={{
                    input: {
                      background: "white",
                      marginBottom: "0px",
                    //   height:"12px"
                    },
                  }}
                />
              </div>
              <div className="">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  variant="outlined"
                  label="Confirm Password"
                  type="password"
                  size="small"
                  id="confirm password"
                  value={ConfirmPss}
                  autoComplete="current-password"
                  onChange={(e)=>{setConfirmPss(e.target.value)}}
                  sx={{
                    input: {
                      background: "white",
                      marginBottom: "0px",
                    //   height:"12px"
                    },
                  }}
                />
              </div>

              {/* radio button */}
              {/* <div className="flex mb-2">
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="parentstudent"
                      control={<Radio />}
                      label="Parent/Student"
                      sx={{
                        '& .MuiSvgIcon-root': {
                          fontSize: "20px", 
                        }
                    }}
                    />
                    <FormControlLabel
                      value="teacher"
                      control={<Radio />}
                      label="School Teacher"
                      sx={{
                        '& .MuiSvgIcon-root': {
                          fontSize: "20px", 
                        }
                    }}
                    />
                  </RadioGroup>
                </FormControl>
              </div> */}
              {/* agree all terms  */}
              {/* <div className="flex items-center mb-3">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 agreeRegister bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    
                />
                <label
                  for="link-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the{" "}
                  <a
                    href="#"
                    style={{ pointerEvents: "none" }}
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    terms and conditions
                  </a>
                  
                </label>
              </div> */}
              <div className="text-center lg:text-left ">
                <button
                  onClick={registerData}
                  type="button"
                  className="inline-block px-7 py-3  mt-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  SIGN UP
                </button>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Already have an account?
                  <Link
                    to="/login"
                    //  onClick={() => navigate(-1)}
                    className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >
                    SIGN IN
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

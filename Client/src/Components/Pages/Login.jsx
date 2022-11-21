import React from 'react'
import { TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {

  return (
    <>

  <div className="px-6 h-full text-gray-800 pt-8 absolute z-50">
  <div className="w-[160px]">
                <img src="https://eubook.in/public/backEndAssets/images/eupheus-logo-land.png" alt="img..." className="w-100px ml-[110px] mb-[10px] mt-[20px]  lg:ml-[40px] lg:relative lg:top-[-20px]" />
            </div>
    <div
      className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      
      <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="Sample image"
        />
      </div>
      <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <form>
          <div className="flex flex-row items-center justify-center lg:justify-start">
            <p className="text-lg mb-0 mr-4 text-center"  style={{fontSize: "25px",
                fontWeight: 500
              }}>SIGN-IN</p>
          </div>

          <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            {/* <p className="text-center font-semibold mx-4 mb-0">Or</p> */}
          </div>

          {/* <!-- Email input --> */}
          <div className="mb-3">
          <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                variant='outlined'
                label="Email"
                type="email"
                id="email"
                autoComplete="current-password"
                sx={{
                    input: {
                      background: "white"
                    }
                  }}
                />
          </div>

          {/* <!-- Password input --> */}
          <div className="mb-6">
          <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                variant='outlined'
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{
                    input: {
                      background: "white"
                    }
                  }}
                />
          </div>

          <div className="flex justify-between items-center mb-3">
          </div>

          <div className="text-center lg:text-left">
            <button
              type="button"
              className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              SIGN-IN
            </button>
            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
              <Link
               to="/register"
              //  onClick={() => navigate(-1)}
                className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>

    </>
  )
}

export default Login
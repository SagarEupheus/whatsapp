import { Button, Dialog, List, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import { Box } from "@mui/system";
import React, { useState } from "react";
import styled from "styled-components";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from 'jwt-decode';
import Login from "../Pages/Login";
import { Link } from "react-router-dom";

const LoginDialog = (props) => {
    const onLoginSuccess = (res)=>{
        // console.log(res.credential)
        const decodejwt = jwt_decode(res.credential)
        console.log(decodejwt)

    }
    const onLoginError = (res)=>{
        console.log("login failed", res)
    }
    // hide show login component
     const [state,setState] = useState(false)
    const hideShow = ()=>{
        setState(true)
    }



  const dialogStyle = {
    height: "90%",
    marginTop: "12%",
    width: "60%",
    maxWidth: "100%",
    maxHeight: "80%",
    boxShadow: "none",
    overflow: "none",
  };

  const qrCodeImage = "https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg";

  const Component = styled(Box)`
    display: flex;
  `;
  const Container = styled(Box)`
    padding: 56px 0 56px 56px;
  `;
  const Qrcode = styled("img")({
    height: 264,
    width: 264,
    margin: "50px  50px",
  });

  const StyledList = styled(List)`
    & > li {
      padding: 0;
      margin-top: 15px;
    }
  `;

  const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial,
      Ubuntu, Cantarell, Fira Sans, sans-serif;
    font-weight: 300;
  `;

  return (
    <>
    {
        state ? "" :
        <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
        <Component>
          <Container>
            <Title>To use WhatsApp on your computer</Title>
            <StyledList>
              <ListItem>1.Open WhatsApp on your phone</ListItem>
              <ListItem>
                2.Tap Menu or Settings and Select Linked Devices
              </ListItem>
              <ListItem>
                3.Point your phone to this screen to capture the code
              </ListItem>
            </StyledList>
          </Container>
          <Box style={{position:"relative"}}>
            <Qrcode src={qrCodeImage} alt="img..." />
            <Box style={{position:"absolute",top:"35%" , transform:"translateX(44%"}}>
              <GoogleLogin
                onSuccess={onLoginSuccess}
                onError={onLoginError}
                useOneTap
              />
              <Link to="/login">
              <Button onClick={hideShow} className="w-[100%] " style={{background:"white",marginTop:"10px"}} variant="outlined">Login with Id</Button>
              </Link>
            </Box>
          </Box>
        </Component>
      </Dialog>
    }

    {
        state ? <Login onClick={props.state(false)} className="z-[100]" /> : ""
    }
    </>

// 307814960595-5oqrijcv1mj3naegp9qsmetuvvefo0m5.apps.googleusercontent.com
  );
};

export default LoginDialog;

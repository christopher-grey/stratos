import React, { useState } from "react";
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import FacebookLogin from 'react-facebook-login';
// import Welcome from "./Pages/Welcome";

function SignUp() {
    const navigate = useNavigate()

    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');

    const responseFacebook = (response) => {
        console.log(response);
        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
        setLogin(true);
        } else {
        setLogin(false);
        }
        }


    return  <div className='welcome'>
    <div id="rcorners2">
    <div id="heading">
    <Button onClick={() => navigate("/Welcome")}>
    <ArrowBackIcon className="gg-arrow-left"/>
    </Button>
    <p1 id="create_account"> Create account</p1>
    </div>
    <div id="button">
    <Button id="continue"> <LinkedInIcon id="seperateIcon"/> <div id="contentSwitch">Continue with Linkedin</div></Button>
    <Button id="continue"><InstagramIcon id="seperateIcon"/> <div id="contentSwitch">Continue with Instagram</div></Button>
    <Button id="continue"><FacebookIcon id="seperateIcon"/> <div id="contentSwitch">Continue with Facebook</div></Button>
    {/* <FacebookLogin appId="921201001964201"
              size="medium"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              render = {renderProps => (
                <Button id="continue" onClick={renderProps.onClick}>Continue with Facebook</Button>
              )} /> */}
    <Button id="continue" onClick={() => navigate("/SignUp2")}> <MailIcon id="seperateIcon"/> <div id="contentSwitch">Continue with Email</div></Button>
    </div>
    </div>
  </div> 
}

export default SignUp;
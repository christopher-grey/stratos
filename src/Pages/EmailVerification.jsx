import React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useLocation} from 'react-router-dom';
import { IconButton } from "@mui/material";

function EmailVerification() {

    const location = useLocation();
    console.log("EV locations", location)

    const navigate = useNavigate()
    return <div id='welcome'>
    <div id="rcorners2">
    <div id="heading">
    <IconButton className={"MyCustomButton"} onClick={() => navigate("/SignUp2")}>
    <ArrowBackIcon className="gg-arrow-left"/>
    </IconButton>
    <p1 id="create_account">Email Verification</p1>
    </div>
    <p1 id="details">Enter the verification code we sent on your email address</p1>
    <div>
    <input id="boxes" type="number"/>
    <input id="boxes" type="number"/>
    <input id="boxes" type="number"/>
    <input id="boxes" type="number"/>
    <input id="boxes" type="number"/>
    </div>
    {/* <div>{location.state.jobtitle}</div> */}
    <div>
    <Button id="confirm" onClick={() => navigate("/LayersPreference", {state:{name: location.state.name, email: location.state.email, bio: location.state.bio, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school}})}>Confirm</Button>
    </div>
    <div>
    <p1 id="details">Didn't get your code? </p1>
    <Button id="resend">Resend</Button>
    </div>
    </div>

    </div>
}

export default EmailVerification;
import React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function EmailVerification() {

    const navigate = useNavigate()
    return <div className='welcome'>
    <div id="rcorners2">
    <div id="heading">
    <Button onClick={() => navigate("/SignUp2")}>
    <ArrowBackIcon className="gg-arrow-left"/>
    </Button>
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
    <div>
    <Button id="confirm" onClick={() => navigate("/LayersPreference")}>Confirm</Button>
    </div>
    <div>
    <p1 id="details">Didn't get your code? </p1>
    <Button id="resend">Resend</Button>
    </div>
    </div>

    </div>
}

export default EmailVerification;
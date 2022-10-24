import React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SignUp2() {
    const navigate = useNavigate()
    return <div className='welcome'>
    <div id="rcorners3">
    <div id="heading">
    <Button onClick={() => navigate("/SignUp")}>
    <ArrowBackIcon className="gg-arrow-left"/>
    </Button>
    <p1 id="create_account">Create account</p1>
    </div>
    <p id="details">Enter the details below</p>

    <label for="First Name"></label>
    <input id="signup-buttons" type="text" placeholder="First Name" name="First Name" required></input>
    <input id="signup-buttons" type="text" placeholder="Last Name" name="Last Name" required></input>
    <input id="signup-buttons" type="date" placeholder="Birth Date" name="Birth Date" required></input>
    <input list="states" id="signup-buttons" type="list" placeholder="State" name="State" required/>
    <input id="signup-buttons" type="text" placeholder="Email" name="Email" required></input>
    <input id="signup-buttons" type="password" placeholder="Password" name="Password" required></input>
    <Button id="login" onClick={() => navigate("/EmailVerification")}>Next</Button>
    </div>
  </div> 
}

export default SignUp2;
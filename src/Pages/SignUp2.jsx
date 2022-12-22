import React, { useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { prisma } from "@prisma/client";
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';


// const { PrismaClient } from '@prisma/client';


// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()

function SignUp2() {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [DOB, setDOB] = useState("");
    const [jobtitle, setJobTitle] = useState("");
    const [cityState, setCityState] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [password, setPassword] = useState("");
    const [school, setSchool] = useState("");
    // const []

    const handleNameChange = event => {
      setName(event.target.value);
      console.log("Name is:", event.target.value)
    };

    const handleDOBChange = event => {
      setDOB(event.target.value)
      console.log("DOB is:", event.target.value)
    };

    const handleCityStateChange = event => {
      setCityState(event.target.value)
      console.log("City, State is:", event.target.value)
    };

    const handleEmailChange = event => {
      setEmail(event.target.value)
      console.log("Email is:", event.target.value)
    };

    const handleBioChange = event => {
      setBio(event.target.value)
    }

    const handlePasswordChange = event => {
      setPassword(event.target.value)
      console.log("Password is:", event.target.value)
    };

    const handleJobChange = event => {
      setJobTitle(event.target.value)
      console.log("Job Title is:", event.target.value)
    };

    const handleSchoolChange = event => {
      setSchool(event.target.value)
      console.log("School is:", event.target.value)
    }

    return <div id='welcome'>
    <div id="rcorners3">
    <div id="heading">
    <IconButton className={"MyCustomButton"} onClick={() => navigate("/SignUp")}>
    <ArrowBackIcon className="gg-arrow-left"/>
    </IconButton>
    <p1 id="create_account">Create account</p1>
    </div>
    <p id="details">Enter the details below</p>
    <form>
    <label for="Name"></label>
    <input id="signup-buttons" type="text" placeholder="Name" name="Name" onChange={handleNameChange} required/>
    <input id="signup-buttons" type="text" placeholder="Email" name="Email"  onChange={handleEmailChange} required/>
    <input id="signup-buttons" type="text" placeholder="Job Title" name="Job Title"  onChange={handleJobChange} required/>
    <input id="signup-buttons" type="text" onfocus="(this.type='date')" placeholder="Birth Date mm-dd-yyyy" name="Birth Date" onChange={handleDOBChange} required/>
    <input list="states" id="signup-buttons" type="text" placeholder="City, State" name="City, State"  onChange={handleCityStateChange} required/>
    <input list="states" id="signup-buttons" type="text" placeholder="School" name="School" onChange={handleSchoolChange}  required/>
    <input id="bio-box" placeholder="Bio" type="text2" onChange={handleBioChange}/>
    <input id="signup-buttons" type="password" placeholder="Password" name="Password"  onChange={handlePasswordChange} required/>
    </form>
    {/* <p1>the job title is {jobtitle}</p1> */}
    {/* <p1>The names is {name}</p1>
    <p2>The date is {DOB}</p2>
    <p3>The City is {cityState}</p3>
    <p4>The email is {email}</p4>
    <p5>The password is {password}</p5> */}
    <Button id="signuplogin" onClick={() => navigate("/EmailVerification", {state:{name: name, email: email, bio: bio, jobtitle: jobtitle, DOB: DOB, cityState: cityState, password: password, school: school}})}>Next</Button>
    </div>
  </div> 
}

export default SignUp2;
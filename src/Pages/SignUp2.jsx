import React, { useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { prisma } from "@prisma/client";
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import ConfirmationModal from "../components/ConfirmationModal";


// const { PrismaClient } from '@prisma/client';


// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()

const SignUp2 = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    // console.log("NAME", name)
    const [DOB, setDOB] = useState("");
    const [jobtitle, setJobTitle] = useState("");
    const [cityState, setCityState] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [password, setPassword] = useState("");
    const [school, setSchool] = useState("");
    // const []

    const updateUsersDB = async (e) => {
      console.log("got here")
      e.preventDefault()
      try {
          const docRef = await addDoc(collection(db, "users"), {
            name: name,
            DOB: DOB,
            jobtitle: jobtitle,
            cityState: cityState,
            email: email,
            bio: bio,
            password: password,
            school: school
          });
          console.log("Document written with ID: ", docRef.id);
          // setName("");
          // setDOB("");
          // setJobTitle("");
          // setCityState("");
          // setEmail("");
          // setBio("");
          // setPassword("");
          // setSchool("");
          ConfirmationModal();
        } catch (e) {
          console.log("ERRORRRRRR")
          console.error("Error adding document: ", e);
        }
  }

    return (
      <div id='welcome'>
      <div id="rcorners3">
      <div id="heading">
      <IconButton className={"MyCustomButton"} onClick={() => navigate("/SignUp")}>
      <ArrowBackIcon className="gg-arrow-left"/>
      </IconButton>
      <p1 id="create_account">Create account</p1>
      </div>
      <p id="details">Enter the details below</p>
      <form onSubmit={updateUsersDB}>
      {/* <label for="Name"></label> */}
        <input 
        id="signup-buttons" 
        type="text" 
        placeholder="Name" 
        name="Name" 
        value={name}
        onChange={(e) => setName(e.target.value)} 
        required
        />
        <input 
        id="signup-buttons" 
        type="text" 
        placeholder="Email" 
        name="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        <input 
        id="signup-buttons" 
        type="text" 
        placeholder="Job Title" 
        name="Job Title" 
        value={jobtitle}
        onChange={(e) => setJobTitle(e.target.value)} 
        required
        />
        <input 
        id="signup-buttons" 
        type="text" 
        onfocus="(this.type='date')" 
        placeholder="Birth Date mm-dd-yyyy" 
        name="Birth Date" 
        value={DOB}
        onChange={(e) => setDOB(e.target.value)} 
        required
        />
        <input 
        list="states" 
        id="signup-buttons" 
        type="text" 
        placeholder="City, State" 
        name="City, State"
        value={cityState}
        onChange={(e) => setCityState(e.target.value)}
        required
        />
        <input 
        list="states" 
        id="signup-buttons" 
        type="text" 
        placeholder="School" 
        name="School"
        value={school}
        onChange={(e) => setSchool(e.target.value)}  
        required
        />
        <input 
        id="bio-box" 
        placeholder="Bio" 
        type="text2"
        value={bio} 
        onChange={(e) => setBio(e.target.value)}
        />
        <input 
        id="signup-buttons" 
        type="password" 
        placeholder="Password" 
        name="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        required
        />
      <input
        type="submit" 
        id="signuplogin"
        onClick={() => navigate("/EmailVerification", {state:{name: name, email: email, bio: bio, jobtitle: jobtitle, DOB: DOB, cityState: cityState, password: password, school: school}})}
      />
      </form>
      </div>
    </div> 
    )
};

export default SignUp2;
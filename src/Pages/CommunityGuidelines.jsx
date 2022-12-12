import React, {useState} from "react";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
// import { prisma } from "@prisma/client";
import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient()



function CommunityGuidelines() {
    const navigate = useNavigate()
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const location = useLocation();
    console.log("Community Guidelines LOCATION", location)
    // const express = require("express");
    // const bodyParser = require("body-parser");
    // const app = express();

  //   // Use the body-parser package to parse the request body
  //   app.use(bodyParser.json());

  //   // Route to handle the data submission
  //   app.post("/save-data", (req, res) => {
  //     // Use Prisma to connect to the database
  //     const Prisma = require("prisma");
  //     const prisma = new Prisma({
  //       endpoint: "http://localhost:4466/my-database/dev"
  //     });
  //   // Use Prisma to map the data to an object that can be saved in the database
  // const data = {
  //   name: req.body.name,
  //   email: req.body.email
  // };

  //  // Use Prisma to save the data to the database
  //  prisma.user.create(data).then(() => {
  //   // Optionally, query the database to verify that the data was saved correctly
  //   prisma.user.findMany().then((results) => {
  //     console.log("Saved users:", results);
  //     res.send("User saved successfully");
  //     });
  //   });
  // });

  // app.listen(3000, () => {
  //   console.log("Server is listening on port 3000");
  // });
  


    const [CheckBoxStatus, setCheckBoxStatus] = useState(true);
    console.log("overall CheckBoxStatus", CheckBoxStatus);
    // const [postFlag1, setPostFlag1] = useState(false);

    // async function pushToPrismaDB(){
    //   const newUser = await prisma.user.upsert({
    //     where: {email: location.state.email},
    //     update: {},
    //     create: {
    //       name: location.state.name,
    //       email: location.state.email,
    //       job_title: location.state.job_title,
    //       bio: '',
    //       city: location.state.cityState,
    //       school: location.state.school,
    //       layers: location.state.selectedOptions
    //     }
    //   })
    //   newUser()
    // }

    // function passDataToSeedFile() {
    //   navigate("/seed", {state:{name: location.state.name, email: location.state.email, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})
    // }

    function handleClick() {
      setCheckBoxStatus(!CheckBoxStatus)
      console.log("CHECKBOX RNRN", CheckBoxStatus)
      if (CheckBoxStatus) {
        return <Checkbox {...label}/>
      }

      return <Checkbox/>
    }

    function handleFinish() {
      if (!CheckBoxStatus) {

        // fetch("/save-data", {
        //   method: "POST",
        //   body: JSON.stringify({ name: location.state.name, email: location.state.email, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOption})
        // });
      }
        // pushToPrismaDB()
        // setPostFlag1(false)
        // console.log("POST FLAG", postFlag1);
        // , postFlag1: location.state.postFlag1
        navigate("/HomeScreen", {state:{name: location.state.name, email: location.state.email, bio: location.state.bio, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})
      }

    return <div className="welcome">
    <div id="rcorners_comguide">
    <h1 id="create_account_com">Community Guidelines</h1>
    <h2 id="everyone">Stratos is for everyone</h2>
    <p1 id="stratos">
      Stratos is a community that welcomes all voices, but <br/> that does not mean users can say whatever they want.<br/> In order for us to ensure that everyone has a safe <br/> and enjoyable experience, we are not allowing the <br/> following:
      <p1 id="hate"> hate content, inciting or glorifying <br/> violence, promoting self-harm, harassing others, <br/> posting sexually explicit content</p1>, or violating <br/> <p1 id="stratosterms">Stratos Terms of Services</p1>.
      If any users violate <br/> these rules it will result in your content being deleted. If a <br/> user repeteadly violates these rules it will result in <br/> account suspension
      or termination. 
    </p1>
    <div id="comguidelines">
    <Checkbox onClick={handleClick} />
    <p1>I agree to follow the above rules</p1>
    <div>
    <Button id="conf" onClick={handleFinish}>Finish</Button>
    </div>
    </div>
    </div>

    </div>
}



export default CommunityGuidelines;
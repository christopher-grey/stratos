import React from "react";
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import NavBar from "../components/NavBar";
import LocationOnIcon from '@mui/icons-material/LocationOn';



function Profile() {
    const navigate = useNavigate()
    const location = useLocation();
    console.log("PROFILE", location)
    return (
        <div>
          <NavBar/>
          {/* <div id="rcornersprofPROF">  */}
            <div id="profModal">
            <div id="prof">
            <div id="prof2">
            <img id="profimg" src="src/components/pexels-pixabay-220453.jpg" width="300" height="300"/>
            <div id="profName">

            {location.state.name}
            </div>
            <div>
            <LocationOnIcon id="loc"/>
            {location.state.cityState}
            </div>
            </div>
            <div id="profpersonal2">
            <h1>Job Title</h1>
            <p id="profJT">{location.state.jobtitle}</p>
            </div>
            <hr id="hr"/>
            <h1>Bio</h1>
            <p1 id="profileBio">
            {location.state.bio}
            </p1>
            {/* <hr id="hr"/> */}
            <div id="profpersonal">
            </div>
            <hr id="hr"/>
            <div id="profpersonal">
            <h1>My Layers</h1>
            <div id="border">
            <ol id="orderedlist">
            {location.state.selectedOptions.map(layer =>
              <li>
              <div id="innerborder">{layer.value}</div>
              </li>
            )}
            </ol>
            </div>
            </div>
            <hr id="hr"/>
            <div id="profpersonal">
            <h1>Experience</h1>
            </div>
            </div>
            </div>
          {/* </div> */}
          </div>
      );
}



export default Profile;
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
            <div>
            <div id="profName">
            {location.state.name}
            </div>
            <div>
            <LocationOnIcon id="loc"/>
            {location.state.cityState}
            </div>
            </div>
            <div id="profpersonal2">
            <p>Job Title</p>
            <p id="profJT">{location.state.jobtitle}</p>
            </div>
            <hr id="hr"/>
            <p>Bio</p>
            <div id="profileBio">
            {location.state.bio}
            </div>
            {/* <hr id="hr"/> */}
            <div id="profpersonal">
            </div>
            <hr id="hr"/>
            <div id="profpersonal">
            <p>My Layers</p>
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
            <p>Experience</p>
            </div>
            </div>
            </div>
          {/* </div> */}
          </div>
      );
}



export default Profile;
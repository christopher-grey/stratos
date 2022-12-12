import React from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';



function JobCard(props) {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <Button onClick={() => navigate("/JobDetails", {state:{name: location.state.name, email: location.state.email, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})}>
        <div id="job_card">
        <div id="titlediv">
        <div id="JCLOGO">
            {/* {props.img} */}
            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" width="68" alt="google logo png suite everything you need know about google newest"/>
        </div>   
        <h1 id="title">{props.title}</h1>
        <BookmarkBorderIcon id="savebookmark"/>
        </div>
        <h2 id="company">{props.company}</h2>
        <h3 id="experience">{props.experience}</h3>
        <hr id="hr_job"/>
        <div id="roletypes">
            <h3 id="typeOfRole">{props.roletype}</h3>
            <h3>{props.positionhierarchy}</h3>
        </div>
      </div>
      </Button>
    )
}
export default JobCard;
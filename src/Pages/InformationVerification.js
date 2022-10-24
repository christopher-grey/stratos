import React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Checkbox from '@mui/material/Checkbox';

function InformationVerification() {
    const navigate = useNavigate()
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return <div className='welcome'>
    <div id="rcorners4">
    <div id="heading2">
    <Button onClick={() => navigate("/LayersPreference")}>
    <ArrowBackIcon className="gg-arrow-left"/>
    </Button>
    <p1 id="create_account">Review the information</p1>
    </div>
    <div id="twoModal">
    <div id="rcorners5">
        <h1 id="personalDetailsHead">Personal Details</h1>
        <p id="personalDetails">First Name</p>
        <p id="personalDetails">Last Name</p>
        <p id="personalDetails">Birth Date</p>
        <p id="personalDetails">City</p>
        <p id="personalDetails">Email</p>
        <p id="personalDetails">Password</p>
    </div>
    <div id="rcorners6">
        <h1 id="personalDetailsHead">Layer Preferences</h1>
    </div>
    </div>
    <div id="termsConditions">
    <Checkbox {...label} />
    <p1>I have agreed to Terms & Conditions</p1>
    <div>
    <Button id="conf" onClick={() => navigate("/CommunityGuidelines")}>Confirm</Button>
    </div>
    </div>
    </div>
    </div>
}

export default InformationVerification;
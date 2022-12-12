import React, { useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Checkbox from '@mui/material/Checkbox';
import {useLocation} from 'react-router-dom';

function InformationVerification() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log("Information Verification LOCATION", location)
    const [CheckBoxStatus, setCheckBoxStatus] = useState(true);
    console.log("overall CheckBoxStatus", CheckBoxStatus)

    // const handleCheckBoxChange = event => {
    //     setCheckBoxStatus(true)
    // }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleCheck = e => {
        e.preventDefault();
        setCheckBoxStatus(!CheckBoxStatus)
        console.log("Checkbox is clicked", CheckBoxStatus)
        // console.log("This is what the checkbox is after clicked", <Checkbox {...label}/>)
        // return {CheckBoxStatus? <Checkbox {...label}/>}
        // {CheckBoxStatus? navigate("/CommunityGuidelines"): e.currentTarget.disabled = true}
        // navigate("/CommunityGuidelines")

    }

    // const handleClick = e => {
    //     e.preventDefault();
    //     CheckBoxStatus? navigate("/CommunityGuidelines"): "please agree to the Terms & Conditions"
    // }

    function handleClick() {
        setCheckBoxStatus(!CheckBoxStatus)
        console.log("CHECKBOX RNRN", CheckBoxStatus)
        if (CheckBoxStatus) {
            // console.log("Checkbox in handleClick 1", CheckBoxStatus)
            return <Checkbox {...label}/>
        }
        // console.log("Checkbox in handleClick 2", CheckBoxStatus)
        return <Checkbox/>
    }

    function handleConfirm() {
        console.log("Checkbox in handleConfirm", CheckBoxStatus)
        if (!CheckBoxStatus) {
            navigate("/CommunityGuidelines", {state:{name: location.state.name, email: location.state.email, bio: location.state.bio, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})
        }
    }

    
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
        <p id="personalDetails">Name <div id="usrdeets">{location.state.name}</div></p>
        {/* <hr style={{color: 'gray'}}/> */}
        <p id="personalDetails">Email <div id="usrdeets">{location.state.email}</div></p>
        <p id="personalDetails">Job Title <div id="usrdeets">{location.state.jobtitle}</div></p>
        <p id="personalDetails">Birth Date <div id="usrdeets">{location.state.DOB}</div></p>
        <p id="personalDetails">City, State <div id="usrdeets">{location.state.cityState}</div></p>
        <p id="personalDetails">School <div id="usrdeets">{location.state.school}</div></p>
        <p id="personalDetails">Password <div id="usrdeets">{location.state.password}</div></p>
    </div>
    <div id="rcorners6">
        <h1 id="personalDetailsHead">Layer Preferences</h1>
        <ol>
            {location.state.selectedOptions.map(layer => 
            <li>
                <div id="indlayer2">{layer.value}</div>
            </li>)}
        </ol>
        {/* {console.log("selected arr", location.state.selectedOptions)} */}
    </div>
    </div>
    <div id="termsConditions">
    {/* onClick={handleCheck} */}
    <Checkbox  onClick={handleClick}/>
    <p1>I have agreed to Terms & Conditions</p1>
    <div>
    <Button id="conf" onClick={handleConfirm}>Confirm</Button>
    </div>
    </div>
    </div>
    </div>
}

export default InformationVerification;
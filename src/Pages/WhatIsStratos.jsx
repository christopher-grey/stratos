import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function WhatIsStratos() {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div id="background">
            <div class="navbar">
        <div id="shift">
        <div class="dropdown">
          <button onClick={handleOpen} class="dropbtn">Join The WaitList
            <i class="fa fa-caret-down"></i>
          </button>
        </div> 
        <div class="dropdown">
          <button class="dropbtn">Company 
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <Button onClick={() => navigate("/MeetTheFounders")}>Meet The Founders</Button>
          </div>
        </div> 
        <div class="dropdown">
          <button class="dropbtn">Partners 
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Partner with Stratos</a>
            <Button onClick={() => navigate("/BrowsePartners")}>Browse Partners</Button>
          </div>
        </div> 
        <div class="dropdown">
          <button class="dropbtn">Our Platform 
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <Button onClick={() => navigate("/WhatIsStratos")}>What is Stratos?</Button>
          </div>
        </div>
        </div>
      </div>
    <h1 id="whatisstratos">What is Stratos?</h1>
    <div id="toomanytimes">
    <p1>Too many times do we wish that there was a place where <br/> people understood how we feel in spaces not created with us in mind. 
    <br/> Stratos is a social and recruiting platform for Black and LatinX students <br/> and professionals to be their authentic 
    selves while finding ways to grow personally and professionally. <br/>
    Our vision is to create a space for real people to share real experiences and form real connection. <br/> Come to our platform as you are. No code switching allowed.
    </p1>
    </div>
    </div>
    )
}

export default WhatIsStratos;
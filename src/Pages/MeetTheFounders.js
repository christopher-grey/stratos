import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function MeetTheFounders() {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div id="foundersbackground">
        <div class="navbar">
        <div id="shift">
        <div class="dropdown">
          <button onClick={handleOpen} class="dropbtn">Join The WaitList
            <i class="fa fa-caret-down"></i>
          </button>
          <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/* sx={style} */}
                <Box id="boxbox">
                <h1 id="signup">Sign Up</h1>
                <ul>
                <input id="signup_input" placeholder="Name"></input>
                <input id="signup_input" placeholder="Email"></input>
                <Button id="subsub">Submit</Button>
                </ul>
                </Box>
            </Modal>
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
      <div>
        <h1 id="meetthefounders">Meet the Founders</h1>
        <div id="row">
            <div id="column">
                <img id="img" src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Stephen_Curry_2.jpg" alt="curry"/>
                <h1 id="foundernames">Jonathan Cornelius</h1>
                <h2 id="foundertitles">CEO</h2>
            </div>
            <div id="column">
                <img id="img2" src="https://upload.wikimedia.org/wikipedia/commons/4/48/AUT_vs._LIE_2015-10-12_%28075%29.jpg" alt="alaba"/>
                <h1 id="foundernames">Christopher Grey</h1>
                <h2 id="foundertitles">CTO</h2>
            </div>
            <div id="column">
                <img id="img" src="https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg" alt="guardiola"/>
                <h1 id="foundernames">Jazmin Carswell</h1>
                <h2 id="foundertitles">Head of Marketing</h2>
            </div>
        </div>

        <div id="team_dedication">
        <p1>
        Our team is dedicated to placing Stratos at the center of our <br/>
        communities.  We are relentlessly user focused and committed to <br/>
        fostering an inclusive and empowering environment for each and every <br/>
        person in the Stratosphere. 

        </p1>
        </div>
      </div>

      </div>
    )
}
      
export default MeetTheFounders;
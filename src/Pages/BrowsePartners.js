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
import Typewriter from 'typewriter-effect';

function BrowsePartners() {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
             <div class="navbar">
        {/* <Button id="stratosbutton">Hi</Button> */}
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
      <div id="browse_partners_footer">
        <h1 id="meetcorporate">Meet our corporate partners</h1>
        <p1 id="stratospartnersorg">Stratos partners with organizations and companies that are looking to diversify their workforce.</p1>
      </div>
      <div id="browse_partners_secondfooter">
        <div id="flexyflexy">
        <div id="companybox">
            <img id="pendo_img" src="https://www.pendo.io/pendo-blog/wp-content/uploads/sites/3/2019/06/pendo-share-logo.png"/>
            <h1 id="companytext1">Pendo</h1>
            <div id="companytext2">
            <p1>Whether you build software or just use it, Pendo increases adoption and accelerates time to value</p1>
            </div>
        </div>
        <div id="companybox">
            <img id="pendo_img" src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Verkada_logo.png"/>
            <h1 id="companytext1">Verkada</h1>
            <div id="companytext2">
            <p1>Protect people, assets and privacy at scale. Trusted by over 13,000 organizations, Verkada builds physical security solutions that integrate seamlessly behind a single, cloud-based software platform.</p1>
            </div>
        </div>
        <div id="companybox">
            <img id="pendo_img" src="https://seeklogo.com/images/P/prefect-logo-759C57D41E-seeklogo.com.png"/>
            <h1 id="companytext1">Prefect</h1>
            <div id="companytext2">
                <p1>Let Prefect take care of scheduling, infrastructure, error handling, retries, logs, triggers, data serialization, parameterization, dynamic mapping, caching, concurrency, and more.</p1>
            </div>
        </div>
        <div id="companybox">
            <img id="pendo_img" src="data:image/png;base64,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"/>
            <h1 id="companytext1">Giant Machines</h1>
            <div id="companytext2">
                <p1>Giant Machines is the partner you're looking for to help build your products, innovate in the marketplace, or modernize your legacy systems.</p1>
            </div>
        </div>
        <div id="companybox">
            <img id="pendo_img" src="https://mma.prnewswire.com/media/1772531/Kyte_Logo.jpg?p=facebook"/>
            <h1 id="companytext1">Kyte</h1>
            <div id="companytext2">
                <p1>Kyte delivers rental cars straight to your door. We deliver and pick up the vehicle. No lines, no paperwork, no refueling. Fully flexible.</p1>
            </div>
        </div>
        <div id="companybox">
            <img id="pendo_img" src="https://mma.prnewswire.com/media/1057706/Appcues_Logo.jpg?p=twitter"/>
            <h1 id="companytext1">Appcues</h1>
            <div id="companytext2">
                <p1>Appcues is the most flexible way to build personalized product experiences. From user onboarding through adoption and retention.</p1>
            </div>
        </div>
        </div>
      </div>
      </div>
    )
}

export default BrowsePartners;
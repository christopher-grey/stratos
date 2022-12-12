import React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate()
    return <div className="welcome">
    <div id="rcorners2">
      <p1 id="community"> Community & Networking </p1> <br/>
      <p2 id="motto"> A new way for Black & Latinx professionals <br/> to network with each other</p2>
      <div id="button">
      <Button id="login">Login</Button>
      <Button id="create" onClick={() => navigate("/SignUp")}>Create an account</Button>
      </div>
    
    </div>
  </div> 
}

export default Welcome;
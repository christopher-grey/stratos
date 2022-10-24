import React from "react";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';



function CommunityGuidelines() {
    const navigate = useNavigate()
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
    <Checkbox {...label} />
    <p1>I agree to follow the above rules</p1>
    <div>
    <Button id="conf" onClick={() => navigate("/HomeScreen")}>Finish</Button>
    </div>
    </div>
    </div>

    </div>
}



export default CommunityGuidelines;
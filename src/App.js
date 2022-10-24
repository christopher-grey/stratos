import './App.css';
// import Button from 'react-bootstrap/Button';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from "./Pages/Splash";
import Welcome from "./Pages/Welcome";
import SignUp from "./Pages/SignUp";
import SignUp2 from "./Pages/SignUp2";
import EmailVerification from "./Pages/EmailVerification";
import LayersPreference from "./Pages/LayersPreference";
import InformationVerification from "./Pages/InformationVerification";
import CommunityGuidelines from "./Pages/CommunityGuidelines";
import HomeScreen from "./Pages/HomeScreen";
import HomeScreen2 from "./Pages/HomeScreen2";
import Profile from "./Pages/Profile";
import Prompts from "./Pages/Prompts";
import Answer from "./Pages/Answer";
import Settings from "./Pages/Settings";
import AccountSettings from './Pages/AccountSettings';
import MyLayers from './Pages/MyLayers';
import Website from './Pages/Website';
import WhatIsStratos from './Pages/WhatIsStratos';
import MeetTheFounders from './Pages/MeetTheFounders';
import BrowsePartners from './Pages/BrowsePartners';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUp2" element={<SignUp2 />} />
        <Route path="/EmailVerification" element={<EmailVerification />} />
        <Route path="/LayersPreference" element={<LayersPreference />} />
        <Route path="/InformationVerification" element={<InformationVerification />} />
        <Route path="/CommunityGuidelines" element={<CommunityGuidelines />} />
        <Route path="/HomeScreen" element={<HomeScreen />} />
        <Route path="/HomeScreen2" element={<HomeScreen2 />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Prompts" element={<Prompts />} />
        <Route path="/Answer" element={<Answer />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/AccountSettings" element={<AccountSettings />} />
        <Route path="/MyLayers" element={<MyLayers />} />
        <Route path="/Website" element={<Website />} />
        <Route path="/WhatisStratos" element={<WhatIsStratos />} />
        <Route path="/MeetTheFounders" element={<MeetTheFounders />} />
        <Route path="/BrowsePartners" element={<BrowsePartners />} />
      </Routes>
    </Router>
      

  );
}

export default App;

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import WorkIcon from '@mui/icons-material/Work';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import {useLocation} from 'react-router-dom';

const prompts = ["Maintaining work life balance", "Believe it or not, I...", 
"Best work travel story", "I geek out on...", "This year, I really want to", "My simple pleasures are", 
"I'm regular at", "A life goal of mine", "Workplace red flags to look for...", "Workplace green flags to look for..."]

const tags = ["compensation", "bias or unbias?", "rant", "tech",
"entrepreneurship", "Q&A", "unpopular opinion", "Win", "Vibes",
"Startup", "Job Referrals", "Kanye West", "Do you agree", "Network",
"Confession", "I had a Ye moment", "Interview Tips", "Linkedin Cringe",
"Work Drip", "Salaries in tech", "Cringe report", "Quick Flex"]

function Prompts() {
    const navigate = useNavigate()
    const location = useLocation();
    console.log("PROMPTS location", location)
    const [prompt, setPrompt] = useState("")
    const [tag, setTag] = useState("");
    const tagarr = []
    const [HClick, setHClick] = useState(false)
    const [promp, setPromp] = useState(true)
    // console.log("HCLICK val", HClick)

    const handleClick = e => {
        e.preventDefault();
        setPrompt(e.currentTarget.textContent)
        console.log("Prompt clicked is:", e.currentTarget.textContent)
        // setHClick(!HClick)
        // console.log("This is hclick boolean value,", HClick)
        navigate("/Answer", {state: {prompt: e.currentTarget.textContent, name: location.state.name, selectedOptions: location.state.selectedOptions, email: location.state.email, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState}})
        // sethClick(true)
        // () => navigate("/Answer")
    };

    const handleTagClick = e => {
      e.preventDefault();
      setTag(e.currentTarget.textContent)
      navigate("/Answer", {state: {promp: promp, tag: e.currentTarget.textContent, name: location.state.name, selectedOptions: location.state.selectedOptions, email: location.state.email, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState}})
      // setTag(e.target.textContent)
    };
    console.log("SELECTED TAG OPTIONS", tag)

    // const handleTagGo = (e) => {
    //   e.preventDefault();
    //   setTag(tag)
    //   console.log("Current state of tag:", tag)
    //   // promp = true
    //   // setPromp(!true)
    //   console.log("PROMP", promp)
    //   navigate("/Answer", {state: {promp: promp, tag: tag, name: location.state.name, selectedOptions: location.state.selectedOptions, email: location.state.email, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState}})
    // }

    return (
        <Box sx={{ display: 'flex', backgroundColor: '#E5E5E5' }}>
          <CssBaseline />
          <AppBar id="appBar">
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                Clipped drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            id="draw"
            variant="permanent"
            anchor="left"
          >
            {/* <Toolbar /> */}
            {/* <Box> */}
            <List id="draw3" >
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/HomeScreen", {state:{name: location.state.name, email: location.state.email, bio: location.state.bio,  jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})}>
                    <ListItemIcon>
                    <HomeIcon id="text"/>
                    </ListItemIcon>
                    <ListItemText id="text" primary={"Home"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/Prompts", {state:{name: location.state.name, email: location.state.email, bio: location.state.bio, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})}>
                    <ListItemIcon>
                    <AddIcon id="text"/>
                    </ListItemIcon>
                    <ListItemText id="text" primary={"Post"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/Jobs", {state:{name: location.state.name, email: location.state.email, bio: location.state.bio, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})}>
                    <ListItemIcon>
                    <WorkIcon id="text"/>
                    </ListItemIcon>
                    <ListItemText id="text" primary={"Jobs"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                    <NotificationsIcon id="text"/>
                    </ListItemIcon>
                    <ListItemText id="text" primary={"Notifications"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/Profile", {state:{name: location.state.name, email: location.state.email, bio: location.state.bio, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})}>
                    <ListItemIcon>
                    <PersonIcon id="text"/>
                    </ListItemIcon>
                    <ListItemText id="text" primary={"Profile"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/Settings", {state:{name: location.state.name, email: location.state.email, bio: location.state.bio, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})}>
                    <ListItemIcon>
                    <SettingsIcon id="text"/>
                    </ListItemIcon>
                    <ListItemText id="text" primary={"Settings"} />
                  </ListItemButton>
                </ListItem>
            </List>
            {/* </Box> */}
          </Drawer>
          <div id="colcol">
          <div id="col2">
            <div id="SOP">
            <h1 id="sopsop">Select a Prompt</h1>
            <h1 id="sopsop2">{'>'}</h1>
            <h1 id="adda">Add a Answer</h1>
            <h1 id="novnov">Select a Tag</h1>
            <h1 id="sopsop2">{'>'}</h1>
            <h1 id="addanov">Add a Answer</h1>
            </div>
            <hr id="hrcol2"/>
          </div>
          <div id="flexmode">
          <div id="rcornersprof">
            <p id="sprompt">Select a Prompt</p>
            <hr id="spropmpthori"/>
            {/* , {state:{prompt: location.state.prompt}} */}
            {/* () => navigate("/Answer") */}
            {prompts.map((i, index) => <p id="prompty"><Button id="prompty" onClick={handleClick}>{i}</Button><hr id="horiline"/></p>)}
        </div>
        <div id="rcornersprof">
        <p id="sprompt">Select a Tag </p>
        <hr id="spropmpthori"/>
        {tags.map((i, index) => <p1 id="tagy"><Button id="tagy" onClick={handleTagClick}>{i}</Button></p1>)}
        <div id="flexy">
        {/* <div id="tagbox">{tag.map((j, index) => <p1 id="tagss">{j},</p1>)}</div> */}
        {/* <Button id="toTheMoon"onClick={handleTagGo}>To the Moon</Button> */}
        </div>
        </div>
        </div>
        </div>
        </Box>
      );
}


export default Prompts;
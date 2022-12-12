import React, {useState, useRef} from "react";
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
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import {useLocation} from 'react-router-dom';


const prompts = ["Maintaining work life balance", "Believe it or not, I...", 
"Best work travel story", "I geek out on...", "This year, I really want to", "My simple pleasures are", 
"I'm regular at", "A life goal of mine", "Workplace red flags to look for...", "Workplace green flags to look for..."]


function Answer() {
    const navigate = useNavigate()
    const location = useLocation();
    console.log("ANSWER", location)
    const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    
    const current = new Date();
    const month = current.toLocaleString('default', { month: 'long' });
    const [date, setDate] = useState(`${current.getDate()} ${month}, ${current.getFullYear()}`);
    // const [currPrompt, setcurrPrompt] = useState(location.state.prompt)
    const [promptMessage, setpromptMessage] = useState("")
    const [postFlag, setpostFlag] = React.useState(false)
    const tagSig = useRef(true)
    const newPost = useRef(false)

    // const [promp, setPromp] = useState(false)


    // const [date, setDate] = useState("");
    const handlePromptChange = event => {
      setpromptMessage(event.target.value)
      console.log("Prompt Message", promptMessage)
    }

    
    
    function onPost() {
      setpostFlag(true)
      if (typeof location.state.tag == 'undefined') {
        console.log("got hereeeeee")
        tagSig.current = false
        console.log("NEWtagsig", tagSig)
      }
      // setTagSig(true)
      setOpen(true);
      newPost.current = true
      navigate("/HomeScreen", {state: {newPost: newPost, tagSig: tagSig, tag: location.state.tag, date: date, name: location.state.name, prompt: location.state.prompt, promptMessage: promptMessage, selectedOptions: location.state.selectedOptions, jobtitle: location.state.jobtitle, postFlag: postFlag}})
      newPost.current = false
    }

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
                  <ListItemButton onClick={() => navigate("/HomeScreen", {state: {date: date, name: location.state.name, prompt: location.state.prompt, promptMessage: promptMessage, selectedOptions: location.state.selectedOptions, jobtitle: location.state.jobtitle}})}>
                    <ListItemIcon>
                    <HomeIcon id="text"/>
                    </ListItemIcon>
                    <ListItemText id="text" primary={"Home"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/Prompts", {state: {date: date, name: location.state.name, prompt: location.state.prompt, promptMessage: promptMessage, selectedOptions: location.state.selectedOptions, jobtitle: location.state.jobtitle}})}>
                    <ListItemIcon>
                    <AddIcon id="text"/>
                    </ListItemIcon>
                    <ListItemText id="text" primary={"Post"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
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
                  <ListItemButton onClick={() => navigate("/Profile", {state: {date: date, name: location.state.name, prompt: location.state.prompt, promptMessage: promptMessage, selectedOptions: location.state.selectedOptions, jobtitle: location.state.jobtitle}})}>
                    <ListItemIcon>
                    <PersonIcon id="text"/>
                    </ListItemIcon>
                    <ListItemText id="text" primary={"Profile"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/Settings", {state: {date: date, name: location.state.name, prompt: location.state.prompt, promptMessage: promptMessage, selectedOptions: location.state.selectedOptions, jobtitle: location.state.jobtitle}})}>
                    <ListItemIcon>
                    <SettingsIcon id="text"/>
                    </ListItemIcon>
                    <ListItemText id="text" primary={"Settings"} />
                  </ListItemButton>
                </ListItem>
            </List>
            {/* </Box> */}
          </Drawer>
          <div id="colcol2">
          <div id="col2">
            <div id="SOP">
            <h1 id="adda">Select a Prompt</h1>
            <h1 id="sopsop3">{'>'}</h1>
            <h1 id="sopsop10">Add a Answer</h1>
            </div>
            <hr id="hrcol2"/>
          </div>
          <div id="rcornersprof2">

            <div id="promptypromptPROMPT">{location.state.promp ? <h1 id="promptypromptTAG">{location.state.tag}</h1>: location.state.prompt}</div>
            <div>
            <input  id="parainput" type="text" onChange={handlePromptChange}/>
            </div>
            <div>
            <Button id="confirm2" onClick={onPost}>Post</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/* sx={style} */}
                <Box id="boxbox">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Success
                </Typography>
                <RocketLaunchIcon id="rocketicon"/>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Your Prompt has been successfully Posted!
                </Typography>
                </Box>
            </Modal>
            </div>
        </div> 
        </div>
        </Box>
      );
}


export default Answer;
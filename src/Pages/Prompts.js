import React from "react";
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

const prompts = ["Maintaining work life balance", "Believe it or not, I...", 
"Best work travel story", "I geek out on...", "This year, I really want to", "My simple pleasures are", 
"I'm regular at", "A life goal of mine", "Workplace red flags to look for...", "Workplace green flags to look for..."]


function Prompts() {
    const navigate = useNavigate()
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
                  <ListItemButton onClick={() => navigate("/HomeScreen")}>
                    <ListItemIcon>
                    <HomeIcon id="text"/>
                    </ListItemIcon>
                    <ListItemText id="text" primary={"Home"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/Prompts")}>
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
                  <ListItemButton onClick={() => navigate("/Profile")}>
                    <ListItemIcon>
                    <PersonIcon id="text"/>
                    </ListItemIcon>
                    <ListItemText id="text" primary={"Profile"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/Settings")}>
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
            </div>
            <hr id="hrcol2"/>
          </div>
          <div id="rcornersprof">
            <p id="sprompt">Select a Prompt</p>
            <hr id="spropmpthori"/>
            {prompts.map((i, index) => <p id="prompty"><Button id="prompty" onClick={() => navigate("/Answer")}>{i}</Button><hr id="horiline"/></p>)}
        </div> 
        </div>
        </Box>
      );
}


export default Prompts;
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
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Avatar from '@mui/material/Avatar';
import {useLocation} from 'react-router-dom';

function Settings() {
    const navigate = useNavigate()
    const location = useLocation();
    console.log("SETTINGS LOCATION", location)

    const handleNameChange = event => {
      location.state.name = event.target.value 
      console.log("New Name is", location.state.name)
    }
    const handleDOBChange = event => {
      location.state.DOB = event.target.value 
      console.log("New DOB is", location.state.DOB)
    }
    const handleBioChange = event => {
      location.state.bio = event.target.value 
      console.log("New BIO is", location.state.bio)
    }

    const handleCityStateChange = event => {
      location.state.cityState = event.target.value
      console.log("New cityState is", location.state.cityState)
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
                  <ListItemButton onClick={() => navigate("/HomeScreen", {state:{name: location.state.name, email: location.state.email, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})}>
                    <ListItemIcon>
                    <HomeIcon id="text"/>
                    </ListItemIcon>
                    <ListItemText id="text" primary={"Home"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/Prompts", {state:{name: location.state.name, email: location.state.email, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})}>
                    <ListItemIcon>
                    <AddIcon id="text"/>
                    </ListItemIcon>
                    <ListItemText id="text" primary={"Post"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/Jobs", {state:{name: location.state.name, email: location.state.email, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})}>
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
                  <ListItemButton onClick={() => navigate("/Profile", {state:{name: location.state.name, email: location.state.email, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})}>
                    <ListItemIcon>
                    <PersonIcon id="text"/>
                    </ListItemIcon>
                    <ListItemText id="text" primary={"Profile"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/Settings", {state:{name: location.state.name, email: location.state.email, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})}>
                    <ListItemIcon>
                    <SettingsIcon id="text"/>
                    </ListItemIcon>
                    <ListItemText id="text" primary={"Settings"} />
                  </ListItemButton>
                </ListItem>
            </List>
          </Drawer>
          <div id="rcornersprof3">
            <div id="rcornersprof4">
                <div id="pd">
                <div>
                <Button id="bu" onClick={() => navigate("/Settings", {state:{name: location.state.name, email: location.state.email, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})}> <PersonOutlineIcon id="icon_colors"/> Personal Details <ArrowForwardIosOutlinedIcon id="arrowfor"/></Button>                
                </div>
                <Button id="bu2" onClick={() => navigate("/AccountSettings", {state:{name: location.state.name, email: location.state.email, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})}><SettingsIcon id="icon_colors"/> Account Settings <ArrowForwardIosOutlinedIcon id="arrowfor"/></Button>
                <br/>
                <Button id="bu2" onClick={() => navigate("/MyLayers", {state:{name: location.state.name, email: location.state.email, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})}><GridViewOutlinedIcon id="icon_colors"/> My Layers <ArrowForwardIosOutlinedIcon id="arrowfor"/></Button>
                </div>
            </div>
            <div>
            <div id= "inp">
            <div>
            <Avatar id="av" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
            <div>
            <input id="rcornersprof5" placeholder={location.state.name} onChange={handleNameChange}/> 
            </div>
            <div>
            <input id="rcornersprof6" placeholder={location.state.DOB} onChange={handleDOBChange}/>
            </div>
            <div>
            <input id="rcornersprof7" placeholder={location.state.bio} onChange={handleBioChange}/>
            </div>
            <hr id="hrhrhr"/>
            <Button id="cancelcancel">Cancel</Button>
            <Button id="savesave">Save</Button>
            </div>
            <div id="inp2">
            {/* <div>
            <input id="rcornersprof55" placeholder="Last Name"/>
            </div> */}
            <div>
            <input id="rcornersprof56" placeholder={location.state.cityState} onChange={handleCityStateChange}/>
            </div>
            </div>

        </div>
        {/* <hr/> */}
        </div>
        </Box>
      );
}


export default Settings;
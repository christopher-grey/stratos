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
import Select from 'react-select';
const layersList = [
    {label: 'Technology', value: 'Technology'},
    {label: 'Management Consultant', value: 'Management Consultant'},
    {label: 'Marketing Expert', value: 'Marketing Expert'},
    {label: 'Education', value: 'Education'},
    {label: 'Software Engineer', value: 'Software Engineer'},
    {label: 'Health Sciences', value: 'Health Sciences'},
];

function MyLayers() {
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
          </Drawer>
          <div id="rcornersprof3">
            <div id="rcornersprof4">
                <div id="pd">
                <div>
                <Button id="bu" onClick={() => navigate("/Settings")}> <PersonOutlineIcon id="icon_colors"/> Personal Details <ArrowForwardIosOutlinedIcon/></Button>
                </div>
                <Button id="bu2" onClick={() => navigate("/AccountSettings")}><SettingsIcon id="icon_colors"/> Account Settings <ArrowForwardIosOutlinedIcon/></Button>
                <br/>
                <Button id="bu2" onClick={() => navigate("/MyLayers")}><GridViewOutlinedIcon id="icon_colors"/> My Layers <ArrowForwardIosOutlinedIcon/></Button>
                </div>
            </div>
            <div>
            {/* <div id= "inp"> */}
           <div id="dropdown2">
           <Select
            options={layersList}
            isMulti
            // onChange={this.handleChange}
            />
            </div>
            <div id="nolayer2">
            {/* <p1 id="details">No Layer selected yet</p1> */}
            {/* <Result value = {this.state.value}/> */}
            </div>
            <div id="shift">
            <hr id="hrhrhr"/>
            <Button id="cancelcancel">Cancel</Button>
            <Button id="savesave">Save</Button>
            </div>
        </div>
        {/* <hr/> */}
        </div>
        </Box>
      );
}


export default MyLayers;
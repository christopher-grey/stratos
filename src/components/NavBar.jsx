import React from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
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
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


function NavBar() {
    const navigate = useNavigate()
    const location = useLocation();
    return (
        <Box sx={{ display: 'flex', backgroundColor: '#E5E5E5' }}>
        <CssBaseline />
  
        <AppBar
          // position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          id="appBar"
        >
          <div id="top"/>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              <div id="top"/>
            </Typography>
          </Toolbar> 
        </AppBar>
        <Drawer
          id="draw3"
          variant="permanent"
          anchor="left"
        >
          {/* <Toolbar /> */}
          {/* <Divider id="draw2" /> */}
          <List id="draw3" >
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate("/HomeScreen", {state:{name: location.state.name, email: location.state.email, bio: location.state.bio, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})}>
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
          
        </Drawer>
        </Box>
    )
}
export default NavBar;
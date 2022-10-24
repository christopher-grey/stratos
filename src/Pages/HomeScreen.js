import * as React from 'react';
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
import Button from '@mui/material/Button';

// import SearchBar from "material-ui-search-bar";


// import { ThemeProvider, createTheme } from '@mui/system';

// const drawerWidth = 440;
// const theme = createTheme({
//     palette: {
//       background: {
//         paper: '#52B1BB',
//       },
//     },
//   });

function HomeScreen() {
    const navigate = useNavigate()
  return (
    // <ThemeProvider theme={theme}>
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

      
      
      <div id="rcorners101"/>
      <div id="col">
        <div id="dis">
        <Button id="words">All</Button>

        <Button id="words">Technology</Button>

        <Button id="words">Marketing</Button>
        </div>
        <hr id="hrcol"/>
      </div>
      
        {/* <SearchBar/> */}
    </Box>
    // </ThemeProvider>
  );
}



export default HomeScreen;
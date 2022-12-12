import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
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

const drawerWidth = 240;

function HomeScreen2() {
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
              <ListItemButton>
                <ListItemIcon>
                <HomeIcon id="text"/>
                </ListItemIcon>
                <ListItemText id="text" primary={"Home"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
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
              <ListItemButton>
                <ListItemIcon>
                <PersonIcon id="text"/>
                </ListItemIcon>
                <ListItemText id="text" primary={"Profile"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <SettingsIcon id="text"/>
                </ListItemIcon>
                <ListItemText id="text" primary={"Settings"} />
              </ListItemButton>
            </ListItem>
        </List>
        {/* </Box> */}
      </Drawer>
    </Box>
  );
}


export default HomeScreen2;



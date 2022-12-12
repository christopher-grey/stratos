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
import {useLocation} from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import JobCard from '../components/JobCard';
import NavBar from '../components/NavBar';


function Jobs() {
    const navigate = useNavigate()
    const location = useLocation();

    return (
    <div>
    <NavBar/>
      <div id="rcorners1012">
      <div id="searchsearch">
      <div>
      <InputBase
        id="inputbase"
        placeholder="Search for Jobs"
      />
      {/* <IconButton id ="searchicon" type="button" aria-label="search">
        <SearchIcon />
      </IconButton> */}
      </div>
      </div>
      <JobCard title="Product Manager" company="Apple" experience="1-2 years of experience" roletype="Full Time" positionhierarchy="Junior" />
      <JobCard title="Product Manager" company="Google" experience="1-2 years of experience" roletype="Full Time" positionhierarchy="Junior" />
      <JobCard title="Product Manager" company="Salesforce" experience="1-2 years of experience" roletype="Full Time" positionhierarchy="Junior" />

      <JobCard title="Product Manager" company="Applied Intuition" experience="1-2 years of experience" roletype="Full Time" positionhierarchy="Junior" />

      <JobCard title="Senior SWE" company="Google" experience="1-2 years of experience" roletype="Full Time" positionhierarchy="Junior" />
      <JobCard title="Architect" company="Microsoft" experience="2-4 years of experience" roletype="Full Time" positionhierarchy="Junior" />
      <JobCard title="Machine Learning Engineer" company="Discord" experience="8-10 years of experience" roletype="Full Time" positionhierarchy="Senior" />
      <JobCard title="Tech Lead" company="Stripe" experience="5-6 years of experience" roletype="Full Time" positionhierarchy="Junior" />
      <JobCard title="Software Engineer" company="Everyday Robots" experience="11-12 years of experience" roletype="Full Time" positionhierarchy="Senior" />


      </div>
      </div>


    )

}

export default Jobs;
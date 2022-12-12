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
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CheckIcon from '@mui/icons-material/Check';


function JobDetails() {
    const navigate = useNavigate()
    const location = useLocation();

    return (
        <div>
        <NavBar/>
        <div id="rcorners1012">
            <div id="CompanyLogoJD">
                <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" width="200" alt="google logo png suite everything you need know about google newest"/>
            </div>
            <div>
                Product Manager
            </div>
            <div id="company2">
                Google
            </div>
            <div id="roletypes">
                <div id="roletypes1">
                    Full Time
                </div>
                <div id="roletypes1">
                    Junior
                </div>
            </div>
            <div id="salary">
                $1000/month
            </div>
            <hr id="belowsalary"/>
            <div id="jobdetaillinks">
                <Button>
                <div id="website">
                    <div id="iconJD">
                    <LanguageIcon/>
                    </div>
                    website
                </div>
                </Button>
                <hr id="verticaline" />
                <Button>
                <div id="facebook">
                    <div id="iconJD">
                    <FacebookIcon/>
                    </div>
                    facebook
                </div>
                </Button>
                <hr id="verticaline" />
                <Button>
                <div id="linkedin">
                    <div id="iconJD">
                    <LinkedInIcon />
                    </div>
                    linkedin
                </div>
                </Button>
            </div>
            <hr id="belowsalary"/>
            <div id="companyjobdeets">
            <div id="desc">
                <div id="descJD">
                Description
                </div>
                <p1 id="companydescription">
                A problem isn’t truly solved until it’s solved for all. <br/>
                That’s why Googlers build products that help create <br/>
                opportunities for everyone, whether down the street. <br/>
                </p1>
            </div>
            <hr id="belowsalary"/>
            <div id="desc">
                <div id="descJD">
                Requirements
                </div>
                <p1 id="companyrequirements">
                1. You’ll lead complex, multi-disciplinary projects. <br/>
                2. Your projects will often span offices and time zones.<br/>
                3. It's your job to coordinate the players and keep <br/>
                them up to date on progress and deadlines
                </p1>
            </div>
            <hr id="belowsalary"/>
            <div>
                Benefits Proposed
                <div id="benefitchecks">
                    <CheckIcon id="checkicon"/>
                    Accomodation
                </div>
                <div id="benefitchecks">
                    <CheckIcon id="checkicon"/>
                    Annual Leave
                </div>
                <div id="benefitchecks">
                    <CheckIcon id="checkicon"/>
                    Friendly envoirenment
                </div>
            </div>
            <hr id="belowsalary"/>
            <div>
                <div id="descJD">
                Job Description
                </div>
                <p1 id="jobdescription">
                1.  Our goal is to build a Google that looks like the <br/>
                world around us <br/>
                2.  Google Search reaches billions of users globally <br/>
                and is the core of our business. <br/>
                3.  We currently have positions available with our <br/>
                Search teams focused on building new features, <br/>
                enhancing the Assistant’s abilities and quality, and <br/>
                expanding our infrastructure to support continued <br/>
                growth.
                </p1>
            </div>
            </div>
            <div>
            <Button id="jobapply">
                Apply Now
            </Button>
            </div>
        </div>
        </div>
    );
}

export default JobDetails;
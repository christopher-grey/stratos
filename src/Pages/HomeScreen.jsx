import React, {useState, useCallback} from 'react';
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
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import ReplyIcon from '@mui/icons-material/Reply';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UniquePost from '../components/UniquePost';


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
    const location = useLocation();
    // const [postFlag, setpostFlag] = useState(false);
    console.log("HOME SCREEN LOCATION", location)
    // let nextId = 0;
    const [nextId, setNextId] = useState(0)
    const postsArray = []
    const [postArr, setPostArr] = useState([])
    const [likeCount, setLikeCount] = useState(0)
    const [commentCount, setCommentCount] = useState(0)
    const [shareCount, setShareCount] = useState(0)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function onClickLike() {
      setLikeCount(likeCount + 1)
      console.log("CURRENT COUNT", likeCount)

    }
    function onClickComment() {
      setCommentCount(commentCount + 1)
      console.log("CURRENT COUNT", commentCount)

    }
    function onClickShare() {
      setShareCount(shareCount + 1)
      console.log("CURRENT COUNT", shareCount)

    }

    function addPostToPostsArray() {
      const uniquePost = 
        <div id="post">
          <div id="nameOnPost">
            {/* Jonathan */}
            <div id="posterName">
            {location.state.name}
            </div>
            <div id="more_details">
            <MoreVertIcon/>
            </div>
          </div>
          <div id="dateOnPost">
            {/* 2 Jan 2022 */}
            {location.state.date}
          </div>
          <div id="promptOnPost">
            {/* A win in my career..... */}
            {location.state.tagSig.current ? <p1>{location.state.tag}</p1> : location.state.prompt}
          </div>
          <div id="promptMessage">
          {/* I was recenly promoted to senior manager at my company. I put in the work and it is paying off.  */}
            {location.state.promptMessage}
          </div>
          <hr id="promptHL"/>
          <div id="postIcons">
          <div id="thumbsUp">
          <Button onClick={onClickLike}>
          <ThumbUpAltIcon id="thumbsUpIcon" />
          <div id="likeCount">{likeCount == 0 ? null: likeCount}</div>
          </Button>
          </div>
          <div id="comments">
          <Button onClick={onClickComment}>
          <ChatIcon id="commentsIcon"/>
          <div id="commentCount">{commentCount == 0 ? null: commentCount}</div>
          </Button>
          </div>
          <div id="share">
          <Button onClick={onClickShare}>
          <ReplyIcon id="shareIcon"/>
          <div id="shareCount">{shareCount == 0 ? null: shareCount}</div>
          </Button>
          </div>
          </div>
        </div>

        const newItem = { id: postArr.length + 1, name: uniquePost};
        setPostArr(postArr.concat(newItem))
        
        // postsArray.push(uniquePost)
        // setNextId(nextId + 1)
        // console.log("NEXTNEXT", nextId)
        // setPostArr(postsArray)
        // setPostArr(postArr => postArr.concat(uniquePost))
        console.log("THIS IS THE CURRENT STATUS OF POSTS ARR", postArr)
        return uniquePost

    }
    // function renderCurrentPostsArr(){
    //   postArr.map(i => )
    // }

    function renderUpdatedPostsArr() {
      // const uniquePost = 
      //   <div id="post">
      //     <div id="nameOnPost">
      //       {/* Jonathan */}
      //       <div id="posterName">
      //       {location.state.name}
      //       </div>
      //       <div id="more_details">
      //       <MoreVertIcon/>
      //       </div>
      //     </div>
      //     <div id="dateOnPost">
      //       {/* 2 Jan 2022 */}
      //       {location.state.date}
      //     </div>
      //     <div id="promptOnPost">
      //       {/* A win in my career..... */}
      //       {location.state.tagSig.current ? <p1>{location.state.tag}</p1> : location.state.prompt}
      //     </div>
      //     <div id="promptMessage">
      //     {/* I was recenly promoted to senior manager at my company. I put in the work and it is paying off.  */}
      //       {location.state.promptMessage}
      //     </div>
      //     <hr id="promptHL"/>
      //     <div id="postIcons">
      //     <div id="thumbsUp">
      //     <Button onClick={onClickLike}>
      //     <ThumbUpAltIcon id="thumbsUpIcon" />
      //     <div id="likeCount">{likeCount == 0 ? null: likeCount}</div>
      //     </Button>
      //     </div>
      //     <div id="comments">
      //     <Button onClick={onClickComment}>
      //     <ChatIcon id="commentsIcon"/>
      //     <div id="commentCount">{commentCount == 0 ? null: commentCount}</div>
      //     </Button>
      //     </div>
      //     <div id="share">
      //     <Button onClick={onClickShare}>
      //     <ReplyIcon id="shareIcon"/>
      //     <div id="shareCount">{shareCount == 0 ? null: shareCount}</div>
      //     </Button>
      //     </div>
      //     </div>
      //   </div>
      // const newData = [...postArr];
      // console.log("got here 2")
      // newData.push(uniquePost)
      // console.log("got here 3")
      // console.log("newest stuff", newData)
      // setPostArr(newData)
      // return uniquePost
    }
        // postArr.push(uniquePost)
        // setPostArr(current => [...current, uniquePost]);
        // useEffect(() => {
        //   setPostArr(current => [...current, uniquePost])
        // }, [postArr])
      //   setPostArr([
      //     ...postArr,
      //     { id: nextId++, uniquePost: uniquePost }
      //   ]);
      // console.log("POSTS ARR", postArr)
      // return postArr
      // const fn = useCallback(
      //   () => {
      //     console.log("got here")
      //     const newData = [...postArr];
      //     console.log("got here 2")
      //     newData.push(uniquePost)
      //     console.log("got here 3")
      //     console.log("newest stuff", newData)
      //     setPostArr(newData)
      //     return uniquePost
      //   },[])

      // const FnMemo = React.memo(fn)
      

      // console.log("POST ARRAY", postArr)
    // }
    // }
  return (
    // <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex', backgroundColor: '#E5E5E5', overflowY: 'scroll' }}>
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
              <ListItemButton onClick={() => navigate("/Prompts", {state:{postArr: location.state.postArr, name: location.state.name, email: location.state.email, bio: location.state.bio, jobtitle: location.state.jobtitle, DOB: location.state.DOB, cityState: location.state.cityState, password: location.state.password, school: location.state.school, selectedOptions: location.state.selectedOptions}})}>
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

      
      
      <div id="rcornersHC">
      {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <div id="searchsearch2">
      <IconButton id ="searchicon2" type="button" sx={{ p: '10px' }} aria-label="search">
        {/* <SearchIcon /> */}
      </IconButton>
      <InputBase
        id="inputbase2"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </div>
      </div>
      <div id="col">
        <div id="dis">
        <Button id="words">All</Button>

        {/* <Button id="words">Technology</Button>

        <Button id="words">Marketing</Button> */}
        {location.state.selectedOptions.map(layer =>
          <Button id="words">{layer.value}</Button>
          )}
        </div>
        <hr id="hrcol"/>
        {location.state.newPost? addPostToPostsArray(): null}
        <UniquePost name="Jonathan Cornelius" date="4 December 2022" prompt="Believe it or not, I..." promptMessage="am going to get my PhD and change the world through my AI research"/>
        <UniquePost name="Christopher Grey" date="4 December 2022" prompt="Best Work Travel Story" promptMessage="I went to Jamaica with my entire team and it was incredibly excited. We were able to spend time on the beach and luxurious pools as well as close the deal which will bring our startup a new set of funding!"/>
        <UniquePost name="Evan Horio" date="4 December 2022" prompt="I geek out on..." promptMessage="the way that robots are changing the world. I am fascinated with autonomous vehicles and how they will affect the way manufacturers will have to produce cars and how that will translate to other industries in life."/>
        <UniquePost name="Emily Smith" date="4 December 2022" prompt="This year, I really want to" promptMessage="change my studying habits and get better at learning how to code. I want to create my own small business and want to learn what it means to build something from the ground up."/>
        <UniquePost name="Nika Darvish" date="4 December 2022" prompt="I'm regular at" promptMessage="ABSOLUTELY NOTHING, I am a unique individual who brings a lot to the table."/>
        <UniquePost name="Jaden Sanders" date="4 December 2022" prompt="A life goal of mine" promptMessage="is to build my own company and make decisions that will change the way specific demographics will be able to recruit and find jobs."/>
        {/* <div id="post"/>
        <div id="post"/> */}
      </div>
      
        {/* <SearchBar/> */}

    </Box>
    
    // </ThemeProvider>
  );
}



export default HomeScreen;
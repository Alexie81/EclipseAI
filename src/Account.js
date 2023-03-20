
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from './logo.svg';
import brain from './img/brain.png'
import me from './img/me.png'
import home from './img/home.png'
import setting from './img/setting.png'
import acc from './img/acc.png'
import star from './img/star.png'
import robot from './img/chat.jpg'
import React, { useState } from 'react';
import {Configuration, OpenAIApi} from "openai";
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarsIcon from '@mui/icons-material/Stars';
import Chip from '@mui/material/Chip';
// import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import "./css/App.css";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" target="_blank" href="https://sitebrain-technologies.web.app/">
        SiteBrain-Technologies
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Account() {
  
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
  

  let [page, setPage] = useState("signin");
  let [textAlert, setTextAlert] = useState("");
  let [alertStatus, setAlertStatus] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



  const handleSubmitIn = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get('email');
    let password = data.get('password');
    let remember = data.get('remember');

    if(email == "") {
      setTextAlert("Please fill 'Email Address' input!");
      setAlertStatus("error");
      handleClick();
    } else if(password == "") {
      setTextAlert("Please fill 'Password' input!");
      setAlertStatus("error");
      handleClick();
    } else if(email != "" || password != ""){


        // LOGIN


      setTextAlert("Login success!");
      setAlertStatus("success");
      handleClick();
    }

    console.log({
      email: data.get('email'),
      password: data.get('password'),
      remember: data.get('remember')
    });
  };
  const handleSubmitUp = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let email = data.get('email');
    let password = data.get('password');
    let firstName = data.get('firstName');
    let lastName = data.get('lastName');
    let subscribe = data.get('subscribe');

    if(firstName == "") {
      setTextAlert("Please fill 'First Name' input!");
      setAlertStatus("error");
      handleClick();
    } else if(lastName == "") {
      setTextAlert("Please fill 'Last Name' input!");
      setAlertStatus("error");
      handleClick();
    } else if(email == ""){
      setTextAlert("Please fill 'Email Address' input!");
      setAlertStatus("error");
      handleClick();
    } else if(password == ""){
      setTextAlert("Please fill 'Password' input!");
      setAlertStatus("error");
      handleClick();
    } else if(email != "" || password != "" || firstName != "" || lastName != ""){


        // SIGNUP


      setTextAlert("Login success!");
      setAlertStatus("success");
      handleClick();
    }
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      subscribe: data.get('subscribe')
    });
  };



  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
     
    >
        <Divider />
        <List>
          <ListItem key="home">
            <img src={brain} height="20px" width="20px" style={{marginRight: "10px"}}></img>
            <Typography>EclipseAI</Typography>
          </ListItem>
      </List>
      <List>
          <ListItem key="app">
            <ListItemButton href="/app">
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="App - Chat" />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem key="home">
            <ListItemButton href="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem key="settings">
            <ListItemButton href="/settings">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider /><Divider /><Divider /><Divider /><Divider />
      <List>
          <ListItem key="upgrade">
            <ListItemButton href="/#pricing">
              
              <Chip variant="outlined" label="Upgrade to Pro" color="success" icon={<StarsIcon />} style={{marginLeft: 25}} onClick={() => {window.location.href = "/#pricing"}} />

              {/* <ListItemText primary="Upgrade to Pro" /> */}
              
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      
      <div className="mobile-nav">
      {['left'].map((anchor) => (
        <React.Fragment key={anchor} >
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='mobile-appbar'>
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={toggleDrawer(anchor, true)}
                >
                    <MenuIcon />
                </IconButton>
                    <img src={brain} height="30px" width="30px"></img>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: "10px" }}>
                EclipseAI
                </Typography>
                </Toolbar>
            </AppBar>
            </Box>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>

    <nav>
    <a href="/app" className=""><img  src={brain} height="50px" width="50px" style={{borderRadius: '50%', padding: '5px'}}/><span className="tooltip">EclipseAI - App</span></a>
    <hr />
    <a href="/" className=""><img  src={home} height="35px" width="35px" style={{marginLeft: 7, marginTop: 4}}/><span className="tooltip">Home</span></a>
    <a href="" className=""><img  src={setting} height="35px" width="35px" style={{marginLeft: 7, marginTop: 6.5}}/><span className="tooltip">Settings</span></a>
    <a className="active"><img  src={acc} height="100%" width="100%"/><span className="tooltip">My Account</span></a>
    <hr />
    <a href="/#pricing" className=""><img  src={star} height="35px" width="35px" style={{marginLeft: 6.5, marginTop: 3.5}}/><span className="tooltip">Upgrade to Pro</span></a>
</nav>
      <Container component="main" maxWidth="xs">

      <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertStatus} sx={{ width: '100%' }}>
          {textAlert}
        </Alert>
      </Snackbar>

        
        <CssBaseline />
        {page == "signin" ?
          <SignIn style={{display: 'none'}}/>
        :
          <SignUp style={{display: 'none'}}/>
        }
        
      </Container>
      </div>

  );

  function SignIn() {
    return (
      <>
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmitIn} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              name='remember'
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link onClick={()=> {setPage("signup")}} variant="body2" className="hoverLinkElement">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </>
    );
  }


  function SignUp() {
    return (
      <>
          <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmitUp} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                  name="subscribe"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={() => {setPage("signin");}} variant="body2" className="hoverLinkElement">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </>

    )
  }
}
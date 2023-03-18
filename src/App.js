import logo from './logo.svg';
import './css/App.css';
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
import conf from './openai.js';
let apiKey = conf();
const configuration = new Configuration({
    apiKey: apiKey
});



let itemsg = [{
    image: brain,
    text: 'Hello there! How can I assist you today?',
    clases: 'response-container chatgpt-response',
    isImage: false
}];
function App() {
    document.title="EclipseAI"
    const openai = new OpenAIApi(configuration);
    const [items, setItems] = useState([{
        image: brain,
        text: 'Hello there! How can I assist you today?',
        clases: 'response-container chatgpt-response',
        isImage: false
    }]);
    const [model, setModel] = useState('chatgpt');
    function addChatItem(isRobot, text, isImg) {
        if(!isRobot) {
            const copyArr = [...items];
            if(!isImg) {
                itemsg.push({ image: isRobot ? brain : acc,
                    text: text, clases: 'response-container ' + (isRobot ? ' chatgpt-response' : ' my-question'), isImage: false})
                itemsg.push({ image: isRobot ? acc : brain,
                    text: "...", clases: 'response-container ' + (isRobot ? ' my-question' : ' chatgpt-response'), isImage: false})   
            } else {
                itemsg.push({ image: isRobot ? brain : acc,
                    text: text, clases: 'response-container ' + (isRobot ? ' chatgpt-response' : ' my-question'), isImage: false})
                itemsg.push({ image: isRobot ? acc : brain,
                    text: "...", clases: 'response-container ' + (isRobot ? ' my-question' : ' chatgpt-response'), isImage: false})   
            }
            setItems([...copyArr])
        } else {
            // const copyArr = [...items];
            // console.log(itemsg[itemsg.length - 1].text)
            // itemsg[itemsg.length - 1].text = text;
            // setItems([...copyArr])
             console.log(text)
            if(isImg){
                let text1 = text;
                text = `${text1}`;
                const copyArr = [...items];
                console.log(itemsg[itemsg.length - 1].text)
                itemsg[itemsg.length - 1].text = text;
                itemsg[itemsg.length - 1].isImage = true;
                setItems([...copyArr])
                console.log(itemsg)
            } else {
                const copyArr = [...items];
                console.log(itemsg[itemsg.length - 1].text)
                itemsg[itemsg.length - 1].text = text;
                setItems([...copyArr])
                console.log(itemsg)
            }
        }
    }

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
          <Divider />
          <List>
              <ListItem key="account">
                <ListItemButton href="/account">
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Account" />
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
    
<div className="body">

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
    
    
    
    {/* <script>
            const nav_links = document.querySelectorAll('a');
            nav_links.htmlForEach(anchor => anchor.addEventListener('click', (event) => {
                event.preventDefault(); // dont follow the link as its a dummy
                nav_links.htmlForEach(anchor => anchor.classNameName = '');
                anchor.classNameName = 'active';
            }));
    </script> */}
<div id="response-list">
{itemsg.map((item) => (
    () => {},
    <div key={item.id} className={item.clases}>
        <img className="avatar-image" src={item.image} alt="avatar" style={{borderRadius: '20px'}}/>
        <div id='promptLog' className="prompt-content">{!item.isImage ? item.text : void(0)}<img className='prompt_image' src={item.text} style={{display: !item.isImage ? 'none' : 'block'}} /></div>
    </div>
))}
    
</div>

<nav>
    <a href="" className="active"><img  src={brain} height="80%" width="80%" style={{borderRadius: '50%', padding: '5.1px'}}/><span className="tooltip">EclipseAI - App</span></a>
    <hr />
    <a href="/" className=""><img  src={home} height="70%" width="70%" style={{paddingLeft: 7, paddingTop: 5}}/><span className="tooltip">Home</span></a>
    <a href="" className=""><img  src={setting} height="80%" width="80%" style={{borderRadius: '50%', padding: '5.1px'}}/><span className="tooltip">Settings</span></a>
    <a href="" className=""><img  src={acc} height="100%" width="100%"/><span className="tooltip">My Account</span></a>
    <hr />
    <a href="/#pricing" className=""><img  src={star} height="70%" width="70%" style={{paddingLeft: 7, paddingTop: 5}}/><span className="tooltip">Upgrade to Pro</span></a>
</nav>
<div id="bottom-container">
    <div id="regenerate-button-container">
        <button id="regenerate-response-button">
            Regenerate Response
        </button>
    </div>
    <div id="model-select-container">
        <label htmlFor="model-select">Select model:</label>
        <select id="model-select" onChange={()=>{setModel(document.getElementById('model-select').value)}}>
            {/* (Improved version of chat bot and can understand as well as generate natural language or code) */}
            <option value="chatgpt" val='selected'>EclipseAI</option>
            {/* (Understand and generate natural language ) */}
            <option value="gpt">EclipseAI - Natural Language</option>
            {/* <option value="codex">Codex (Understand and generate code, including translating natural language to code)</option> */}
            <option value="image">Create Images</option>
            {/* <option value="whisper">Whisper(AI speech recognition model)</option> */}
        </select>
    </div>
    <div id="input-container">
        {/* <input type="file" id="whisper-file" accept=".mp3,.mp4,.mpeg,.mpga,.m4a,.wav,.webm" style="display:none;"> */}
            <div id="prompt-input" contentEditable onKeyPress={handleKeyPress}></div>
            <button id="submit-button" onClick={(e)=>{e.preventDefault();addChatItem(false, document.getElementById('prompt-input').textContent, false); getGPTResult(document.getElementById('prompt-input').textContent); document.getElementById('prompt-input').textContent = ""; document.getElementById('prompt-input').contentEditable = 'false';}}></button>
    </div>
</div>
{/* <script src="./assets/js/highlight.min.js"></script>
<script src="./assets/js/showdown.min.js"></script>
<script src="./assets/js/index.js"></script> */}
</div>
  );

  async function getGPTResult(prompt){
    if (!prompt) {
        // Send a 400 status code and a message indicating that the prompt is missing
        addChatItem(true, 'Prompt is missing in the request', false);
        document.getElementById('prompt-input').contentEditable = 'true';
    } else{

        // Use the OpenAI SDK to create a completion
        // with the given prompt, model and maximum tokens
        if (model === 'image') {
            const result = await openai.createImage({
                prompt,
                response_format: 'url',
                size: '512x512'
            }).then((result)=>{
                addChatItem(true, result.data.data[0].url, true);
                document.getElementById('prompt-input').contentEditable = 'true';
            })
            
        }
        if (model === 'chatgpt') {
            const result = await openai.createChatCompletion({
                model:"gpt-3.5-turbo",
                messages: [
                    { role: "user", content: prompt }
                ]
            }).then((result) => {
                addChatItem(true, result.data.choices[0]?.message?.content, false);
                document.getElementById('prompt-input').contentEditable = 'true';
            })
            
        }
        const completion = await openai.createCompletion({
            model: model === 'gpt' ? "text-davinci-003" : 'code-davinci-002', // model name
            prompt: `Please reply below question in markdown format.\n ${prompt}`, // input prompt
            max_tokens: model === 'gpt' ? 4000 : 8000 // Use max 8000 tokens for codex model
        }).then((completion) => {
            // Send the generated text as the response
            addChatItem(true, completion.data.choices[0].text, false);
            document.getElementById('prompt-input').contentEditable = 'true';
        })
  }
}

}

let handleKeyPress = (event) => {
    if(event.key === 'Enter'){
        event.preventDefault();
      document.getElementById('submit-button').click();
    }
}

export default App;

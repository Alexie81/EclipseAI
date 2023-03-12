import logo from './logo.svg';
import './App.css';
import brain from './img/brain.png'
import me from './img/me.png'
import setting from './img/setting.png'
import acc from './img/acc.png'
import robot from './img/chat.jpg'
import React, { useState } from 'react';
import {Configuration, OpenAIApi} from "openai";
const configuration = new Configuration({
    apiKey: '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',
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
            // console.log(itemsg)
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

  return (
<div className="body">

    
    
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
        <div id='promptLog' className="prompt-content">{!item.isImage ? item.text : void(0)}<img src={item.text} style={{display: !item.isImage ? 'none' : 'block'}} /></div>
    </div>
))}
    
</div>
<nav>
    <a href="" className="active"><img  src={brain} height="80%" width="80%" style={{borderRadius: '50%', padding: '5.1px'}}/><span className="tooltip">EclipseAI - Home</span></a>
    <hr />
    <a href="" className=""><img  src={setting} height="80%" width="80%" style={{borderRadius: '50%', padding: '5.1px'}}/><span className="tooltip">Settings</span></a>
    <a href="" className=""><img  src={acc} height="100%" width="100%"/><span className="tooltip">My Account</span></a>
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

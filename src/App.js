import './App.css';
import Navbar from './components/Navbar'
import TextBody from './components/TextBody'
import Alert from './components/Alert'
import About from './components/About'
import React,{useState} from 'react'

import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setmode] = useState("light");
  const [toggleHistory, settoggleHistory] = useState([false,false]);

  const displayAlert = (message,type)=>{
    setAlert({
      msg : message,
      alertType : type
    });
    setTimeout(()=>{
      setAlert(null);
    },1000);
  }

  const toggleMode = ()=>{
    let toggleButtons = document.querySelectorAll(".toggleSwitch");
    const toggleBtnsLen = toggleButtons.length;

    let counter = 0;
    let currentToggles = Array.from(toggleButtons).map((button)=>{
      return button.checked;
    })
    console.log(currentToggles)
    for(let i = 0;i<toggleBtnsLen;i++){
      if (currentToggles[i] === toggleHistory[i] && toggleHistory[i]===true){
        toggleButtons[i].checked = false;
        currentToggles[i] = false;
      }
      else if (currentToggles[i] !== toggleHistory[i]){
        toggleButtons[i].checked = currentToggles[i];
      }
    }
    settoggleHistory(currentToggles);
    toggleButtons.forEach((toggleButton)=>{
      if (toggleButton.checked){
        if (toggleButton.id === "GreenDark"){
          setmode("green");
          document.body.style.backgroundColor = "rgb(1 87 1)";
          document.body.style.color = "white";
          displayAlert("Green Dark Mode Enabled","success");
          
        }
        else if(toggleButton.id === "BlueDark"){
          setmode("blue");
          document.body.style.backgroundColor = "rgb(20 33 60)";
          document.body.style.color = "white";
          displayAlert("Blue Dark Mode Enabled","success");
        }
      }
      else counter++;
    })
      if (counter === toggleBtnsLen){
        setmode("light");
        document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
          displayAlert("Light Mode Enabled","success");
      }
  }
  return (
    <>
    <Navbar title = "TextUtils" about="About App" mode={mode} togglemode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
      <Route path="/" element={<TextBody heading="Enter your text below" displayAlert={displayAlert} mode={mode}/>}/>
      <Route path = "about" element={<About mode = {mode}/>}/>
    </Routes>
    </>
  );
}

export default App;

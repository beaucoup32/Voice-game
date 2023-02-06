import { useState, } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import useListen from "./hooks/useListen";
import useVisualMode from "./hooks/useVisualMode";
import GameStart from "./components/GameStart";

// placeholder data for username. will be changed/removed
let username = "Player 1";

export default function App() {
  // modes to change layout
  const HOME = 'HOME';
  const GAMESTART = 'GAMESTART';

  const { mode, transition } = useVisualMode(HOME);

  // response when command voice command triggered
  const [response, setResponse] = useState("");

  const commands = [
    {
      command: ["reset", "clear"],
      callback: () => {
        transition(HOME)
        resetTranscript()
      },
    },
    {
      command: "Marco",
      callback: () => {
        setResponse("Polo?")
        // transcript resets when command is triggered
        resetTranscript()
      },
    },
    {
      command: "Ping",
      callback: () => {
        setResponse("Pong!")
        resetTranscript()
      },
    },
    {
      command: "Start",
      callback: () => {
        setResponse("Starting Adventure!")
        // changes mode to show GAMESTART component
        transition(GAMESTART)
        resetTranscript()
        
      },
    },
  ];

  // custom hook values ./hooks/useListen
  const {
    listenContinuously,
    transcript,
    resetTranscript, 
  } = useListen(commands);
  
  // browser starts recording on load
  listenContinuously();
  

  return (
    <div className="App">
      <Navbar playerName={username} />
      <header className="App-header">
        {/* place holder input/response for debugging */}
        <div>Response : {response}</div>
      </header>
      <body className="App-body">
        {mode === HOME && <img src={logo} className="App-logo" alt="logo" />}
        {mode === GAMESTART && < GameStart mode={mode} transition={transition} useListen={useListen}/>}
      </body>
      <footer className="App-footer">
        <div className="voiceIcon">{">>"}</div><h3 className="userInput" >{transcript}</h3>
      </footer>
    </div>
  );
}
import { useState, } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import useListen from "./hooks/useListen";

// placeholder data for username. will be changed/removed
let username = "Player 1";

export default function App() {
  // response when command voice command triggered
  const [response, setResponse] = useState("");

  const commands = [
    {
      command: "reset",
      callback: () => resetTranscript(),
    },
    {
      command: "clear",
      callback: () => resetTranscript(),
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
        <img src={logo} className="App-logo" alt="logo" />
        {/* place holder input/response for debugging */}
        <div>Input : {transcript}</div>
        <div>Response : {response}</div>
      </header>
    </div>
  );
}

import { useState, } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import useListen from "./hooks/useListen";
import Hint from "./components/Hint";

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
// this command will clear the response message
// when triggered, it will set the response message to an empty string ""
// and reset the voice transcript to allow for new voice commands to be recorded.
    {
      command: "clear response",
      callback: () => {
      setResponse("");
      resetTranscript();
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
      <Hint transcript={transcript} />
      <header className="App-header">
        {/* place holder input/response for debugging */}
        <div>Input : {transcript}</div>
        <div>Response : {response}</div>
      </header>
    </div>
  );
}

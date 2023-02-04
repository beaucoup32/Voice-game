import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
// import { Fragment } from 'react';
import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

// fixed data for username
const username = "Player 1";

function App() {
  const [message, setMessage] = useState("");

  // template for command handling
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
      callback: () => setMessage("Polo?"),
    },
    {
      command: "Ping",
      callback: () => setMessage("Pong!"),
    },
    {
      command: "Start",
      callback: () => {
        setMessage("Starting Adventure!")
        resetTranscript();
      },
    },
  ];

  const {
    transcript,
    resetTranscript,
    
  } = useSpeechRecognition({ commands });

  // converts speech to text and stores in finalTranscript
  // useEffect(() => {
  //   if (finalTranscript !== "") {
  //     console.log("Got final result:", finalTranscript);

  //     // resetTranscript();
  //   }
  // }, [interimTranscript, finalTranscript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log(
      "Your browser does not support speech recognition software! Try Chrome desktop, maybe?"
    );
  }

  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-GB",
    });
  };

  listenContinuously();

  return (
    <div className="App">
      <Navbar playerName={username} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Input : {transcript}</div>
        <div>Response : {message}</div>
      </header>
    </div>
  );
}

export default App;

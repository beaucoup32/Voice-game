import { Fragment, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import useListen from "./hooks/useListen";

export default function App() {
  let username = "Player 1";
  const commands = [
    {
      command: "reset",
      callback: () => resetTranscript,
    },
    {
      command: "clear",
      callback: () => resetTranscript,
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
      callback: () => setMessage("Starting Adventure!"),
    },
  ];
  const {
    listenContinuously,
    transcript,
    message,
    setMessage,
    resetTranscript,
    dialog,
  } = useListen(commands);
  useEffect(() => {
    listenContinuously();
  }, []);

  return (
    <div className="App">
      <Navbar playerName={username} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Input : {transcript}</div>
        <div>Response : {message}</div>
        <div>
          Dialog:{" "}
          {dialog.map((entry, index) => (
            <div key={index}>
              User: {entry.user}
              Response: {entry.response}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

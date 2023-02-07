import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import useListen from "./hooks/useListen";
import useVisualMode from "./hooks/useVisualMode";
import GameStart from "./components/GameStart";
import Hint from "./components/Hint";
import useTTS from "./hooks/useTTS";
import useCommand from "./hooks/useCommand";

// placeholder data for username. will be changed/removed

export default function App() {
  // modes to change layout
  const HOME = "HOME";
  const GAMESTART = "GAMESTART";
  const week = {
    WEEK_0: "WEEK_0",
    WEEK_1: "WEEK_1",
  };

  const { mode, transition } = useVisualMode(HOME);

  // response when command voice command triggered
  const [response, setResponse] = useState("");

  // custom hook values ./hooks/useListen

  const [handleTTS] = useTTS(response);

  const {
    commands,
    listenContinuously,
    transcript,
    resetTranscript,
    username,
  } = useCommand({ mode, transition, setResponse, handleTTS });
    
  // browser starts recording on load
  listenContinuously();

  return (
    <div className="App">
      <Navbar playerName={username} />
      <Hint commands={commands} transcript={transcript} />
      <header className="App-header">
        {/* place holder input/response for debugging */}
        <div>Response : {response}</div>
      </header>
      <main className="App-body">
        {mode === HOME && <img src={logo} className="App-logo" alt="logo" />}
        {mode === GAMESTART && <GameStart />}
      </main>
      <footer className="App-footer">
        <div className="voiceIcon">{">>"}</div>
        <h3 className="userInput">{transcript}</h3>
      </footer>
    </div>
  );
}

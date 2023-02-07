import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import useListen from "./hooks/useListen";
import useVisualMode from "./hooks/useVisualMode";
import GameStart from "./components/GameStart";
import Hint from "./components/Hint";
import useTTS from "./hooks/useTTS";

// placeholder data for username. will be changed/removed
let username = "Player 1";

export default function App() {
  // modes to change layout
  const HOME = "HOME";
  const GAMESTART = "GAMESTART";

  const { mode, transition } = useVisualMode(HOME);

  // response when command voice command triggered
  const [response, setResponse] = useState("");

  const commands = [
    {
      // this command will clear the response message
      // when triggered, it will set the response message to an empty string ""
      // and reset the voice transcript to allow for new voice commands to be recorded.
      command: ["reset", "clear"],
      callback: () => {
        transition(HOME);
        resetTranscript();
      }
    },
    {
      command: "Marco",
      callback: () => {
        setResponse("Polo?");
        handleTTS();
        // transcript resets when command is triggered
        resetTranscript();
      }
    },
    {
      command: "Ping",
      callback: () => {
        setResponse("Pong!");
        handleTTS();
        resetTranscript();
      },
    },
    {
      command: "Start",
      callback: () => {
        setResponse("Starting Adventure!");
        handleTTS();

        // changes mode to show GAMESTART component
        transition(GAMESTART);
        resetTranscript();
      },
    },
  ];

  // custom hook values ./hooks/useListen
  const { listenContinuously, transcript, resetTranscript } =
    useListen(commands);

  const [handleTTS] = useTTS(response);

  // browser starts recording on load
  listenContinuously();

  return (
    <div className="App">
      <Navbar playerName={username} />
      <Hint transcript={transcript} />
      <header className="App-header">
        {/* place holder input/response for debugging */}
        <div>Response : {response}</div>
      </header>
      <body className="App-body">
        {mode === HOME && <img src={logo} className="App-logo" alt="logo" />}
        {mode === GAMESTART && (
          <GameStart
            mode={mode}
            transition={transition}
            useListen={useListen}
            response={response}
            setResponse={setResponse}
          />
        )}
        
      </body>
      <footer className="App-footer">
        <div className="voiceIcon">{">>"}</div>
        <h3 className="userInput">{transcript}</h3>
      </footer>
    </div>
  );
}

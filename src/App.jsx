import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
// import useListen from "./hooks/useListen";
import useVisualMode from "./hooks/useVisualMode";
import GameStart from "./components/GameStart";
import ConfirmName from "./components/ConfirmName";
import Hint from "./components/Hint";
import useTTS from "./hooks/useTTS";
import useCommand from "./hooks/useCommand";
import PrepWeek from "./components/Weeks/PrepWeek/PrepWeek";
import PrepWeekS1 from "./components/Weeks/PrepWeek/PrepWeekS1";
import PrepWeekS2 from "./components/Weeks/PrepWeek/PrepWeekS2";
import PrepWeekS3 from "./components/Weeks/PrepWeek/PrepWeekS3";

export default function App() {
  // modes to change layout
  const HOME = "HOME";
  const GAMESTART = "GAMESTART";
  const CONFIRM_NAME = "ConfirmName";
  const PREPWEEK = "PREP_WEEK";
  const PREPWEEKS1 = "PREP_WEEK_S1";
  const PREPWEEKS2 = "PREP_WEEK_S2";
  const PREPWEEKS3 = "PREP_WEEK_S3";

  // const week = {
  //   WEEK_0: "WEEK_0",
  //   WEEK_1: "WEEK_1",
  // }

  const { mode, transition } = useVisualMode(HOME);

  // response when command voice command triggered
  const [response, setResponse] = useState("");

  // set player name
  const [player, setPlayer] = useState("");

  // player lives
  const [lives, setLives ] = useState(0)

  // set navbar text
  const [navText, setNavText] = useState("Say 'Start' to begin.");

  // set scenario text
  const [scenario, setScenario] = useState("");

  // custom hook values ./hooks/useListen

  const [handleTTS] = useTTS(response);

  const { commands, listenContinuously, transcript } = useCommand({
    mode,
    transition,
    setResponse,
    handleTTS,
    setPlayer,
    player,
    setNavText,
    setLives,
    lives,
    setScenario
  });

  // browser starts recording on load
  listenContinuously();

  return (
    <div className="App">
      <Navbar playerName={player} playerLives={lives} text={navText} />
      <Hint commands={commands} transcript={transcript} />
      <header className="App-header">
        {/* place holder input/response for debugging */}
        <div>{response}</div>
      </header>
      <main className="App-body">
        {mode === HOME && <img src={logo} className="App-logo" alt="logo" />}
        {mode === GAMESTART && <GameStart playerName={player} />}
        {mode === CONFIRM_NAME && <ConfirmName playerName={player} />}
        {mode === PREPWEEK && <PrepWeek />}
        {mode === PREPWEEKS1 && <PrepWeekS1 scenario={scenario}/>}
        {mode === PREPWEEKS2 && <PrepWeekS2 scenario={scenario}/>}
        {mode === PREPWEEKS3 && <PrepWeekS3 scenario={scenario}/>}
      </main>
      <footer className="App-footer">
        <div className="voiceIcon">{">>"}</div>
        <h3 className="userInput">{transcript}</h3>
      </footer>
    </div>
  );
}

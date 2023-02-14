import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import useVisualMode from "./hooks/useVisualMode";
import GameStart from "./components/GameStart";
import GameOver from "./components/GameOver";
import ConfirmName from "./components/ConfirmName";
import Hint from "./components/Hint";
import useCommand from "./hooks/useCommand";
import PrepWeek from "./components/Weeks/PrepWeek/PrepWeek";
import PrepWeekS1 from "./components/Weeks/PrepWeek/PrepWeekS1";
import PrepWeekS2 from "./components/Weeks/PrepWeek/PrepWeekS2";
import PrepWeekS3 from "./components/Weeks/PrepWeek/PrepWeekS3";
import Week1 from "./components/Weeks/Week1/Week1";
import Week1b from "./components/Weeks/Week1/Week1b";
import Week1S1 from "./components/Weeks/Week1/Week1S1";
import Week1S2 from "./components/Weeks/Week1/Week1S2";
import Week1S3 from "./components/Weeks/Week1/Week1S3";
import Week1S4 from "./components/Weeks/Week1/Week1S4";
import Week1S5 from "./components/Weeks/Week1/Week1S5";
import Week2 from "./components/Weeks/Week2/Week2";
import Week2S1 from "./components/Weeks/Week2/Week2S1";
import Week2S2 from "./components/Weeks/Week2/Week2S2";
import Week3 from "./components/Weeks/Week3/Week3";
import Week3S1 from "./components/Weeks/Week3/Week3S1";
import Week3S2 from "./components/Weeks/Week3/Week3S2";
import Week3S3 from "./components/Weeks/Week3/Week3S3";
import Week4 from "./components/Weeks/Week4/Week4";
import Week4S1 from "./components/Weeks/Week4/Week4S1";
import Week4S2 from "./components/Weeks/Week4/Week4S2";
import Week4S3 from "./components/Weeks/Week4/Week4S3";
import Week4S4 from "./components/Weeks/Week4/Week4S4";
import Week5 from "./components/Weeks/Week5/Week5";
import Week5S1 from "./components/Weeks/Week5/Week5S1";
import Week5S2 from "./components/Weeks/Week5/Week5S2";
import Week5S3 from "./components/Weeks/Week5/Week5S3";
import Week5S4 from "./components/Weeks/Week5/Week5S4";

export default function App() {
  // modes to change layout

  const HOME = "HOME";
  const GAMESTART = "GAMESTART";
  const GAMEOVER = "GAME_OVER";
  const CONFIRM_NAME = "ConfirmName";
  const PREPWEEK = "PREP_WEEK";
  const PREPWEEKS1 = "PREP_WEEK_S1";
  const PREPWEEKS2 = "PREP_WEEK_S2";
  const PREPWEEKS3 = "PREP_WEEK_S3";
  const WEEK_1 = "WEEK_1";
  const WEEK_1B = "WEEK_1B";
  const WEEK_1_S1 = "WEEK_1_S1";
  const WEEK_1_S2 = "WEEK_1_S2";
  const WEEK_1_S3 = "WEEK_1_S3";
  const WEEK_1_S4 = "WEEK_1_S4";
  const WEEK_1_S5 = "WEEK_1_S5";
  const WEEK_2 = "WEEK_2";
  const WEEK_2_S1 = "WEEK_2_S1";
  const WEEK_2_S2 = "WEEK_2_S2";
  const WEEK_3 = "WEEK_3";
  const WEEK_3_S1 = "WEEK_3_S1";
  const WEEK_3_S2 = "WEEK_3_S2";
  const WEEK_3_S3 = "WEEK_3_S3";
  const WEEK_4 = "WEEK_4";
  const WEEK_4_S1 = "WEEK_4_S1";
  const WEEK_4_S2 = "WEEK_4_S2";
  const WEEK_4_S3 = "WEEK_4_S3";
  const WEEK_4_S4 = "WEEK_4_S4";
  const WEEK_5 = "WEEK_5";
  const WEEK_5_S1 = "WEEK_5_S1";
  const WEEK_5_S2 = "WEEK_5_S2";
  const WEEK_5_S3 = "WEEK_5_S3";
  const WEEK_5_S4 = "WEEK_5_S4";

  // custom hook that sets
  const { mode, transition } = useVisualMode(HOME);

  // response when command voice command triggered
  const [response, setResponse] = useState("");

  // set player name
  const [player, setPlayer] = useState("");

  // player lives
  const [lives, setLives] = useState(0);

  // toggle big
  const [big, setBig] = useState(false);

  // toggle mushroom
  const [mushroom, setMushroom] = useState(false);

  // set navbar text
  const [navText, setNavText] = useState(`Say 'Start' to begin.`);

  // set scenario text
  const [scenario, setScenario] = useState("");

  // set FOCAL validation for W1
  const [f, setF] = useState(false);
  const [o, setO] = useState(false);
  const [c, setC] = useState(false);
  const [a, setA] = useState(false);
  const [l, setL] = useState(false);

  // set boolean T/F (multi-use, set back to false once done using)
  const [boolean, setBoolean] = useState(false);

  // set gameOver message
  const [gameOverText, setGameOverText] = useState("");

  const { commands, listenContinuously, transcript } = useCommand({
    mode,
    transition,
    setResponse,
    // handleTTS,
    setPlayer,
    player,
    setNavText,
    setLives,
    lives,
    setScenario,
    big,
    setBig,
    mushroom,
    setMushroom,
    f,
    o,
    c,
    a,
    l,
    setF,
    setO,
    setC,
    setA,
    setL,
    boolean,
    setBoolean,
    setGameOverText,
  });

  // browser starts recording on load
  listenContinuously();

  return (
    <div className="App">
      <Navbar playerName={player} playerLives={lives} text={navText} />
      <Hint commands={commands} transcript={transcript} />
      <header className="App-header">
        <h1 className="App-title">{response}</h1>
      </header>
      <main className="App-body">
        {mode === HOME && <HomePage />}
        {mode === GAMESTART && (
          <GameStart playerName={player} scenario={scenario} />
        )}
        {mode === GAMEOVER && (
          <GameOver
            playerName={player}
            playerLives={lives}
            text={gameOverText}
          />
        )}
        {mode === CONFIRM_NAME && (
          <ConfirmName playerName={player} scenario={scenario} />
        )}
        {mode === PREPWEEK && <PrepWeek scenario={scenario} />}
        {mode === PREPWEEKS1 && <PrepWeekS1 scenario={scenario} />}
        {mode === PREPWEEKS2 && <PrepWeekS2 scenario={scenario} />}
        {mode === PREPWEEKS3 && <PrepWeekS3 scenario={scenario} />}
        {mode === WEEK_1 && <Week1 playerName={player} scenario={scenario}/>}
        {mode === WEEK_1B && (
          <Week1b
            playerName={player}
            f={f}
            o={o}
            c={c}
            a={a}
            l={l}
            scenario={scenario}
          />
        )}
        {mode === WEEK_1_S1 && (
          <Week1S1 playerName={player} scenario={scenario} />
        )}
        {mode === WEEK_1_S2 && (
          <Week1S2 playerName={player} scenario={scenario} />
        )}
        {mode === WEEK_1_S3 && (
          <Week1S3 playerName={player} scenario={scenario} />
        )}
        {mode === WEEK_1_S4 && (
          <Week1S4 playerName={player} scenario={scenario} />
        )}
        {mode === WEEK_1_S5 && (
          <Week1S5 playerName={player} scenario={scenario} />
        )}

        {mode === WEEK_2 && (
          <Week2
            transition={transition}
            playerName={player}
            setNavText={setNavText}
          />
        )}
        {mode === WEEK_2_S1 && <Week2S1 scenario={scenario} />}
        {mode === WEEK_2_S2 && <Week2S2 scenario={scenario} />}

        {mode === WEEK_3 && (
          <Week3
            transition={transition}
            playerName={player}
            setNavText={setNavText}
          />
        )}
        {mode === WEEK_3_S1 && <Week3S1 scenario={scenario} />}
        {mode === WEEK_3_S2 && <Week3S2 scenario={scenario} />}
        {mode === WEEK_3_S3 && <Week3S3 scenario={scenario} />}

        {mode === WEEK_4 && (
          <Week4
            transition={transition}
            playerName={player}
            setNavText={setNavText}
          />
        )}
        {mode === WEEK_4_S1 && <Week4S1 scenario={scenario} />}
        {mode === WEEK_4_S2 && <Week4S2 scenario={scenario} />}
        {mode === WEEK_4_S3 && <Week4S3 scenario={scenario} />}
        {mode === WEEK_4_S4 && <Week4S4 scenario={scenario} />}
        {mode === WEEK_5 && (
          <Week5 transition={transition} setNavText={setNavText} />
        )}
        {mode === WEEK_5_S1 && <Week5S1 scenario={scenario} />}
        {mode === WEEK_5_S2 && <Week5S2 scenario={scenario} />}
        {mode === WEEK_5_S3 && <Week5S3 scenario={scenario} />}
        {mode === WEEK_5_S4 && <Week5S4 scenario={scenario} />}
      </main>
      <footer className="App-footer">
        <div className="mic">
          <i className="fa-solid fa-microphone fa-beat-fade" />
        </div>
        <h3 className="userInput">{transcript}</h3>
      </footer>
    </div>
  );
}

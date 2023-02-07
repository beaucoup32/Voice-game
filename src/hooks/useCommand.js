import { useEffect, useState } from "react";
// import useVisualMode from "./useVisualMode";
import useListen from "./useListen";

export default function useCommand(props) {
  const {
    mode,
    transition,
    setResponse,
    handleTTS,
    setPlayer,
    player,
    setNavText,
    setScenario,
    setLives,
    lives,
  } = props;
  const [commands, setCommands] = useState([]);
  const { listenContinuously, transcript, resetTranscript } =
    useListen(commands);

  useEffect(() => {
    switch (mode) {
      case "HOME":
        setCommands([
          {
            // this command will clear the response message
            // when triggered, it will set the response message to an empty string ""
            // and reset the voice transcript to allow for new voice commands to be recorded.
            command: ["reset", "clear"],
            callback: () => {
              transition(HOME);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: "Marco",
            callback: () => {
              setResponse("Polo?");
              handleTTS();
              // transcript resets when command is triggered
              resetTranscript();
            },
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
            command: ["Start", "thought"],
            callback: () => {
              setResponse("Starting Adventure!");
              handleTTS();

              // changes mode to show GAMESTART component
              transition(GAMESTART);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "GAMESTART":
        setCommands([
          {
            command: ["home"],
            callback: () => {
              transition(HOME);
              resetTranscript();
              setLives(0);
            },
            isFuzzyMatch: true,
          },
          {
            command: "(My name is) :name",
            callback: (name) => {
              setResponse(`Did you say ${name}?`);
              setPlayer(name);
              transition(ConfirmName);
              // transcript resets when command is triggered
              resetTranscript();
            },
          },
        ]);
        break;
      case "ConfirmName":
        setCommands([
          {
            command: ["reset", "clear", "no"],
            callback: () => {
              setResponse("Lets try this again..");
              transition(GAMESTART);
              setPlayer("");
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["yes", "confirm"],
            callback: () => {
              setResponse(`Welcome to hell ${player} 😈`);
              setNavText("PREP WEEK");
              transition(PREPWEEK);
              resetTranscript();
              setLives(3);
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "PREP_WEEK":
        setCommands([
          {
            command: ["home"],
            callback: () => {
              transition(HOME);
              resetTranscript();
            },
          },
          {
            command: "no",
            callback: () => {
              setResponse("🐔🐔🐔");
              setNavText("Say 'Start' to begin.");
              transition(HOME);
              resetTranscript();
            },
          },
          {
            command: ["yes", "yes (i am)", "yeah"],
            callback: () => {
              setNavText("PREP WEEK: SCENARIO 1");
              setResponse("");
              transition(PREPWEEKS1);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "PREP_WEEK_S1":
        setCommands([
          {
            command: ["(take a quick) break", "(short) break", "keep going", "(quick) break", "(take a) break"],

            callback: () => {
              setResponse("That one was easy 🥱");
              transition(PREPWEEKS2);
              setNavText("PREP WEEK: SCENARIO 2");
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["reward (myself)", "(play) tekken"],
            callback: () => {
              setResponse("😬");
              setScenario(
                "Unfortunatly the exictement from making it into bootcamp threw off your game, after losing your rank you decide to continue your course work"
              );

              setLives(lives - 1);
              // after a delay, will continue on to next scenario
              setTimeout(() => {
                setNavText("PREP WEEK: SCENARIO 2");
                transition(PREPWEEKS2);
                setScenario("")
              }, 5000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "PREP_WEEK_S2":
        setCommands([
          {
            command: ["(ask for) help", "ask a *"],
            callback: () => {
              setScenario(
                "After reaching out for some assistance, a peer offers to lend a hand. you finaly figure where your bug was and fix that pesky function!"
              );

              setResponse("Good call 👍");

              setTimeout(() => {
                transition(PREPWEEKS3);
                setNavText("PREP WEEK: SCENARIO 3");
                setScenario("")
              }, 5000);
              resetTranscript();
            },
          },
          {
            command: ["google", "* online"],
            callback: () => {
              setScenario(
                "After searching online for answers you come across a helpful video tutorial. you finaly figure where your bug was and fix that pesky function!"
              );

              setResponse("Thank god for Google search 😅");

              setTimeout(() => {
                transition(PREPWEEKS3);
                setNavText("PREP WEEK: SCENARIO 3");
                setScenario("")
                setResponse("");
              }, 5000);
              resetTranscript();
            },
          },
          {
            command: ["continue", "press on"],
            callback: () => {
              setScenario(
                "Hours pass and its late. Very late. At 2 AM you finaly figure where your bug was and fix that pesky function... But at what cost?"
              );

              setResponse("Maybe you should've reached out for help 🤷");
              setLives(lives - 1);

              setTimeout(() => {
                transition(PREPWEEKS3);
                
                setNavText("PREP WEEK: SCENARIO 3");
                setScenario("")
                setResponse("");
              }, 5000);
              resetTranscript();
            },
          },
          {
            command: ["give up"],
            callback: () => {
              setScenario(
                "You decide this bootcamp is too difficult for you and walk away from your laptop in shame..."
              );

              setResponse("Well... coding isnt for everyone");

              // set lives to 0 and transition to game over
              setLives(0);

              setTimeout(() => {
                transition(HOME);
                setNavText("Say 'Start' to begin.");
                setScenario("")

                setResponse("");
              }, 5000);
              resetTranscript();
            },
          },
        ]);
        break;
      case "PREP_WEEK_S3":
        setCommands([
          {
            command: ["continue", "yes"],
            callback: () => {
              setScenario(
                "Your eyes light up fircely as you add an order of instant coffee to your amazon cart as you get ready for the following week"
              );

              setResponse("Good luck! 😏");

              setTimeout(() => {
                transition(WEEK_1);
                setNavText("WEEK 1: SCENARIO 1");
                setScenario("")
                setScenario("")

              }, 6000);
              resetTranscript();
            },
          },
          {
            command: ["no", "stop", "(I) quit", "(return to) old life", "give up"],
            callback: () => {
              setScenario(
                "Fearing you may not be cut out to be a developer you decide to opt out and restock on your precious coffee beans. Also you slip on a banana peel and die"
              );
              setResponse("Had a feeling you'd say that 🥱");
              
              setLives(0);

              setTimeout(() => {
                transition(HOME);
                setNavText("Say 'Start' to begin.");
                setScenario("")

              }, 7000);
              resetTranscript();
            },
          },
        ]);
        break;
      default:
        setCommands([]);
    }
  }, [mode]);
  return { commands, listenContinuously, transcript, resetTranscript };
}

const HOME = "HOME";
const GAMESTART = "GAMESTART";
const ConfirmName = "ConfirmName";
const PREPWEEK = "PREP_WEEK";
const PREPWEEKS1 = "PREP_WEEK_S1";
const PREPWEEKS2 = "PREP_WEEK_S2";
const PREPWEEKS3 = "PREP_WEEK_S3";
const WEEK_1 = "WEEK_1";

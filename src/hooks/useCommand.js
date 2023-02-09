import { useEffect, useState } from "react";
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
    setGameOverText,
  } = props;

  const [commands, setCommands] = useState([]);
  const { listenContinuously, transcript, resetTranscript, listening } =
    useListen(commands);
  const StaticCommands = [
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
      command: ["game over", "death", "quit"],
      callback: () => {
        transition(GAMEOVER);
        setGameOverText("Test: loreum ipsum loreum ipsum");
        resetTranscript();
      },
      isFuzzyMatch: true,
    },
  ];

  useEffect(() => {
    switch (mode) {
      case "HOME":
        setCommands([
          ...StaticCommands,
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
              setPlayer("");
              handleTTS();

              // changes mode to show GAMESTART component
              transition(GAMESTART);
              setNavText("Speak into the mic 🎙️");
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "GAMESTART":
        setCommands([
          {
            command: "(My name is) :name",
            callback: (name) => {
              setResponse(`Did you say ${name}?`);
              setPlayer(name);
              transition(ConfirmName);
              // transcript resets when command is triggered
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "GAME_OVER":
        setCommands([
          {
            command: ["home", "restart", "reset"],
            callback: () => {
              transition(HOME);
              setPlayer("");
              resetTranscript();
            },
            isFuzzyMatch: true,
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
            command: ["yes", "confirm", "yeah", "yep", "yes (it is)"],
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
            command: ["no", "nope", "nevermind"],
            callback: () => {
              setResponse("🐔🐔🐔");
              setNavText("Say 'Start' to begin.");
              transition(HOME);
              resetTranscript();
            },
          },
          {
            command: ["yes", "yeah", "yep", "skip"],
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
            command: [
              "(take a quick) break",
              "(short) break",
              "keep going",
              "(quick) break",
              "(take a) break",
            ],

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
              setResponse("That was hard to watch... 😬");
              setScenario(
                "Unfortunatly the exictement from making it into bootcamp threw off your game. After losing your rank to a kid half your age, you decide to continue on with your course work"
              );

              // current lives is 2
              setLives(lives - 1);

              // after a delay, will continue on to next scenario
              setTimeout(() => {
                setNavText("PREP WEEK: SCENARIO 2");
                transition(PREPWEEKS2);
                setScenario("");
              }, 7000);
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
                setResponse("");
                setScenario("");
              }, 7000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["google", "* online"],
            callback: () => {
              setScenario(
                "After searching online for answers you come across a helpful video tutorial. You finaly figure where your bug was and fix that pesky function!"
              );

              setResponse("Thank god for Google search 😅");

              setTimeout(() => {
                transition(PREPWEEKS3);
                setNavText("PREP WEEK: SCENARIO 3");
                setScenario("");
                setResponse("");
              }, 7000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["continue", "press on", "keep going"],
            callback: () => {
              setScenario(
                "Hours pass and its late. Very late. At 2 AM you finaly figure where your bug was and fix that pesky function... But at what cost?"
              );

              setResponse("Maybe you should've reached out for help 🤷");

              // current lives is 1 or 2
              setLives(lives - 1);

              setTimeout(() => {
                transition(PREPWEEKS3);

                setNavText("PREP WEEK: SCENARIO 3");
                setScenario("");
                setResponse("");
              }, 7000);
              resetTranscript();
            },
            isFuzzyMatch: true,
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
                transition(GAMEOVER);
                setGameOverText("Say 'restart' to return to Main Menu");
                setResponse("");
              }, 7000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "PREP_WEEK_S3":
        setCommands([
          {
            command: ["continue", "yes", "keep going"],
            callback: () => {
              setScenario(
                "Your eyes light up with new found determination as you add an order of instant coffee to your Amazon cart and prepare for the following week"
              );

              setResponse("Good luck! 😏");

              setTimeout(() => {
                transition(WEEK_1);
                setNavText("WEEK 1: SCENARIO 1");
                setScenario("");
              }, 9000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: [
              "no",
              "stop",
              "(I) quit",
              "(return to) old life",
              "give up",
            ],
            callback: () => {
              setScenario(
                "Fearing you may not be cut out to be a developer you decide to opt out and restock on your precious coffee beans. Also you slip on a banana peel and die"
              );
              setResponse("Had a feeling you'd say that 🥱");

              setLives(0);

              setTimeout(() => {
                transition(GAMEOVER);
                setGameOverText("A banana peel? Really? 🤣");
                setNavText("Say 'restart' to return to Main Menu");
              }, 9000);
              resetTranscript();
            },
          },
        ]);
        break;
      default:
        setCommands([]);
    }
  }, [mode]);

  return {
    commands,
    listenContinuously,
    transcript,
    resetTranscript,
    listening,
  };
}

const HOME = "HOME";
const GAMESTART = "GAMESTART";
const GAMEOVER = "GAME_OVER";
const ConfirmName = "ConfirmName";
const PREPWEEK = "PREP_WEEK";
const PREPWEEKS1 = "PREP_WEEK_S1";
const PREPWEEKS2 = "PREP_WEEK_S2";
const PREPWEEKS3 = "PREP_WEEK_S3";
const WEEK_1 = "WEEK_1";

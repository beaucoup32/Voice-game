import { useEffect, useState } from "react";
// import useVisualMode from "./useVisualMode";
import useListen from "./useListen";

export default function useCommand(props) {
  const { mode, transition, setResponse, handleTTS, setPlayer, player } = props;
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
              setResponse("Lets try this again..")
              transition(GAMESTART);
              setPlayer("");
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["yes", "confirm"],
            callback: () => {
              setResponse(`Welcome to hell ${player} 😈`)
              transition(PREPWEEK);
              resetTranscript();
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
            }
          },
          {
            command: "no",
            callback: () => {
              transition(WEEK_1);
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
const WEEK_1 = "WEEK_1";

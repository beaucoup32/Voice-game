import { useEffect, useState } from "react";
import useVisualMode from "./useVisualMode";
import useListen from "./useListen";



export default function useCommand(props) {  
  const {mode, transition, setResponse, handleTTS} = props;  
  const [commands, setCommands] = useState([]);
  const { listenContinuously, transcript, resetTranscript } = useListen(commands);
  
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
        ]);
        break;
      case "GAMESTART":
        setCommands([
          {
            command: "yes",
            callback: () => {
              transition(WEEK_0);
              resetTranscript();
            },
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
        ]);
        break;
        case "WEEK_0":
        setCommands([
          {
            command: "no",
            callback: () => {
              transition(WEEK_1);
              resetTranscript();
            },
          },
          {

            command: ["reset", "clear"],
            callback: () => {
              transition(HOME);
              resetTranscript();
            }
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
const WEEK_0 ="WEEK_0";
const WEEK_1 ="WEEK_1";

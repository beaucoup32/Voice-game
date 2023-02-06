import { useEffect, useState } from "react";
import useListen from "./useListen";
import useTTS from "./useTTS";

export default function useCommand(keywords) {
  const [response, setResponse] = useState(""); 
  const { resetTranscript } = useListen
  
  const [handleTTS] = useTTS(response);
  const commands = [];
  
  useEffect(() => {    
    for (const key of Object.keys(keywords)) {
      commands.push({
        command: key,
        callback: () => {
          setResponse(keywords[key]);
          handleTTS();
          resetTranscript();
        },
      });
    }
  }, [keywords, handleTTS, resetTranscript]); 
  return { response }
}
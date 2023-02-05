import { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function useListen(commands) {
  const [message, setMessage] = useState("");
  const [dialog, setDialog] = useState([]);
  const {
    startListening,
    stopListening,
    listening,
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript
  } = useSpeechRecognition({ commands });

  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-GB"
    });
  };

  useEffect(() => {
    if (finalTranscript !== "") {
      console.log("final result:", finalTranscript);
      resetTranscript();
      setDialog(prev => [...prev, { user: finalTranscript, response: message }]);
    }
    setMessage(interimTranscript);
  }, [interimTranscript, finalTranscript]);
  return { listenContinuously, transcript, message, setMessage, dialog };
}
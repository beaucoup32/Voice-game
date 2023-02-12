import { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useTTS from "./useTTS";


export default function useListen(commands) {
  const { start, end } = useTTS();
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ commands });

  useEffect(() => {
    // transcript debugging (client console)
    if (finalTranscript !== "") {
      console.log("final result:", finalTranscript);
      resetTranscript();
    }

    // resets transcript when it at 250 characters
    // if (finalTranscript.length >= 150) {
    // }
  }, [interimTranscript, finalTranscript, resetTranscript]);



  // checks if browser supports speech recognition
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log(
      "Your browser does not support speech recognition software! Try Chrome desktop, maybe?"
    );
    return null;
  }
  const stopListening = SpeechRecognition.stopListening;
  const listenContinuously = () => {
    if (start) {
      SpeechRecognition.stopListening;
    } else {
      SpeechRecognition.startListening({
        continuous: true,
        language: "en-GB",
      });
    };
  };

  return { listenContinuously, transcript, resetTranscript, listening, stopListening };
}

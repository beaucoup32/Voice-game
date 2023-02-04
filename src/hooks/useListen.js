import { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function useListen(commands) {
  const { transcript, interimTranscript, finalTranscript, resetTranscript } =
    useSpeechRecognition({ commands });

  // transcript debugging (client console)
  useEffect(() => {
    if (finalTranscript !== "") {
      console.log("final result:", finalTranscript);
    }
  }, [interimTranscript, finalTranscript]);

  // checks if browser supports speech recognition
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log(
      "Your browser does not support speech recognition software! Try Chrome desktop, maybe?"
    );
    return null;
  }

  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-GB",
    });
  };

  return { listenContinuously, transcript, resetTranscript };
}

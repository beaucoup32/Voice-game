import { useSpeechRecognition } from "react-speech-recognition";

export default function useListen(keyword) {
  const {
    startListening,
    stopListening,
    listening,
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const [listenState, setListenState] = useState(false);

  useEffect(() => {
    startListening();
    return () => {
      if (transcript.toLowerCase() === 'stop listening') {
        stopListening();
      }
    };
  }, []);
 
  useEffect(() => {
    if (transcript.toLowerCase() === keyword) {
      console.log('User said "Start."');
      resetTranscript();
      setListenState(true);
    } else if {
      console.log(`User said ${transcript.toLowerCase()}`);
      resetTranscript();
    }
  }, [transcript, resetTranscript]);

}
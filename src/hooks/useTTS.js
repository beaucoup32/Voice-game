import { useState, useEffect } from 'react';
import useListen from './useListen';

export default function useTTS(sentences) {
  const femaleVoice = window.speechSynthesis.getVoices().find(voice => voice.name === 'Google UK English Female')
  const { stopListening, listenContinuously } = useListen();
  const [current, setCurrent] = useState(0);
  const [ stop, setStop ] = useState(false);
  // const [isSpeaking, setIsSpeaking] = useState(true);
  // const [start, setStart] = useState(false);
  // const [end, setEnd] = useState(false);
  /* available voices
  const voiceName = {
    default: 'Google US English',
    david: 'Microsoft David - English (United States)',
    richard: 'Microsoft Richard - English (Canada)',
    linda: 'Microsoft Linda - English (Canada)',
    mark: 'Microsoft Mark - English (United States)',
    zira: 'Microsoft Zira - English (United States)',
    ukFemale: 'Google UK English Female',
    ukMale: 'Google UK English Male'
  };
  */
 const endTTS = () => {
   listenContinuously();
   setStop(true);
  };
  
  
  
  const currentSentence = sentences[current];
  useEffect(() => {
  setCurrent(0);
}, [sentences]);
  useEffect(() => {
    //required speachSynthesis.speak() user-activation check
    if (stop === true) {
      return;
    }
    stopListening();

    //Variable of one sentence from array
    const utterance = new SpeechSynthesisUtterance(currentSentence);



    //assigns voice
    utterance.voice = femaleVoice;
    utterance.rate = 1.3;

    //reads utterance content
    window.speechSynthesis.speak(utterance);

    //sets end if array of sentences have been read or reads next array string
    utterance.addEventListener('end', () => {
      (current === sentences.length - 1) ? endTTS() : setCurrent((prev) => (prev + 1));
      //  % sentences.length);
    });

    //stops speaking after each sentence
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [current, sentences]);

  return currentSentence;

};


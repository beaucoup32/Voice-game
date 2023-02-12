import { useState, useEffect } from 'react';

export default function useTTS(sentences) {
  const [current, setCurrent] = useState(0);
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
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

  useEffect(() => {
    //required speachSynthesis.speak() user-activation check
    if (!start) {
      return;
    }
    //Variable of one sentence from array
    const utterance = new SpeechSynthesisUtterance(sentences[current]);
    
    //assigns voice
    utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.name === 'Google UK English Female');

    //reads utterance content
    window.speechSynthesis.speak(utterance);

    //sets end if array of sentences have been read or reads next array string
    utterance.addEventListener('end', () => {
      (current === sentences.length - 1) ? setEnd(true) : setCurrent((current + 1) % sentences.length);
    });

    //stops speaking after each sentence
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [current, setCurrent, start, sentences]);

  useEffect(() => {
    setStart(true);
  }, []);
  return {
    current,
    sentences,
    setStart,
    start,
    end
  };
}


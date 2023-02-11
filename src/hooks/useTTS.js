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
    if (!start) {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(sentences[current]);
    utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.name === 'Google UK English Female');
    window.speechSynthesis.speak(utterance);
    utterance.addEventListener('end', () => {
      (current === sentences.length - 1) ? setEnd(true) : setCurrent((current + 1) % sentences.length);
    });

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
    end
  };
}


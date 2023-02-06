import { useState, useEffect } from 'react';

export default function useTTS(text) {
  const [reader, setReader] = useState(window.speechSynthesis);

  useEffect(() => {
    setReader(window.speechSynthesis);
  }, []);

  const handleTTS = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    reader.speak(utterance);
  };

  return [handleTTS];
  
}
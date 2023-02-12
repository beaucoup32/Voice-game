import { useState, useEffect } from "react";
import useTTS from "./useTTS";
import useListen from "./useListen";

//expects array of text as param
export default function useDisplayTTS(textArray) {
  const [textOutput, setTextOutput] = useState("");
  const [playback, setPlayback] = useState(false);

  const { stopListening } = useListen();

  //extracts current from useTTS after providing an array of sentences
  const { sentences, current, setStart, end } = useTTS(textArray);

  //enables useTTS until sentence array ends
  useEffect(() => {
    if (end) {
      setStart(false);
      setPlayback(false);
    } else {
      setPlayback(true);
      setStart(true);
    }
  }, [end, setStart]);

  useEffect(() => {
    if (playback) {
      stopListening();
    }
  }, [playback, stopListening])

  //updates scenario to match usTTS current sentence
  useEffect(() => {
    setTextOutput(sentences[current]);
  }, [sentences, current]);

  return (
    Array.isArray(textArray) ? textOutput : console.log(textArray, `Please use correct syntax: useDisplayTTS(["sentence one", "sentence two", "etc..."])`));
};
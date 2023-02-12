import { useState, useEffect } from "react";
import useTTS from "./useTTS";

//expects array of text as param
export default function useDisplayTTS(textArray) {
  const [textOutput, setTextOutput] = useState("");

  //extracts current from useTTS after providing an array of sentences
  const { sentences, current, setStart, end } = useTTS(textArray);

  //enables useTTS until sentence array ends
  useEffect(() => {
    end ? setStart(false) : setStart(true);
  }, [end, setStart]);

  //updates scenario to match usTTS current sentence
  useEffect(() => {
    setTextOutput(sentences[current]);
  }, [sentences, current]);

  return (
    Array.isArray(textArray) ? textOutput : console.log(`Please use correct syntax: useDisplayTTS(["sentence one", "sentence two", "etc..."])`));
};
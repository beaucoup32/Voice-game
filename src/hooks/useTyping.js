import { useState, useEffect } from 'react';


export default function useTyping(sentenceString) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      for (const letter in sentenceString) {
        setTypedText(typedText + sentenceString[letter])
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [typedText, sentenceString]);
  return typedText;
}

//   !!!hook not funcitoning as intended!!!
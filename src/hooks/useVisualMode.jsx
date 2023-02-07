import { useState } from "react";

const useVisualMode = (initialMode) => {
  const [mode, setMode] = useState(initialMode);

  const [history, setHistory] = useState([mode]);

  const transition = (mode) => {
    setHistory([...history, mode]);

    return setMode(mode);
  };

  const back = () => {
    if (mode === initialMode && history.length <= 1) {
      return;
    }

    const newHist = history;
    newHist.pop();
    setHistory(newHist);

    return setMode(newHist[newHist.length - 1]);
  };

  return { mode, transition, back };
};

export default useVisualMode;

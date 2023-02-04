import React, { useState, useEffect } from "react";

const Hint = () => {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return showHint ? (
    <div>
      <p>Acceptable Voice Commands:</p>
      <ul>
        <li>Start</li>
        <li>Reset</li>
        <li>Clear</li>
        <li>Marco</li>
        <li>Ping</li>
      </ul>
    </div>
  ) : null;
};

export default Hint;


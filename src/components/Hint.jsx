import React, { useState, useEffect } from "react";
import "./hint.css";

const Hint = (props) => {
  const { transcript, commands } = props;
  const [showHint, setShowHint] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (transcript.includes("hint")) {
      setShowHint(true);
    } else if (transcript === "ok") {
      setShowHint(false);
    }
  }, [transcript]);

  const handleClick = (command) => {
    setMessage(`Say "${command}" to ${command.toLowerCase()} the game.`);
    setTimeout(() => {
      setMessage("");
      setShowHint(false);
    }, 5000);
  };

  return showHint ? (
    <div className="hint">
      <p>Click To View Hint:</p>
      <ul>
        {commands.map((command, index) => (
          <li key={index}>
            <button onClick={() => handleClick(command.command)}>
              {command.command}
            </button>
          </li>
        ))}
      </ul>
      <p>{message}</p>
    </div>
  ) : null;
};

export default Hint;

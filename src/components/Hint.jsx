import React, { useState, useEffect } from "react";
import "./hint.css";

const Hint = (props) => {
  const { transcript, commands } = props;
  const [showHint, setShowHint] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (transcript.includes("hint")) {
      setShowHint(true);
    } else if (transcript.includes("dismiss")) {
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
    <div className="Hint">
      <div className="Hint-header">
        <button onClick={() => setShowHint(false)}>Dismiss Hint</button>
      </div>
      <ul className="Hint-commands">
        {commands.map((command, index) => (
          <li key={index}>
            <button onClick={() => handleClick(command.command)}>
              {command.command.join(", ")}
            </button>
          </li>
        ))}
      </ul>
      <p className="Hint-message">{message}</p>
    </div>
  ) : null;
};

export default Hint;




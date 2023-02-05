import React, { useState, useEffect } from "react";
import "./hint.css";

const Hint = ({ transcript }) => {
const [showHint, setShowHint] = useState(false);
const [message, setMessage] = useState("");

/*
 When the client requests a "Hint" using a voice command, a list of all hints will be displayed. The client can click on any hint to view the message for that particular hint. The hint will then disappear after 5 seconds
*/

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
<li>
<button onClick={() => handleClick("Start")}>Start</button>
</li>
<li>
<button onClick={() => handleClick("Reset")}>Reset</button>
</li>
<li>
<button onClick={() => handleClick("Clear")}>Clear</button>
</li>
<li>
<button onClick={() => handleClick("Marco")}>Marco</button>
</li>
<li>
<button onClick={() => handleClick("Ping")}>Ping</button>
</li>
</ul>
<p>{message}</p>
</div>
) : null;
};

export default Hint;








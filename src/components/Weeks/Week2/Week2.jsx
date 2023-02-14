import { useState, useEffect } from "react";
// import "./week2.css";

export default function Week2(props) {
  const [scenario, setScenario] = useState(
    `Welcome to Week 2, ${props.playerName}! Let's begin!`
  );

  useEffect(() => {
    setTimeout(() => {
      setScenario(
        "This week is focused on front-end development, get ready to dive into HTML, CSS, and JavaScript."
      );
    }, 4000);

    setTimeout(() => {
      setScenario(
        "You're in the JavaScript Jungle. Be on the lookout for wild variables."
      );
    }, 8000);

    setTimeout(() => {
      setScenario("You come across a stream filled with curly braces.");
    }, 12000);
  }, []);

  return <p className="week-2-intro">{scenario}</p>;
}

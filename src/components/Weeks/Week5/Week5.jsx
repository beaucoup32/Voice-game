import { useState, useEffect } from "react";
import "./Week5.css";

const Week5 = (props) => {
  const WEEK_5_S1 = "WEEK_5_S1";
  const { transition, setNavText } = props;
  const [scenario, setScenario] = useState(
    "Wow. You actually managed to save Tweeter.."
  );

  // check hooks/useCommand for commands
  useEffect(() => {
    setTimeout(() => {
      setScenario("Not bad, im impressed.");
    }, 4000);

    setTimeout(() => {
      setScenario(
        "Unfortunatly for us however, it looks like you upset the hackers..."
      );
    }, 8000);

    setTimeout(() => {
      setScenario("Now they are targeting our bootcamps' Databases!");
    }, 12000);

    setTimeout(() => {
      setScenario("Get into our database and drop them once and for all!");
    }, 16000);

    setTimeout(() => {
      setScenario("");
      transition(WEEK_5_S1);
      setNavText("WEEK 5: SCENARIO 1");
    }, 20000);
  }, [transition, setNavText]);

  return <p className="week5-intro">{scenario}</p>;
};

export default Week5;

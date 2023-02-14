import { useState, useEffect } from "react";
// import "./Week4.css";

const Week4 = (props) => {
  const WEEK_4_S1 = "WEEK_4_S1";
  const { playerName, transition, setNavText } = props;
  const [scenario, setScenario] = useState(
    "You wake up to an emergency Zoom meeting by the Head director of the bootcamp."
  );

  // check hooks/useCommand for commands
  useEffect(() => {
    setTimeout(() => {
      setScenario(
        "Tweeter has been hacked and is on the brink of destruction!"
      );
    }, 4000);

    setTimeout(() => {
      setScenario(
        `Totally at random, the Head Director assigns the task of saving Tweeter to ${playerName}`
      );
    }, 8000);

    setTimeout(() => {
      setScenario(
        `${playerName}, fearing being called a chicken in front of their peers, decides to take on the challenge`
      );
    }, 14000);

    setTimeout(() => {
      setScenario("");
      transition(WEEK_4_S1);
      setNavText("WEEK 4: SCENARIO 1");
    }, 18000);
  }, [playerName, transition, setNavText]);

  return <p className="week4-intro">{scenario}</p>;
};

export default Week4;

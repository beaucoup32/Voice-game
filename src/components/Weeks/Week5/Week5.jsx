import { useState } from "react";
import "./Week5.css";

const Week5 = (props) => {
  const [scenario, setScenario] = useState("");

  return <p className="week5-intro">{scenario}</p>;
};

export default Week5;

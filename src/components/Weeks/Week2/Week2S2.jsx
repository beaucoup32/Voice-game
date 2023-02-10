import { Fragment } from "react";
import "./week2.css";

const Week2S2 = (props) => {
  const { scenario } = props;
  const text = (
    <>
      <p className="typed">
        You're now faced with two options, do you choose to:
      </p>
      <ul>
        <li>Spend the next few hours adapting the design to the existing code</li>
        <li>Start from scratch and implement the new design correctly</li>
      </ul>
    </>
  );
  return (
    <div className="scenario">
      {scenario ? <p className="scenario-text">{scenario}</p> : text}
    </div>
  );
};

export default Week2S2;

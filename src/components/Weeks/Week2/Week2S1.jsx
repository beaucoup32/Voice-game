
import { Fragment } from "react";
// import "./week2.css";

const Week2S1 = (props) => {
  const { scenario } = props;
  const text = (
    <>
      <p className="typed">
      You decide to drink from the stream filled with curly braces.
      </p>
      <p className="typed">
        The CEO is impressed with your work so far, but the design team has
        just sent over a new design that changes everything.
      </p>
    </>
  );
  return (
    <div className="scenario">
      {scenario ? <p className="scenario-text">{scenario}</p> : text}
    </div>
  );
};

export default Week2S1;

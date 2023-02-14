import { useState, useEffect } from "react";
import "./week3.css";
import useTTS from "../../../hooks/useTTS";

const Week3S1 = (props) => {
  const { scenario } = props;

  const text = (
    <>
      <p className="typed">
        As you start working on the tinyApp project, you realize that you're
        encountering several bugs.
      </p>
      <p className="typed">What do you do with so many 🐛🐛🐛🐛🐛🐛?</p>
    </>
  );
  return (
    <div className="scenario">
      {scenario ? <p className="scenario-text">{scenario}</p> : text}
    </div>
  );
};

export default Week3S1;

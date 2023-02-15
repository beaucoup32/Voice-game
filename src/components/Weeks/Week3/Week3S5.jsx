import { useState, useEffect } from "react";
import "./week3.css";
import useTTS from "../../../hooks/useTTS";

const Week3S5 = (props) => {
  const { scenario } = props;

  const text = (
    <>
      <p className="typed">
      Uh oh, deadline approaching 🏃‍♂️💨 Do you hit the panic button and ask for an extension 🙏 or do you unleash your superhero powers 🦸‍♂️ and work harder to finish it on time? 💪 Bonus points if you get offered 💰 from your mentor for being a boss! 💰💼
      </p>
    </>
  );

  return (
    <div className="scenario">
      {scenario ? <p className="scenario-text">{scenario}</p> : text}
    </div>
  );
};

export default Week3S5;
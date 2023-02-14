import { useState, useEffect } from "react";
// import "./week3.css";

const Week3S3 = (props) => {
  const { scenario } = props;

  const text = (
    <>
      <p className="typed">
      The instructor hands you a task that's due real soon, but you're thinking "No worries, I got this! 💪🕰️💰 (offer for overtime work). But then reality hits and you're like "Oh snap, this is actually a toughie!😓🤔💭"
      </p>
      <p className="typed">
        You're cruising along, working on your task like a boss 💪, but then BAM! Reality hits you like a ton of bricks 💥🧱...you might not be able to finish it in the allotted time frame. 😔🤯😤 Time to start negotiating for that extension or busting out some super-human productivity skills 💰💪😎.
      </p>
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

export default Week3S3;

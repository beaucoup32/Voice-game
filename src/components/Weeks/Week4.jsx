import React from "react";

const Week4 = (props) => {
  const WEEK_5 = "WEEK_5";
  const commands = [
    {
      command: "next",
      callback: () => {
        transition(WEEK_5);
        resetTranscript();
      },
    },
  ];

  const transition = props.transition;
  const { transcript, resetTranscript } = props.useListen(commands);

  return (
    <div className="container">
      <h2>Week 4: 'Launching the ISS Cat Habitat'</h2>
      <h4>Player: {props.playerName}</h4>
      {transcript}
    </div>
  );
};

export default Week4;

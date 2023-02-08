import React from "react";

const Week3 = (props) => {
  const WEEK_4 = "WEEK_4";
  const commands = [
    {
      command: "next",
      callback: () => {
        transition(WEEK_4);
        resetTranscript();
      },
    },
  ];

  const transition = props.transition;
  const { transcript, resetTranscript } = props.useListen(commands);

  return (
    <div className="container">
      <h2>Week 3: 'Reaching the Peak'</h2>
      <h4>Player: {props.playerName}</h4>
      <p>{transcript}</p>
    </div>
  );
};

export default Week3;

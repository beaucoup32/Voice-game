import React from "react";

const Week2 = (props) => {
  const WEEK_3 = "WEEK_3";
  const commands = [
    {
      command: "next",
      callback: () => {
        transition(WEEK_3);
        resetTranscript();
      },
    },
  ];

  const transition = props.transition;
  const { transcript, resetTranscript } = props.useListen(commands);

  return (
    <div className="container">
      <h2>Week 2: 'Putting Cats on the ISS'</h2>
      <h4>Player: {props.playerName}</h4>
      <p>{transcript}</p>
    </div>
  );
};

export default Week2;

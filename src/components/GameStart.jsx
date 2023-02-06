const GameStart = (props) => {
  const WEEK_0 = "WEEK_0";
  const commands = [
    {
      command: "yes",
      callback: () => {
        transition(WEEK_0);
        resetTranscript();
      },
    },
  ];

  const transition = props.transition;
  const { transcript, resetTranscript } = props.useListen(commands);

  return (
    <div className="container">
      <h2>Tell me your name :</h2>
      {transcript}
    </div>
  );
};

export default GameStart;

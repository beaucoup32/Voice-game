

const Week1 = (props) => {
  const WEEK_2 = "WEEK_2";
  const commands = [
    {
      command: "yes",
      callback: () => {
        transition(WEEK_1);
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

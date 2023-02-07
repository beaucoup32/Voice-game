const GameStart = (props) => {
  const transition = props.transition;
  const WEEK_0 = "WEEK_0";  
  const { transcript, resetTranscript } = props.useListen;

  return (
    <div className="container">
      <h2>Tell me your name :</h2>
      {transcript}
    </div>
  );
};

export default GameStart;

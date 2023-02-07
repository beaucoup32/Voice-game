import useCommand from "../hooks/useCommand";

const GameStart = (props) => {
  const {mode} = props;
  const {resetTranscript, transcript} = useCommand([{mode}])
  const WEEK_0 = "WEEK_0";  

  return (
    <div className="container">
      <h2>Tell me your name :</h2>
      {transcript}
    </div>
  );
};

export default GameStart;

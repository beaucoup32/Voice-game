import "../App.css";
import useTTS from "../hooks/useTTS";

const GameStart = (props) => {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);
  const transitionSentence = "Please tell me your name";
  return (
    <div className="container">
      <h2>{currentSentence}</h2>
      {currentSentence === transitionSentence &&(
      <h4>{props.playerName ? props.playerName : "My name is ... "}</h4>)}
    </div>
  );
};

export default GameStart;

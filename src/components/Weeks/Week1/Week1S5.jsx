import "./Week1.css";
import useTTS from "../../../hooks/useTTS";

export default function Week1S5(props) {
  const { scenario } = props; 

  const currentSentence = useTTS(scenario);
  const transitionSentence = "transition sentence";

  return (
    <div className="W1scenario">
      <p className="W1scenario-text">{currentSentence}</p>
      {currentSentence !== transitionSentence && (
        <div className="W1image-container">
          <img
            src="images/leeches.gif"
            alt="leeches-gif"
            className="W1scene-gif"
          />
        </div>
      )}
    </div>
  );
}